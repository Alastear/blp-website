import Image from 'next/image';
import { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";

const FirstContent = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div id="home" className='w-full flex justify-center'>
            <div className='flex md:mt-20 mt-24 justify-center w-auto h-auto mx-4'>
                <div className='xl:w-[1200px] lg:w-[1000px] w-full content-center text-center rounded-about text-white justify-items-center relative'>
                    {loading && (
                        <div className="absolute inset-0 flex justify-center items-center bg-gray-300 animate-pulse rounded-about">
                            <div className="w-full h-full bg-gray-400 rounded-about"></div>
                        </div>
                    )}
                    <Image
                        src='/images/BLP_HERO.png'
                        alt='blp-main-image'
                        width={0}
                        height={0}
                        loading="lazy"
                        sizes="200vw"
                        style={{ width: 'auto', height: 'auto' }}
                        className='border-[7px] md:border-[20px] border-red-100 relative'
                        onLoadingComplete={() => setLoading(false)}
                    />
                </div>
            </div>
        </div>
    );
}

export default FirstContent;
