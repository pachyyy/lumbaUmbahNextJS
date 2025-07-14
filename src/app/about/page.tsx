import Image from "next/image";
import sofa from "@/app/asset/sofa.svg";
import time from "@/app/asset/time.svg";
import shirt from "@/app/asset/shirt.svg";

export default function About() {
  return (
    <>
      <div className="h-full w-full">
        <div className="flex flex-col gap-25 justify-center items-center h-screen">
          <div className="fixed top-30">
            <h1 className="mx-auto font-rubik text-5xl font-bold text-sky-700">
              About Us
            </h1>
          </div>

          <div className="flex items-center gap-10 px-5">
            <div className="flex items-center justify-center flex-col gap-10 w-[70%]">
              <Image src={sofa} alt="sofa" className="w-30" />
              <p className="font-rubik font-medium text-sky-700 text-4xl">
                Easy
              </p>
              <h1 className="font-rubik font-medium text-center text-black text-xl">
                Your convenience and satisfaction is our priority. Each of our
                service is designed wholeheartedly for the sake of presenting
                our customer with the best experience.
              </h1>
            </div>

            <div className="flex items-center justify-center flex-col gap-10 w-[70%]">
              <Image src={time} alt="sofa" className="w-30" />
              <p className="font-rubik font-medium text-sky-700 text-4xl">
                Time-Saving
              </p>
              <h1 className="font-rubik font-medium text-center text-black text-xl">
                Use pickup and drop-off options to save even more of your time
                for free! We take matters into our hands so you can go about
                your busy schedule.
              </h1>
            </div>

            <div className="flex items-center justify-center flex-col gap-10 w-[70%]">
              <Image src={shirt} alt="sofa" className="w-30" />
              <p className="font-rubik font-medium text-sky-700 text-4xl">
                Spotless
              </p>
              <h1 className="font-rubik font-medium text-center text-black text-xl">
                We understand the importance of hygiene. Feel the comfort of
                wearing a sanitized, softened, and scented cloth while its been
                washed nice and well.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
