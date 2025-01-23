// src/services/faceService.js
import httpClient from "../utils/httpClient";

export const faceService = {
  registerFace: async (formData) => {
    const { data } = await httpClient.post("/faces/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },

  compareFace: async (formData) => {
    const { data } = await httpClient.post("/faces/compare", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },

  getRegisteredFaces: async () => {
    const { data } = await httpClient.get("/faces");
    return data;
  },

  deleteFace: async (id) => {
    const { data } = await httpClient.delete(`/faces/${id}`);
    return data;
  },
};
