import Image from "next/image";
import logoNavy from "@/src/app/asset/logo/logo-navy.png";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="flex w-full flex-wrap align-items-center bg-sky-300 rounded-t-4xl pt-5 text-center">
        <div className="flex flex-col-3 justify-between items-center w-[98%] mb-5 mx-auto md:flex-row">
          {/* Copyright & Class */}
          <div className="flex flex-col text-sky-700 justify-start items-center mx-auto left-0 right-0 text-center text-xs lg:text-xl">
            <p className="font-rubik">
              &copy; {new Date().getFullYear()} <b>LUMBA-UMBAH</b>
            </p>
            <p>TI 2023 C - Kelompok 5</p>
          </div>

          {/* Logo */}
          <div className="flex flex-wrap bottom-10 mx-auto">
            <a>
              <Image src={logoNavy} alt="logo" className="lg:w-20 w-10" />
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-wrap items-center lg:gap-6 gap-3 bottom-10 mx-auto">
            <a href="#">
              {" "}
              <FaWhatsapp className="lg:h-8 lg:w-8 w-5 h-5 text-sky-700" />
            </a>
            <a href="#">
              {" "}
              <Instagram className="lg:h-8 lg:w-8 w-5 h-5 text-sky-700" />
            </a>
            <a href="#">
              {" "}
              <FaFacebook className="lg:h-8 lg:w-8 w-5 h-5  text-sky-700" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
