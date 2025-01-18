from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import HTMLResponse, JSONResponse
from starlette.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from PIL import Image
import face_recognition
import numpy as np
import pickle
import io
import os
from fastapi.encoders import jsonable_encoder
import shutil

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/uploads", StaticFiles(directory=UPLOAD_FOLDER), name="uploads")

known_face_names = []
known_face_encodings = []

faces_file = "faces.p"
if os.path.exists(faces_file):
    known_face_names, known_face_encodings = pickle.load(open(faces_file, "rb"))

@app.get("/", response_class=HTMLResponse)
async def get_ui():
    with open("static/index.html", "r") as f:
        return f.read()

uploaded_images = []


@app.post("/images")
async def uploadImages(image: UploadFile = File(...)):
    file_location = f"{UPLOAD_FOLDER}/{image.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    uploaded_images.append(image.filename)

    return JSONResponse(
        content={
            "success": True,
            "image_name": image.filename,
            "image_url": f"/uploads/{image.filename}",
        }
    )


@app.get("/images")
async def getImages():
    image_list = [{"name": image, "url": f"/uploads/{image}"} for image in uploaded_images]
    return JSONResponse(content=image_list)


@app.delete("/images")
async def deleteImage(image_name: str):
    if image_name not in uploaded_images:
        raise HTTPException(status_code=404, detail="Image not found.")

    uploaded_images.remove(image_name)
    file_path = os.path.join(UPLOAD_FOLDER, image_name)
    if os.path.exists(file_path):
        os.remove(file_path)
        return JSONResponse(content={"success": True, "message": f"Image '{image_name}' deleted successfully."})
    else:
        raise HTTPException(status_code=404, detail="Image file not found on server.")




@app.post("/compare_face")
async def compare_face(compare_image: UploadFile = File(...)):
    data = await compare_image.read()
    img = Image.open(io.BytesIO(data))

    face_locations = face_recognition.face_locations(np.array(img))
    face_encodings = face_recognition.face_encodings(np.array(img), face_locations)

    face_names = []
    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
        face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
        best_match_index = np.argmin(face_distances)
        if matches[best_match_index]:
            name = known_face_names[best_match_index]
        else:
            name = "Unknown"
        face_names.append(name)

    return JSONResponse(content={"faces": face_names})
