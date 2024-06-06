'use client';
import UserContext from "@/context/userContext";
import { useContext } from "react";

export default function Profile() {
  const context = useContext(UserContext);
  console.log(context);
  console.log(context.user);

  return (
    <div className="p-4 w-[70%] mx-auto text-white bg-gray-800 shadow-lg rounded-lg md:max-w-2xl py-12 md:py-20 my-20">
      {context.user ? (
        <>
          <h1 className="text-2xl font-bold ">Hello, {context.user.name}</h1>
          <p className="mt-2">Email: {context.user.email}</p>
          <p className="mt-2 ">About: {context.user.about}</p>
          {/* <img className="mt-4 w-32 h-32 rounded-full mx-auto md:w-48 md:h-48" src={context.user.profileURL} alt="Profile" /> */}
        </>
      ) : (
        <p className="">Loading user data...</p>
      )}
    </div>
  );
}
