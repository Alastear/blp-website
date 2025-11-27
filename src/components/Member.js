import React, { useRef, useState } from 'react';
import { useIsVisible } from './useIsVisible';
import { FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const Member = () => {
    const [mourseIn, setMouseIn] = useState(false);
    const [mourseIn2, setMouseIn2] = useState(false);
    const [mourseIn3, setMouseIn3] = useState(false);

    const memberRef = useRef();
    const memberVisible = useIsVisible(memberRef);
    const firstRef = useRef();
    const firstVisible = useIsVisible(firstRef);
    const step1Ref = useRef();
    const step1Visible = useIsVisible(step1Ref);
    const step2Ref = useRef();
    const step2Visible = useIsVisible(step2Ref);
    const step3Ref = useRef();
    const step3Visible = useIsVisible(step3Ref);
    const step4Ref = useRef();
    const step4Visible = useIsVisible(step4Ref);

    return (
        <div id="member" className="lg:h-[1000px] h-auto lg:pb-0 pb-10 w-full bg-black">
            <div ref={memberRef} className={`
            ${"mt-10 flex justify-center transition transition-opacity ease-in duration-700 delay-300"} 
            ${memberVisible ? "opacity-100" : "opacity-0"}
            `}>
                <div className="md:mt-14 mt-10 py-5 md:px-16 sm:px-8 px-2 md:mx-0 mx-6 text-center flex-col w-full ">
                    <p className="text-left lg:text-[36px] md:text-[32px] text-[28px] font-bold subpixel-antialiased text-white font-inknut">
                        <u>
                            MEMBERS
                        </u>
                    </p>
                </div>
            </div>
            <div ref={firstRef} className={`
            ${"flex justify-center transition transition-opacity ease-in duration-700 delay-500"} 
            ${firstVisible ? "opacity-100" : "opacity-0"}
            `}>
                <div className="py-5 md:px-16 sm:px-8 px-2 md:mx-0 mx-6 text-center lg:h-[150px] md:h-[140px] sm:h-[125px] h-[100px] lg:w-[1000px] md:w-[800px] w-auto ">
                    <p className="font-inknut lg:text-[80px] md:text-[64px] text-[50px] font-bold subpixel-antialiased text-white w-auto">
                        <span className='block md:inline-block content-end'>
                            VOYAGER
                        </span>
                        <span className="lg:ml-10 md:ml-6 ml-2 lg:text-[36px] md:text-[28px] text-[20px] text-white px-0 antialiased content-end">
                            GEN 0
                            <span className='absolute translate-y-10 lg:text-[20px] md:text-[15px] text-[10px]'>th</span>
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center">
                <div ref={step1Ref} className={`
                ${"h-[600px] w-[350px] bg-[#3344CC] mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300"}
                ${step1Visible ? "scale-100" : "scale-0"}
                `}>
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[590px]">
                        <div className={`
                    ${"w-full h-[590px] relative "}
                    `}>
                            <div className="flex image-wrapper-aqua h-4/6 w-full text-white overflow-hidden">
                                <div className='flex justify-center'>
                                    <Image
                                        src="/images/aquamarinia/main.png"
                                        className={`object-contain`}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    AquaMarinia
                                </p>
                                <p className="text-slate-100 ml-10 mt-4 mr-10">
                                    Spirit of the Ocean, Protector of the Sea
                                </p>
                            </div>
                        </div>
                        <div className={`
                    ${"w-full h-[600px] relative text-white content-center bg-gradient-to-r from-blue-700 to-sky-400"}
                    `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-blue-900">
                                <a href="/members/AquaMarinia">
                                    AquaMarinia
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@AquaMarinia_BLP" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://twitter.com/AquaMariniaVT" target="_blank">
                                        <FaXTwitter className="mr-2" />Twitter
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5">
                                    <a className='flex items-center' href="https://www.twitch.tv/aquamarinia" target="_blank">
                                        <FaTwitch className="mr-2" />Twitch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={step2Ref} className={`
                ${"h-[600px] w-[350px] bg-[#259A30] mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300"}
                ${step2Visible ? "scale-100" : "scale-0"}
                `}>
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[590px]">
                        <div className={`
                    ${"w-full h-[590px] relative "}
                    `}>
                            <div className="flex image-wrapper-milyni h-4/6 w-full text-white overflow-hidden ">
                                <div className='flex justify-center'>
                                    <Image
                                        src="/images/milyni/main.png"
                                        className={`object-contain`}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    Milyni Tivona
                                </p>
                                <p className="text-slate-100 ml-10 mt-4 mr-10">
                                    Mail girl from a magical world!!
                                </p>
                            </div>
                        </div>
                        <div className={`
                    ${"w-full h-[600px] relative text-white content-center bg-gradient-to-r from-lime-700 to-green-400 "}
                    `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-green-900">
                                <a href="/members/Milyni_Tivona">
                                    Milyni Tivona
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@MilyniTivona_BLP" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://twitter.com/Milyni_Tivona" target="_blank">
                                        <FaXTwitter className="mr-2" />Twitter
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5">
                                    <a className='flex items-center' href="https://www.twitch.tv/milynitivona" target="_blank">
                                        <FaTwitch className="mr-2" />Twitch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={step3Ref} className={`
                ${"h-[600px] w-[350px] bg-[#6D419F] mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300"}
                ${step3Visible ? "scale-100" : "scale-0"}
                `} >
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[590px]">
                        <div className={`
                    ${"w-full h-[590px] relative "} 
                    `}>
                            <div className="flex image-wrapper-lafka h-4/6 w-full text-white overflow-hidden ">
                                <div className='flex justify-center'>
                                    <Image
                                        src="/images/lafka/main.png"
                                        className={`object-contain`}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    Lafka Balea
                                </p>
                                <p className="text-slate-100 ml-10 mt-4 mr-10">
                                    A Pirate Captain who believe in freedom and kindness
                                </p>
                            </div>
                        </div>
                        <div className={`
                    ${"w-full h-[600px] relative text-white content-center bg-gradient-to-r from-violet-700 to-purple-400"}
                    `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-purple-900">
                                <a href="/members/Lafka_Balea">
                                    Lafka Balea
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@lafkabalea_blp" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://x.com/LafkaBalea" target="_blank">
                                        <FaXTwitter className="mr-2" />Twitter
                                    </a>
                                </div>
                                {/* <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5">
                                    <a className='flex items-center' href="https://www.twitch.tv/milynitivona" target="_blank">
                                        <FaTwitch className="mr-2" />Twitch
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={step4Ref} className={`
                ${"h-[600px] w-[350px] bg-[#92C5AA] mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300"}
                ${step4Visible ? "scale-100" : "scale-0"}
                `} >
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[590px]">
                        <div className={`
                    ${"w-full h-[590px] relative "} 
                    `}>
                            <div className="flex image-wrapper-anorz h-4/6 w-full text-white overflow-hidden">
                                <Image
                                    src="/images/anorz/main.png"
                                    className={`object-contain`}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    Anorz Mystrosia
                                </p>
                                <p className="text-slate-100 ml-10 mt-4 mr-10">
                                    Green Wizard, The magic shop owner at the misty swamp
                                </p>
                            </div>
                        </div>
                        <div className={`
                    ${"w-full h-[600px] relative text-white content-center bg-gradient-to-r from-teal-700 to-red-700"}
                    `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-emerald-900">
                                <a href="/members/Anorz_Mystrosia">
                                    Anorz Mystrosia
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@AnorzMystrosia_BLP" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://x.com/AnorzMystrosia" target="_blank">
                                        <FaXTwitter className="mr-2" />Twitter
                                    </a>
                                </div>
                                {/* <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5">
                                    <a className='flex items-center' href="https://www.twitch.tv/milynitivona" target="_blank">
                                        <FaTwitch className="mr-2" />Twitch
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;