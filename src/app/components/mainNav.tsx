import Image from "next/image";
import logoNavy from "@/app/asset/logo/logo-navy.png";

export default function MainNav() {
  return (
    <>
      <nav className="flex items-center justify-between px-10 py-3 fixed top-0 left-0 right-0 z-50 font-rubik">
        <div>
          <a href="/">
            <Image src={logoNavy} alt="logo" className="w-20 cursor-pointer" />
          </a>
        </div>

        <div className="text-sky-700 font-rubik">
          <ul className="flex items-center gap-12">
            <li className="hover:bg-sky-700 hover:text-white px-5 py-2 rounded-full transition ease-in-out duration-400 cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="hover:bg-sky-700 hover:text-white px-5 py-2 rounded-full transition ease-in-out duration-400 cursor-pointer">
              <a href="/price">Service & Price</a>
            </li>
            <li className="hover:bg-sky-700 hover:text-white px-5 py-2 rounded-full transition ease-in-out duration-400 cursor-pointer">
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>

        <div className="bg-sky-700 px-5 py-4 text-white rounded-2xl hover:bg-sky-500 transition ease-in-out duration-300 cursor-pointer font-light">
          <a href="/login">
            <p>ORDER NOW</p>
          </a>
        </div>
      </nav>
    </>
  );
}
