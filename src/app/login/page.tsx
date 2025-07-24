"use client";

import { GoLock } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { loginAction } from "@/src/app/actions/login.action";
import { useRouter } from "next/navigation";
import Password from "@/src/app/components/password";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen max-h-[70%] w-full py-4 px-3 md:py-5 lg:px-4">
        <div className="bg-sky-100 rounded-4xl w-full mx-auto max-w-[80%] md:max-w-[45%] flex flex-col py-5">
          <form action={loginAction} className="grid grid-rows-3 gap-5">
            {/* Title */}
            <div className="flex items-center justify-center pt-2">
              <h1 className="text-3xl md:text-6xl font-bold text-sky-700">
                Welcome Back!
              </h1>
            </div>
            {/* E-Mail */}
            <div className="flex bg-white mx-auto py-2 px-3 md:py-4 md:px-5 w-full max-w-[90%] gap-5 items-center rounded-full">
              <FiUser className="h-5 w-5 md:h-10 md:w-10 text-sky-700 mx-auto" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="gantengbanget@email.com"
                className="w-full rounded-lg py-4 px-3 bg-white text-black font-rubik text-2xs md:text-2xl"
                aria-describedby="email"
                aria-invalid="false"
                // onChange={handleChange}
                required
              />
            </div>
            {/* Password */}
            <div className="flex bg-white mx-auto py-4 px-5 w-full max-w-[90%] gap-5 items-center rounded-full">
              <GoLock className="h-5 w-5 md:h-10 md:w-10 text-sky-700" />
              <div className="w-full rounded-lg bg-white text-black font-rubik text-2xs md:text-2xl">
                <Password />
              </div>
            </div>
            {/* Button */}
            <div className="flex justify-center items-center gap-2 md:gap-5 w-full">
              <button
                type="submit"
                className="bg-sky-700 hover:bg-sky-400 cursor-pointer transition ease-in-out duration-300 font-rubik font-medium text-xl md:text-4xl text-white rounded-full py-3 px-5 md:py-5 w-full max-w-[90%] gap-5 items-center"
              >
                Sign In
              </button>
            </div>
            <div className="mx-auto flex gap-2 md:gap-5 w-full border-4 border-slate-50 hover:border-slate-300 max-w-[90%] px-6 py-3 rounded-full text-sky-800 hover:text-sky-600 transition ease-in-out duration-300   ">
              <button
                type="submit"
                className="font-medium text-2xs md:text-4xl font-rubik w-full items-center cursor-pointer flex justify-center gap-5 md:gap-15"
              >
                Sign In With Google
                <FcGoogle className="w-7 h-7 md:w-15 md:h-15" />
              </button>
            </div>

            <div className="flex items-center justify-center ">
              <div className="w-full max-w-[90%]">
                <p className="font-rubik font-medium text-slate-500 text-xs md:text-xl flex items-start">
                  Don't have an account?
                  <a
                    href="/signup"
                    className="text-sky-700 hover:text-sky-400 transition-ease-in-out duration-300"
                  >
                    Create a new one!
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
