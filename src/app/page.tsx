import Image from "next/image";
import hero from "@/app/asset/washing-machine.svg";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen px-10">
        <div className="flex flex-col justify-center h-full gap-5 px-8">
          <p className="text-7xl font-rubik font-light text-sky-900">
            "BIAR KAMI
          </p>
          <p className="text-7xl font-rubik font-light text-sky-900">YANG</p>
          <p className="text-7xl font-rubik font-medium text-sky-900 italic">
            UMBAH"
          </p>

          {/* small font */}
          <div>
            <p className="text-xl font-rubik font-regular text-sky-900">
              <span className="font-bold italic">Lumba-umbah</span> provides a
              variety of services you need
            </p>
            <p className="font-medium text-xl text-sky-900 font-rubik">
              - wash, dry, or fold -
            </p>
          </div>

          <p className="text-xl font-rubik font-regular text-sky-900">
            <span className="font-bold">Pickup</span> and{" "}
            <span className="font-bold">drop-off</span> options are{" "}
            <span className="font-bold">available!</span>
          </p>

          <div className="flex gap-2">
            <p className="text-4xl font-rubik font-medium text-sky-900">7+</p>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-rubik font-medium text-sky-900">
                Years of
              </p>
              <p className="text-xs font-rubik font-medium text-sky-900">
                Experience
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div>
            <Image src={hero} alt="hero" className="w-150" />
          </div>
        </div>
      </div>
    </>
  );
}
