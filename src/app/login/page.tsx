"use client";

import { GoLock } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { loginAction } from "@/app/actions/login.action";
import { useRouter } from "next/navigation";
import Password from "@/app/components/password";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full py-35 px-4">
        <div className="bg-sky-200 rounded-4xl w-full h-full mx-auto max-w-[45%] flex flex-col">
          <form action={loginAction} className="grid grid-rows-3 gap-5">
            {/* Title */}
            <div className="flex items-center justify-center pt-2">
              <h1 className="text-6xl font-bold text-sky-700">Welcome Back!</h1>
            </div>
            {/* E-Mail */}
            <div className="flex bg-white mx-auto py-4 px-5 w-full max-w-[90%] gap-5 items-center rounded-full">
              <FiUser className="h-10 w-10 text-sky-700 mx-auto" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="gantengbanget@email.com"
                className="w-full rounded-lg py-4 px-3 bg-white text-black font-rubik text-2xl"
                aria-describedby="email"
                aria-invalid="false"
                // onChange={handleChange}
                required
              />
            </div>
            {/* Password */}
            <div className="flex bg-white mx-auto py-4 px-5 w-full max-w-[90%] gap-5 items-center rounded-full">
              <GoLock className="h-10 w-10 text-sky-700" />
              <div className="w-full rounded-lg bg-white text-black font-rubik text-2xl">
                <Password />
              </div>
            </div>
            {/* Button */}
            <div className="flex justify-center items-center gap-5 w-full">
              <button
                type="submit"
                className="bg-sky-700 hover:bg-sky-400 cursor-pointer transition ease-in-out duration-300 font-rubik font-medium text-4xl text-white rounded-full py-5 px-5 w-full max-w-[90%] gap-5 items-center"
              >
                Sign In
              </button>
            </div>
            <div className="mx-auto flex gap-5 w-full border-4 border-slate-200 hover:border-white max-w-[90%] px-6 py-3 rounded-full text-sky-800 hover:text-sky-600 transition ease-in-out duration-300   ">
              <button
                type="submit"
                className="font-medium text-4xl font-rubik w-full items-center cursor-pointer flex justify-center gap-15"
              >
                Sign In With Google
                <FcGoogle className="w-15 h-15" />
              </button>
            </div>
            <div className="flex items-center justify-center ">
              <div className="w-full max-w-[90%]">
                <p className="font-rubik font-medium text-slate-500 text-xl flex items-start">
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
