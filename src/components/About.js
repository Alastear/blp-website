import React, { useRef } from 'react';
import { useIsVisible } from './useIsVisible';
import Image from 'next/image';

const About = () => {
    const aboutRef = useRef();
    const isIsVisible = useIsVisible(aboutRef);
    return (
        <>
            <div className={`${'w-full md:pt-20 pt-10 flex justify-center'}`} id="about">
                <div
                    ref={aboutRef}
                    className={`
                ${"md:mt-4 mt-2 py-5 md:px-20 sm:px-10 px-4 md:mx-0 mx-6 content-center flex-col lg:h-[600px] md:h-[600px] sm:h-[600px] h-[600px] w-auto transition ease-in duration-500"}
                ${isIsVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                `}>
                    <div className='flex items-center content-center justify-center mb-4'>
                        <Image
                            src='/images/logo-blp-02.png'
                            alt='blp-main-image'
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="flex md:text-[50px] sm:text-[32px] text-[24px] text-white font-inknut text-center justify-center mx-2">
                        BLINDING LIGHTS PROJECT
                    </div>
                    <div className="flex font-ibm md:text-[26px] sm:text-[22px] text-[18px] text-white text-center justify-center mx-2">
                        กลุ่ม Vtuber ที่รวมตัวกันภายใต้ชื่อ Blinding Lights Project
                    </div>
                    <div className="flex font-ibm md:text-[26px] sm:text-[22px] text-[18px] text-white text-center justify-center mx-2">
                        เหมือนกับชื่อ ดั่งแสงที่สว่างจ้า
                    </div>
                    <div className='flex justify-center mt-8'>
                        <div className='cursor-pointer text-[32px] font-inknut text-center content-center w-[200px] h-[60px] bg-gradient-to-br from-white via-slate-100 to-slate-200 rounded-about'>
                            MORE
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;