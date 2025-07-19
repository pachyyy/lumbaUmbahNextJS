"use client";

import { FcGoogle } from "react-icons/fc";
import Password from "@/app/components/password";
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
        "font-rubik px-3 italic text-red-500 bg-sky-100 text-2xs"
      );
    } else {
      setPasswordMessage("Passwords match");
      setPasswordMessageClass("font-rubik px-3 italic text-green-500 text-2xs");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full py-35 px-4">
        <div className="grid grid-cols-3 gap-4 max-w-[95%] w-full h-full mx-auto justify-center">
          {/* Left Section */}
          <div className="flex gap-5 flex-col">
            <div className="flex flex-col flex-grow">
              {/* Title */}
              <div className="w-full py-5">
                <h1 className="text-sky-700 font-rubik font-bold text-6xl">
                  Hi there! 👋
                </h1>
              </div>

              <div className="">
                <h1 className="text-sky-700 font-rubik font-bold text-4xl py-5">
                  We want to know more about you
                </h1>
              </div>

              {/* This spacer will push the last div to the bottom */}
              <div className="flex-grow"></div>

              <div className="">
                <h1 className="text-sky-700 font-rubik font-bold text-2xl py-5">
                  Chill out! We're not going to misuse your data 😉
                </h1>
              </div>
            </div>
          </div>
          {/* Right Section Table */}
          <div className="bg-sky-100 rounded-4xl col-span-2">
            <form
              action=""
              className="grid grid-row-7 grid-cols-2 py-4 px-8 gap-4"
            >
              {/* Name */}
              <div className="">
                <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">
                  First Name
                </p>
                <input
                  type="text"
                  className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl"
                />
              </div>
              <div className="">
                <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">
                  Last Name
                </p>
                <input
                  type="text"
                  className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl"
                />
              </div>

              {/* Email */}
              <div className="col-span-2">
                <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">
                  E-Mail
                </p>
                <input
                  type="email"
                  className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl"
                />
              </div>

              {/* Phone Number */}
              <div>
                <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">
                  Phone Number
                </p>
                <input
                  type="number"
                  className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl"
                />
              </div>

              {/* Username */}
              <div>
                <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">
                  Username
                </p>
                <input
                  type="text"
                  className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl"
                />
              </div>

              {/* Password */}
              <div className="col-span-2">
                <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">
                  Password
                </p>
                <div className="w-full rounded-lg bg-white text-black font-rubik text-2xl">
                  <Password
                    passwordId="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl"
                  />
                </div>
              </div>

              {/* Repeat Password */}
              <div className="col-span-2">
                <p className="font-jakarta text-gray-500 font-semibold text-2xl px-2">
                  Repeat Password
                </p>
                <div className="w-full rounded-lg bg-white text-black font-rubik text-2xl">
                  <Password
                    passwordId="repeat-password"
                    placeholder="Repeat your password"
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                    className="w-full rounded-lg py-4 px-2 bg-white text-black font-rubik text-xl"
                  />
                </div>
                <p id="password-check" className={passwordMessageClass}>
                  {passwordMessage}
                </p>
              </div>

              {/* Sign Up Button */}
              <div className="flex justify-center items-center mx-auto bg-sky-700 rounded-full px-30 text-white font-rubik text-2xl font-medium hover:bg-sky-500 transition ease-in-out duration-300 cursor-pointer">
                <button className=" cursor-pointer">Sign Up</button>
              </div>

              {/* Google Sign Up Button */}
              <div className="flex justify-center items-center mx-auto border-2 border-white bg-white rounded-full py-2 px-15 gap-4 text-sky-700 font-rubik text-xl font-bold transition hover:border-sky-500 hover:text-sky-500 ease-in-out duration-300 cursor-pointer">
                <button className="cursor-pointer text-2xs">
                  Sign Up With Google
                </button>
                <FcGoogle className="w-10 h-10 cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
