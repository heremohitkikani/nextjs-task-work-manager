"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import Image from "next/image";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  console.log(context);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <>
      <div className="mb-50">
        <nav className="bg-blue-600 text-[15px] mb-56 py-4 px-6 sm:px-12 md:px-24 lg:px-36 flex justify-between items-center fixed top-0 left-0 w-full z-10">
          <div className="brand">
            <h1 className="text-2xl font-semibold text-white">
              <Link href="/home"><Image src={logo} alt="logo" width={55} height={50} /></Link>
              {/* <Link href="/">WORK MANAGER</Link> */}
            </h1>
          </div>
          <button
            className="text-white sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div
            className={`fixed inset-0 z-50 bg-blue-600 bg-opacity-90 sm:bg-transparent sm:static sm:flex sm:items-center sm:space-x-5 ${isMenuOpen ? "flex" : "hidden"
              } flex-col sm:flex-row sm:h-auto h-full`}
          >
            <button
              className="absolute top-4 right-4 text-white sm:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col mt-10 md:mt-0 sm:flex-row space-y-6 sm:space-y-0 sm:space-x-5 text-white sm:items-center justify-center sm:justify-start sm:h-auto h-full sm:pt-0 px-4 sm:px-0">
              {context.user && (
                <>
                  <li>
                    <Link
                      href="/home"
                      className="hover:text-blue-200 font-bold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/add-task"
                      className="hover:text-blue-200 font-bold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ADD TASK
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/show-tasks"
                      className="hover:text-blue-200 font-bold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      SHOW TASKS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile/user"
                      className="hover:text-blue-200 font-bold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PROFILE
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-3 text-white sm:items-center justify-center sm:justify-end sm:h-auto h-full  sm:pt-0 px-4 sm:px-0">
              {context.user ? (
                <>
                  <li>
                    <span className="hover:text-blue-200 font-bold">
                      {context.user.name} ..!
                    </span>
                  </li>
                  <li>
                    <button
                      onClick={doLogout}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      LOGOUT
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className="hover:text-blue-200 font-bold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      LOGIN
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="hover:text-blue-200 font-bold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      SIGNUP
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>

        <div className="">
          {/* Main content goes here */}
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;