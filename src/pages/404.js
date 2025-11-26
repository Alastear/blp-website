import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
    return (
        <div className="w-screen h-screen bg-gradient-to-r from-[#212329] to-[#C18843] via-[#252B39] flex flex-col items-center justify-center text-white px-4">
            {/* Illustration */}
            <div className="w-full max-w-md mb-8">
                {/* <Image
                    src="/images/404-illustration.png" // ใส่ไฟล์ภาพประกอบ 404
                    alt="404 Not Found"
                    width={400}
                    height={400}
                    className="object-contain"
                /> */}
            </div>

            {/* Text */}
            <h1 className="text-6xl md:text-7xl font-bold mb-4">404</h1>
            <p className="text-xl md:text-2xl mb-6 text-center">
                Oops! The page you are looking for does not exist.
            </p>

            {/* Button */}
            <Link
                href="/home"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition transform hover:scale-105"
            >
                Back to Home
            </Link>

            {/* Optional: small note */}
            <p className="mt-4 text-gray-300 text-sm md:text-base text-center">
                Or check the URL and try again
            </p>
        </div>
    );
}
