"use client";
import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h1 className="text-xl sm:text-3xl font-semibold">
              WELCOME TO WORK MANAGER
            </h1>
            <div className="inline-block text-white">
              <p className="mt-2">
                Add your daily task and manage it with ease.
              </p>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <h1 className="text-white font-semibold mb-2 me-4">
              Important Links
            </h1>
            <ul className="flex flex-col sm:flex-row justify-center lg:justify-end">
              <li className="mx-2 my-1 sm:my-0">
                <a
                  href="#!"
                  className="text-white hover:text-blue-200 flex items-center"
                >
                  <FaFacebook className="mr-2" />
                  Facebook
                </a>
              </li>
              <li className="mx-2 my-1 sm:my-0">
                <a
                  href="#!"
                  className="text-white hover:text-blue-200 flex items-center"
                >
                  <FaYoutube className="mr-2" />
                  YouTube
                </a>
              </li>
              <li className="mx-2 my-1 sm:my-0">
                <a
                  href="#!"
                  className="text-white hover:text-blue-200 flex items-center"
                >
                  <FaInstagram className="mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;