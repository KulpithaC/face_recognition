import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  Typography,
  useTheme,
} from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import Footer from "../components/Footer";

function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flex: 1,
          mt: 8,
          width: "100%",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          <Box
            sx={{
              pt: 15,
              pb: 8,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Face Recognition System
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{
                maxWidth: { xs: "100%", sm: 600 },
                mx: "auto",
                mb: 6,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              A simple and secure way to manage access through facial
              recognition technology.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/login"
                sx={{
                  px: 4,
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/about"
                sx={{
                  px: 4,
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    borderColor: "primary.dark",
                    color: "primary.dark",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                About
              </Button>
            </Box>
          </Box>

          <Grid2 container spacing={4} sx={{ mb: 8 }}>
            <Grid2 item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <SpeedIcon
                    sx={{ fontSize: 40, mb: 2, color: "primary.main" }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Fast Detection
                  </Typography>
                  <Typography color="text.secondary">
                    Quick and accurate facial recognition processing.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <SecurityIcon
                    sx={{ fontSize: 40, mb: 2, color: "primary.main" }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Secure Access
                  </Typography>
                  <Typography color="text.secondary">
                    Enhanced security for your applications.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <IntegrationInstructionsIcon
                    sx={{ fontSize: 40, mb: 2, color: "primary.main" }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Easy Integration
                  </Typography>
                  <Typography color="text.secondary">
                    Simple API for seamless implementation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
