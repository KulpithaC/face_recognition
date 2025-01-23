import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
  styled,
  keyframes,
} from "@mui/material";
import Grid from "@mui/material/Grid"; // Changed from Grid2 to Grid
import UploadIcon from "@mui/icons-material/CloudUpload";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const UploadZone = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  border: `2px dashed ${theme.palette.primary.light}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    animation: `${pulseAnimation} 1.5s infinite`,
  },
}));

const CompareZone = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  border: `2px dashed ${theme.palette.success.light}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    borderColor: theme.palette.success.main,
    animation: `${pulseAnimation} 1.5s infinite`,
  },
}));

const CustomScrollbar = styled("div")(({ theme }) => ({
  maxHeight: "600px",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[400],
    borderRadius: theme.shape.borderRadius,
  },
}));

const FaceCheck = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUploadChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {/* Upload Forms Section */}
          <Grid item xs={12} md={5}>
            <Box mb={3} sx={{ boxShadow: 3, borderRadius: 1 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Register New Face
                  </Typography>
                  <form>
                    <UploadZone>
                      <input
                        type="file"
                        accept="image/*"
                        id="registerInput"
                        style={{ display: "none" }}
                        onChange={handleUploadChange}
                      />
                      <label htmlFor="registerInput">
                        <IconButton color="primary">
                          <UploadIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="body2" color="textSecondary">
                          Click to upload or drag and drop
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          PNG, JPG, GIF up to 10MB
                        </Typography>
                      </label>
                    </UploadZone>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      Register Face
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Box>
            <Box mb={3} sx={{ boxShadow: 3, borderRadius: 1 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Compare Face
                  </Typography>
                  <form>
                    <CompareZone>
                      <input
                        type="file"
                        accept="image/*"
                        id="compareInput"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="compareInput">
                        <IconButton color="success">
                          <UploadIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="body2" color="textSecondary">
                          Click to upload or drag and drop
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          PNG, JPG, GIF up to 10MB
                        </Typography>
                      </label>
                    </CompareZone>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="success"
                      sx={{ mt: 2 }}
                    >
                      Compare Face
                    </Button>
                  </form>
                  <Box
                    id="result"
                    sx={{
                      mt: 2,
                      p: 2,
                      backgroundColor: "grey.50",
                      textAlign: "center",
                      display: "none",
                    }}
                  >
                    {/* Results will appear here */}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Images List Section */}
          <Grid item xs={12} md={3}>
            <Card
              variant="outlined"
              sx={{ height: "100%", boxShadow: 3, borderRadius: 1 }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Uploaded Images
                </Typography>
                <CustomScrollbar id="imageList">
                  {/* Dynamically populated images */}
                </CustomScrollbar>
              </CardContent>
            </Card>
          </Grid>

          {/* Preview Section */}
          <Grid item xs={12} md={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", boxShadow: 3, borderRadius: 1 }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Image Preview
                </Typography>
                <Box
                  id="imagePreview"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "24rem",
                    backgroundColor: "grey.50",
                    borderRadius: 1,
                    border: "2px solid",
                    borderColor: "grey.200",
                  }}
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Preview"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    />
                  ) : (
                    <Typography color="textSecondary">
                      No image selected
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FaceCheck;
