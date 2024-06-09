"use client";
import UserContext from "@/context/userContext";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import signUpBanner from "../../assets/singup.svg";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid Data !!", {
        position: "top-center",
      });
      return;
    }

    //valid data
    //login

    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Logged In");
      //redirect
      context.setUser(result.user);
      router.push("/profile/user");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  const resetForm = () => {
    setLoginData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4s",
    });
  };
  return (
    <>

      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-200 px-4 sm:px-6 lg:px-8"> <span className="pb-2 md:hidden ">IF NEW ..THEN
        <Link 
          href="/signup"
          className="md:hover:text-blue-200 text-blue-200 ms-2  font-bold">
           SIGNUP
        </Link></span>
        <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6">
          <h1 className="md:text-3xl text-[15px] text-center text-white mb-5">LOGIN HERE . . . ! !</h1>
          <Image src={signUpBanner} alt="Signup banner" className="w-24 mx-auto sm:w-40" />


          <form action="#!" onSubmit={loginFormSubmitted}>
            <div className="mb-4">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
                id="user_email"
                name="user_email"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    email: event.target.value,
                  });
                }}
                value={loginData.email}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your password"
                id="user_password"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    password: event.target.value,
                  });
                }}
                value={loginData.password}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Login
              </button>
              <button onClick={resetForm}
                type="button"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default Login;
