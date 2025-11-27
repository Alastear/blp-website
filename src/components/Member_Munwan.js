import React, { useRef, useState } from 'react';
import { useIsVisible } from './useIsVisible';
import { FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const Member = () => {

    const memberRef = useRef();
    const memberVisible = useIsVisible(memberRef);
    const firstRef = useRef();
    const firstVisible = useIsVisible(firstRef);
    const step1Ref = useRef();
    const step1Visible = useIsVisible(step1Ref);

    return (
        <div id="member" className="lg:h-[1000px] h-auto lg:pb-0 pb-10 w-full bg-black">
            <div ref={memberRef} className={`
            ${"mt-0 flex justify-center transition transition-opacity ease-in duration-700 delay-300"} 
            ${memberVisible ? "opacity-100" : "opacity-0"}
            `}>
            </div>
            <div ref={firstRef} className={`
            ${"flex justify-center transition transition-opacity ease-in duration-700 delay-500"} 
            ${firstVisible ? "opacity-100" : "opacity-0"}
            `}>
                <div className="py-5 md:px-16 sm:px-8 px-2 md:mx-0 mx-6 text-center lg:h-[150px] md:h-[140px] sm:h-[125px] h-[100px] lg:w-[1000px] md:w-[800px] w-auto ">
                    <p className="font-inknut lg:text-[80px] md:text-[64px] text-[50px] font-bold subpixel-antialiased text-white w-auto">
                        <span className='block md:inline-block content-end'>
                            MUNWAN
                        </span>
                        <span className="lg:ml-10 md:ml-6 ml-2 lg:text-[36px] md:text-[28px] text-[20px] text-white px-0 antialiased content-end">
                            GEN Special
                            <span className='absolute translate-y-10 lg:text-[20px] md:text-[15px] text-[10px]'></span>
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center">
                <div ref={step1Ref} className={`
                            ${"h-[600px] w-[350px] bg-[#cc80df] mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300"}
                            ${step1Visible ? "scale-100" : "scale-0"}
                            `} >
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[590px]">
                        <div className={`
                                ${"w-full h-[590px] relative "} 
                                `}>
                            <div className="flex image-wrapper-gan h-4/6 w-full text-white overflow-hidden ">
                                <div className='flex justify-center'>
                                    <Image
                                        src="/images/gan/munwan-demo.jpg"
                                        className={`object-contain`}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    Gan
                                </p>
                                <p className="text-slate-400 ml-10 mt-4 mr-10">
                                    A Sweet Potato
                                </p>
                            </div>
                        </div>
                        <div className={`
                                ${"w-full h-[600px] relative text-white content-center bg-gradient-to-r from-[#9358b2] to-[#fff2b8]"}
                                `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-purple-900">
                                <a href="/members/Gan">
                                    Gan
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@NongMunWan" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://x.com/MunWanGanGan" target="_blank">
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