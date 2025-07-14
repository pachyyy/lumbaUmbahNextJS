import Image from "next/image";
import logoNavy from "@/app/asset/logo/logo-navy.png";

export default function NotFound() {
  return (
    <div className="font-rubik text-sky-700 text-xl font-medium flex flex-col items-center justify-center h-screen gap-5">
      <Image src={logoNavy} alt="logo" className="w-50 -" />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
