"use client";

import { FcGoogle } from "react-icons/fc";
import Password from "@/src/app/components/password";
import { useState } from "react";

export default function Signup() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState(".");
  const [passwordMessageClass, setPasswordMessageClass] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordMatch(newPassword, repeatPassword);
  };

  const handleRepeatPasswordChange = (e) => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);
    checkPasswordMatch(password, newRepeatPassword);
  };

  const checkPasswordMatch = (pass, repeatPass) => {
    // Don't show message if either field is empty
    if (!pass || !repeatPass) {
      setPasswordMessage(".");
      setPasswordMessageClass("");
      return;
    }

    if (pass !== repeatPass) {
      setPasswordMessage("Passwords do not match");
      setPasswordMessageClass(
        "font-rubik px-3 italic text-red-500 bg-sky-100 text-xs md:text-2xs"
      );
    } else {
      setPasswordMessage("Passwords match");
      setPasswordMessageClass(
        "font-rubik px-3 italic text-green-500 text-xs md:text-2xs"
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full py-8 md:py-20 lg:py-35 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-4 max-w-[95%] lg:max-w-[90%] w-full h-full mx-auto justify-center">
          {/* Left Section */}
          <div className="flex gap-3 md:gap-5 flex-col order-1 lg:order-1">
            <div className="flex flex-col flex-grow">
              {/* Title */}
              <div className="w-full py-2 md:py-3 lg:py-5">
                <h1 className="text-sky-700 font-rubik font-bold text-3xl md:text-4xl lg:text-6xl">
                  Hi there! 👋
                </h1>
              </div>

              <div className="">
                <h1 className="text-sky-700 font-rubik font-bold text-xl md:text-2xl lg:text-4xl py-2 md:py-3 lg:py-5">
                  We want to know more about you
                </h1>
              </div>

              {/* This spacer will push the last div to the bottom */}
              <div className="flex-grow hidden lg:block"></div>

              <div className="hidden md:block">
                <h1 className="text-sky-700 font-rubik font-bold text-lg md:text-xl lg:text-2xl py-2 md:py-3 lg:py-5">
                  Chill out! We're not going to misuse your data 😉
                </h1>
              </div>
            </div>
          </div>

          {/* Right Section Table */}
          <div className="bg-sky-100 rounded-2xl md:rounded-3xl lg:rounded-4xl col-span-1 lg:col-span-2 order-1 lg:order-2">
            <form
              action=""
              className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-6 lg:py-4 px-4 md:px-6 lg:px-8 gap-3 md:gap-4"
            >
              {/* Name */}
              <div className="">
                <p className="font-jakarta text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl px-2">
                  First Name
                </p>
                <input
                  type="text"
                  className="w-full rounded-lg py-2 md:py-2.5 lg:py-3 px-2 bg-white text-black font-rubik text-base md:text-lg lg:text-xl"
                  required
                />
              </div>
              <div className="">
                <p className="font-jakarta text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl px-2">
                  Last Name
                </p>
                <input
                  type="text"
                  className="w-full rounded-lg py-2 md:py-2.5 lg:py-3 px-2 bg-white text-black font-rubik text-base md:text-lg lg:text-xl"
                />
              </div>

              {/* Email */}
              <div className="col-span-1 md:col-span-2">
                <p className="font-jakarta text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl px-2">
                  E-Mail
                </p>
                <input
                  type="email"
                  className="w-full rounded-lg py-2 md:py-2.5 lg:py-3 px-2 bg-white text-black font-rubik text-base md:text-lg lg:text-xl"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="col-span-1">
                <p className="font-jakarta text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl px-2">
                  Phone Number
                </p>
                <input
                  type="number"
                  className="w-full rounded-lg py-2 md:py-2.5 lg:py-3 px-2 bg-white text-black font-rubik text-base md:text-lg lg:text-xl"
                  required
                />
              </div>

              {/* Username */}
              <div className="col-span-1">
                <p className="font-jakarta text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl px-2">
                  Username
                </p>
                <input
                  type="text"
                  className="w-full rounded-lg py-2 md:py-2.5 lg:py-3 px-2 bg-white text-black font-rubik text-base md:text-lg lg:text-xl"
                  required
                />
              </div>

              {/* Password */}
              <div className="col-span-1 md:col-span-2">
                <p className="font-jakarta text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl px-2">
                  Password
                </p>
                <div className="w-full rounded-lg bg-white text-black font-rubik">
                  <Password
                    passwordId="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full rounded-lg py-1 md:py-2 lg:py-3 px-2 bg-white text-black font-rubik text-base md:text-lg lg:text-xl"
                  />
                </div>
              </div>

              {/* Repeat Password */}
              <div className="col-span-1 md:col-span-2">
                <p className="font-jakarta text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl px-2">
                  Repeat Password
                </p>
                <div className="w-full rounded-lg bg-white text-black font-rubik">
                  <Password
                    passwordId="repeat-password"
                    placeholder="Repeat your password"
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                    className="w-full rounded-lg py-1 md:py-2 lg:py-3 px-2 bg-white text-black font-rubik text-base md:text-lg lg:text-xl"
                  />
                </div>
                <p id="password-check" className={passwordMessageClass}>
                  {passwordMessage}
                </p>
              </div>

              {/* Sign Up Button */}
              <div className="col-span-1 md:col-span-1 flex justify-center items-center w-full">
                <button className="w-full bg-sky-700 rounded-full py-2 md:py-2.5 lg:py-3 px-6 md:px-8 lg:px-30 text-white font-rubik text-lg md:text-xl lg:text-2xl font-medium hover:bg-sky-500 transition ease-in-out duration-300 cursor-pointer">
                  Sign Up
                </button>
              </div>

              {/* Google Sign Up Button */}
              <div className="col-span-1 md:col-span-1 flex justify-center items-center w-full">
                <button className="w-full flex justify-center items-center border-2 border-white bg-white rounded-full py-2 md:py-2.5 px-4 md:px-6 lg:px-15 gap-2 md:gap-3 lg:gap-4 text-sky-700 font-rubik text-base md:text-lg lg:text-xl font-bold transition hover:border-sky-500 hover:text-sky-500 ease-in-out duration-300 cursor-pointer">
                  <span className="text-sm md:text-base lg:text-2xs">
                    Sign Up With Google
                  </span>
                  <FcGoogle className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 " />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
