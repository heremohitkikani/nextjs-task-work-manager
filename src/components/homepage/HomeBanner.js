"use client";
import React from "react";
import bannerImage from "../../assets/login.svg";
import Image from "next/image";
import { Poppins, Roboto } from "next/font/google";
import { Waiting_for_the_Sunrise } from "next/font/google";

const poppins = Roboto({ subsets: ["latin"], weight: "400" });
const BannerSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-0">
        <div className="mx-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:mr-8 mb-8 md:mb-0">
            <Image
              src={bannerImage}
              alt="Banner"
              className="w-full max-w-xs md:max-w-md rounded-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4  ${poppins.className}`}>
              Welcome to Task Manager
            </h1>
            <p className="text-lg md:text-xl mb-8 font-poppins">
              Organize your tasks efficiently with our task manager app.
            </p>
            <button
              className="relative bg-white text-blue-500 px-4 py-2 md:px-6 md:py-3 rounded-md shadow-md transition duration-300 hover:bg-blue-500 hover:text-white font-poppins"
              onClick={() => {
                console.log("Action button clicked!");
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;