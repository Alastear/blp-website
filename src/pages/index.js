import RootLayoutIndex from "@/layouts/layout-index";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide spinner after 1 second (simulate loading)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RootLayoutIndex>
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen bg-black">
          <div className="w-24 h-24 rounded-full animate-spin
        bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 p-2">
            <div className="w-full h-full bg-black rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="relative w-screen h-screen">
          {/* Background Image */}
          <Image
            src="/images/BLP_halloween_PC_wallpaper.png"
            alt="blp-main-image"
            fill
            className="object-cover filter brightness-50"
            priority // โหลดทันที
            placeholder="blur"
            blurDataURL="/images/BLP_halloween_PC_wallpaper_small.png" // ไฟล์เล็กเป็น placeholder
          />

          {/* Overlay Text */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="md:text-[50px] sm:text-[36px] text-[32px] font-inknut text-center">
              BLINDING LIGHTS PROJECT
            </h1>
            <p className="font-ibm md:text-[28px] sm:text-[24px] text-[20px] text-center mt-2">
              ด้วยอำนาจของโชคชะตาทำให้พวกเรามาพบกัน
            </p>
            <p className="font-ibm md:text-[28px] sm:text-[24px] text-[20px] text-center mt-1">
              บังเกิดเป็นการเดินทางสุดปั่นป่วน
            </p>

            {/* Start Button */}
            <div className="flex items-center justify-center lg:w-48 sm:w-40 w-32 lg:mt-8 mt-4">
              <Image
                src="/images/button-start.png"
                alt="start-button"
                layout="responsive"
                width={200}
                height={200}
                className="object-cover cursor-pointer"
                onClick={() => {
                  window.location.href = "/home";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </RootLayoutIndex>
  );
}
