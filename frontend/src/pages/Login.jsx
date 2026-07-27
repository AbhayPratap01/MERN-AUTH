import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../components/Button";
import Input from "../components/Input";

import { loginUser, getDashboard } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!email || !password) {
      return toast.error("Please fill in all fields");
    }

    if (!email.includes("@")) {
      return toast.error("Please enter a valid email");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    setLoading(true);

    try {
      // Login
      const response = await loginUser({
        email,
        password,
      });

      const token = response.data.accessToken;

      // Fetch complete user profile
      const profileResponse = await getDashboard(token);

      // Save user + token
      login(profileResponse.data.user, token);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-xl p-10 w-100">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to continue
        </p>

        <form onSubmit={handleSubmit}>

          <Input
            label="Email"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?

          <Link
            className="text-blue-600 ml-2"
            to="/signup"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;