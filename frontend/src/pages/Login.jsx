import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import GoogleIcon from "../components/GoogleIcon";
import FacebookIcon from "../components/FacebookIcon";
import { authService } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rememberMe" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await authService.login({
        email: formData.email,
        password: formData.password,
        remember: formData.rememberMe,
      });
      navigate("/face-check");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setError("");
    try {
      await authService.socialLogin(provider);
      navigate("/face-check");
    } catch (err) {
      setError(`${provider} login failed. Please try again.`);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={(theme) => ({
          padding: "2rem",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "10vh",
          border: "1px solid",
          borderColor: (theme.vars || theme).palette.grey[300],
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: `calc(${theme.shape.borderRadius}px * 2)`,
          backgroundColor: (theme.vars || theme).palette.background.paper,
          ...theme.applyStyles("dark", {
            borderColor: (theme.vars || theme).palette.grey[800],
          }),
          [theme.breakpoints.down("sm")]: {
            background: "none",
            border: "none",
            boxShadow: "none",
          },
        })}
      >
        <Stack spacing={2}>
          <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: 500 }}>
            Sign in
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            label="Email"
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={!!error}
          />

          <TextField
            label="Password"
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            error={!!error}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                color="primary"
              />
            }
            label="Remember me"
            sx={{
              marginLeft: "-12px",
              "& .MuiFormControlLabel-label": { userSelect: "none" },
            }}
          />

          <Button type="submit" variant="contained" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>

          <Typography
            component="div"
            variant="body2"
            sx={{ textAlign: "center" }}
          >
            Don&apos;t have an account?{" "}
            <Link href="/signup" variant="body2">
              Sign up
            </Link>
          </Typography>

          <Divider sx={{ fontSize: "0.785rem" }}>or</Divider>

          <Button
            startIcon={<GoogleIcon />}
            variant="outlined"
            fullWidth
            onClick={() => handleSocialLogin("google")}
            disabled={isLoading}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "1rem",
              },
            }}
          >
            Sign in with Google
          </Button>

          <Button
            startIcon={<FacebookIcon />}
            variant="outlined"
            fullWidth
            onClick={() => handleSocialLogin("facebook")}
            disabled={isLoading}
          >
            Sign in with Facebook
          </Button>
        </Stack>
      </Box>

      <div className="w-fit mx-auto mt-20 border border-secondary-dark rounded p-2 text-sm max-w-lg bg-secondary shadow-lg shadow-secondary/50 text-dark dark:text-black">
        Login today to gain access to the best deals and discounts!
      </div>
    </>
  );
}

export default Login;
