import React, { useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isNewUser, setisNewUser] = useState(true);

  // SWITCH LOGIN TO CREATE ACCOUNT AND CREATE ACCOUNT - LOG IN
  const switchAuthHandeler = () => {
    setisNewUser((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`flex justify-between  fixed w-full z-30 top-0 transition-all bg-black items-center text-green-500 font-custom py-2 px-20`}
      >
        <Link to={"/home"}>
          <div className="flex justify-center items-center gap-2 py-2 md:py-0">
            <h1 className=" text-3xl md:text-2xl font-semibold">Cinewave</h1>
            <BiSolidMoviePlay className="text-5xl" />
          </div>
        </Link>
        <Link to={"/account"}>
          <div>
            <FaHouseUser className="md:text-4xl text-6xl py-2 md:py-0" />
          </div>
        </Link>
      </nav>
      <div
        className="h-screen relative flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('./auth-bg.jpg')",
          opacity: 0.5,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  min-[600px]:w-[600px] h-fit rounded-2xl bg-black bg-opacity-60 text-white px-6 py-10">
        <h1 className=" text-5xl md:text-3xl font-custom ">
          {isNewUser ? "Create Account" : "Log In"}
        </h1>
        <form className="  py-8 px-3 flex flex-col gap-2 text-xl md:text-[1rem]  font-custom">
          <div className=" flex flex-col gap-1">
            <label>Email</label>
            <input
              type="Name"
              placeholder="Enter Your Name ...."
              className=" p-4 md:px-2  md:py-2 rounded-md text-black"
            />
          </div>

          <div className=" flex flex-col">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password ...."
              className=" p-4 md:p-2 rounded-md text-black"
            />
          </div>
          {isNewUser && (
            <div className=" flex flex-col gap-1">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password ...."
                className=" p-4 md:p-2 rounded-md text-black"
              />
            </div>
          )}

          <button className=" bg-green-500 p-4 md:p-2 mt-2 rounded-md">
            {isNewUser ? "Log In" : "Create Account"}
          </button>
        </form>
        <h1 className="text-2xl md:text-[1rem] px-3">
          {isNewUser ? "Already have An Account ?" : "New user ?"}
        </h1>
        <h1
          className=" text-green-500 cursor-pointer px-3 text-2xl md:text-[1rem]"
          onClick={switchAuthHandeler}
        >
          {isNewUser ? "Log In " : "Create Account "}
        </h1>
      </div>
    </>
  );
};

export default AuthPage;
