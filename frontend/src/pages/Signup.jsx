import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../components/Button";
import Input from "../components/Input";

import { signupUser, getDashboard } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("Please fill all fields");
    }

    try {
      const response = await signupUser({
        name,
        email,
        password,
      });

      const token = response.data.accessToken;

      const profileResponse = await getDashboard(token);

      login(profileResponse.data.user, token);

      toast.success("Account Created Successfully");

      navigate("/dashboard");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-xl p-10 w-100">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Sign up to get started
        </p>

        <form onSubmit={handleSubmit}>

          <Input
            label="Name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

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
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">
            Create Account
          </Button>

        </form>

        <p className="text-center mt-6">
          Already have an account?

          <Link
            to="/"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Signup;