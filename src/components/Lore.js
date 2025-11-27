import React, { useRef } from 'react';
import { useIsVisible } from './useIsVisible';
import Image from 'next/image';

const Lore = () => {
    const loreRef = useRef();
    const isIsVisible = useIsVisible(loreRef);
    return (
        <>
            <div className={`${'w-full md:pt-20 pt-10 flex justify-center'}`} id="lore">
                <div
                    ref={loreRef}
                    className={`
                ${"content-center flex-col h-auto w-full transition ease-in duration-500"}
                ${isIsVisible ? "scale-x-100 opacity-100" : "scale-x-100 opacity-0"}
                `}>
                    <div className="flex items-center justify-center h-full w-full">
                        <Image
                            src='/images/lore-bg.png'
                            alt='blp-main-image'
                            layout="responsive"
                            width={1920}
                            height={1080}
                            className="object-cover filter min-h-[300px] brightness-50"
                        />
                    </div>
                    <div className='absolute top-0 flex w-full h-full items-center justify-center content-center bg-black rounded-full opacity-50'>

                    </div>
                    <div className='absolute top-0 flex md:flex-row flex-col w-full h-full items-center justify-center content-center rounded-full md:px-16 sm:px-8 px-4'>
                        <div className='flex-1 md:pt-0 sm:pt-8 pt-16'>
                            <div className='flex flex-col'>
                                <div className="flex lg:text-[50px] md:text-[44px] sm:text-[32px] text-[24px] text-white font-inknut md:text-start text-center md:justify-start justify-center mx-2">
                                    BLINDING LIGHTS PROJECT
                                </div>
                                <div className="flex font-ibm lg:text-[32px] md:text-[26px] sm:text-[22px] text-[18px]  text-white md:justify-start justify-center mx-2">
                                    ด้วยอำนาจของโชคชะตาทำให้พวกเรามาพบกัน
                                </div>
                                <div className="flex font-ibm lg:text-[32px] md:text-[26px] sm:text-[22px] text-[18px] text-white md:justify-start justify-center mx-2">
                                    บังเกิดเป็นการเดินทางสุดปั่นป่วน
                                </div>
                            </div>
                        </div>
                        <div className='flex-none lg:w-60 md:w-44 sm:w-40 w-32 md:pb-0 pb-8'>
                            <Image
                                src='/images/button-lore.png'
                                alt='blp-main-image'
                                layout="responsive"
                                width={300}
                                height={300}
                                className="object-cover cursor-pointer"
                                // onClick={() => { window.location.href = '/lore' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lore;