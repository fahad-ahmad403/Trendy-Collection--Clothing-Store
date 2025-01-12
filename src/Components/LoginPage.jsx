import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Loading from "./ui/Loading.jsx";
import { Input } from "./ui/input.jsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form.jsx";

const FormSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

function LoginPage({ token, setToken, setIsLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "mor_2314",
      password: "83r5^_",
    },
  });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleLogin = (data) => {
    setLoading(<Loading />);
    setError("");
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        setToken(res.data.token);
        setIsLoggedIn(true);
        localStorage.setItem("userToken", res.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center bg-grey/10 h-screen">
      <h2 className="font-bold text-4xl py-12 sevillana text-orange">
        Trendy Collection
      </h2>
      <div className="flex flex-col items-center sm:w-[350px] xs:w-[300px] h-auto bg-white shadow-lg rounded-lg p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLogin)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your username"
                      autoComplete="off"
                      className="border border-lightgrey rounded w-full h-[40px] pl-2 font-normal focus:ring-1 focus:ring-blue focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              className=""
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="font-semibold">Password</FormLabel>
                  <FormControl className="">
                    <Input
                      {...field}
                      placeholder="Enter your password"
                      autoComplete="off"
                      type={showPassword ? "text" : "password"}
                      className="border border-lightgrey rounded w-full h-[40px] pl-2 font-normal focus:ring-1 focus:ring-blue focus:outline-none"
                    />
                  </FormControl>
                  <span
                    className="absolute right-3 top-8 text-grey cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </span>

                  <FormMessage />
                  <FormDescription />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="w-full h-[40px] flex justify-center items-center gap-x-2 bg-orange text-purple font-semibold rounded-lg hover:bg-orange/95"
            >
              Login {loading}
            </button>
            {error && (
              <p className="flex items-center justify-center text-red font-semibold text-[12px]">
                Invalid username or password.
              </p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
