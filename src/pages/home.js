import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FirstContent from "@/components/FirstContent";
import { useEffect, useRef, useState } from "react";
import About from "@/components/About";
import Member from "@/components/Member";
import Member_Munwan from "@/components/Member_Munwan";
import Member_1 from "@/components/Member_1";
import Join from "@/components/Join";
import Product from "@/components/Product";
import Tweets from "@/components/Tweets";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import Link from "next/link";
import { useIsVisible } from "@/components/useIsVisible";
import RootLayout from "@/layouts/layout";
import Lore from "@/components/Lore";
import ImagePopup from "@/components/ImagePopup";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide spinner after 2 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const contactRef = useRef();
    const isVisible = useIsVisible(contactRef);

    return (
        <>
            {
                loading ? (
                    <div ref={contactRef} className="flex bg-gradient-to-r from-[#212329] to-[#C18843] via-[#252B39] w-screen h-screen items-center justify-center content-center align-center" >
                        <div class="flex lg:w-56 lg:h-56 w-32 h-32 border-[10px] border-slate-100 border-t-transparent rounded-full animate-spin-slow">
                        </div>
                    </div>
                ) :
                    (<RootLayout>
                        <ImagePopup />
                        <FirstContent />
                        <About />
                        <Lore />
                        <Member />
                        <Member_Munwan />
                        <Member_1 />
                        <Join />
                        <Product />
                        <Tweets twitterId="1440730000000000000" />
                        <div id="contact" className="md:h-[420px] w-full bg-white py-10 lg:px-20 md:px-10 px-4">
                            <div ref={contactRef} className={`
        ${"flex flex-col justify-between h-full w-full bg-white border-2 border-blue-900 rounded-about transition-all duration-700 ease-in-out"}
        ${isVisible ? "opacoty-100 scale-100" : "opacity-100 scale-100"}
        `}>
                                <div className="flex md:flex-row flex-col h-auto w-full">
                                    <div className="flex flex-col lg:w-2/6 md:w-4/6">
                                        <div className="flex mt-10 md:ml-10 mx-8 content-center items-center">
                                            <div className="h-16 w-16 rounded-full justify-center text-center content-center items-center">
                                                <div>
                                                    <img src="/images/logo-blp-png.png" className="" />
                                                </div>
                                            </div>
                                            <p classNaame="text-2xl ml-4 subpixel-antialiased">
                                                Blinding Lights Project
                                            </p>
                                        </div>
                                        <div className="flex-col  mt-[30px] text-xl md:flex-col ml-10 ">
                                            <p className="xl:ml-6 md:ml-4 ml-2">
                                                Contact Us
                                            </p>
                                            <div className="flex xl:ml-8 md:ml-4 ml-2 text-[14px] mt-2 text-slate-800">
                                                <div className="flex-row">
                                                    <div className="flex">
                                                        <p className="text-black mx-2 text-[16px] w-10">Email </p>
                                                        blindinglights.project@gmail.com
                                                    </div>
                                                    <div className="flex">
                                                        <p className="text-black mx-2 text-[16px] w-10">Tel </p>
                                                        088-888-8888
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex lg:w-4/6 md:w-2/6">
                                        <div className="w-3/6 flex flex-col pt-10 justify-center text-center content-center items-center">
                                            <p className="mt-4 cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5" >
                                                <Link href="/home/#home" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                                                }}>
                                                    Home
                                                </Link>
                                            </p>
                                            <p className="mt-4 cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5" >
                                                <Link href="/home/#about" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                                                }}>
                                                    About
                                                </Link>
                                            </p>
                                            <p className="mt-4 cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5">
                                                <Link href="/home/#member" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById("member").scrollIntoView({ behavior: "smooth" });
                                                }}>
                                                    Members
                                                </Link>
                                            </p>
                                            <p className="mt-4 cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5">
                                                <Link href="/home/#join" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById("join").scrollIntoView({ behavior: "smooth" });
                                                }}>
                                                    Join
                                                </Link>
                                            </p>
                                            <p className="mt-4 cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5">
                                                <Link href="/home/#product" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById("product").scrollIntoView({ behavior: "smooth" });
                                                }}>
                                                    Products
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="w-3/6 flex flex-col pt-10 justify-center text-center content-center items-center">
                                            <a href="https://discord.gg/yRcMHhyhKT" target="_blank">
                                                <p className="flex items-center mt-4 cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5">
                                                    <FaDiscord className="mr-2" />Discord
                                                </p>
                                            </a>
                                            <a href="https://x.com/blindinglightsv" target="_blank">
                                                <p className="flex items-center mt-4 cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5">
                                                    <FaXTwitter className="mr-2" />Twitter
                                                </p>
                                            </a>
                                            <a href="https://www.youtube.com/@BlindingLights_Project" target="_blank">
                                                <p className="flex items-center mt-4 cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5">
                                                    <FaYoutube className="mr-2" />Youtube
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-16 bottom-0 relative flex justify-between">
                                    <div className="ml-10 mb-4 text-sm">© BLP 2024. Blinding Lights Project.</div>
                                    <div className="mr-10 mb-4 text-sm">{'Design by '}
                                        Delta Alizella
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RootLayout>)
            }</>
    );
}
