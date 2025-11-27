import React, { useRef, useState, useEffect } from 'react';
import { useIsVisible } from './useIsVisible';
import Image from 'next/image';

const Product = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const imageList = [
        { image: "/images/products/product_halloween_25.jpeg", link: "https://x.com/blindinglightsv/status/1984213774908473458" },
        // { image: "/images/Graphic_VP.png", link: "https://t.co/UmXflFCrcS" },
    ];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setImageIndex((prevIndex) => {
    //             if (prevIndex === imageList.length - 1) {
    //                 return 0;
    //             } else {
    //                 return prevIndex + 1;
    //             }
    //         });
    //     }, 10000);
    //     return () => clearInterval(interval);
    // }
    //     , []);


    return (
        <div className='py-20 justify-center text-center bg-black ' id="product" >
            <div className='md:h-[75px] h-[50px] justify-center text-center'>
                <p className='text-[36px] font-bold text-white'>
                    PRODUCTS
                </p>
                <p className="text-slate-500 lg:px-32 md:px-24 sm:px-14 px-0 antialiased">
                    BLP Goods
                </p>
            </div>
            <div className={`${'w-full pb-10 pt-10 flex justify-center'}`} >
                <div className='flex justify-center h-auto xl:mx-20 lg:mx-16 md:mx-12 sm:mx-8 mx-4'>
                    <div className='flex xl:w-[1200px] lg:w-[1000px] w-full content-center justify-center text-center rounded-about text-white'>
                        {
                            imageList.map((item, index) => {
                                return (
                                    <div>
                                        <Image
                                            key={index}
                                            src={item.image}
                                            onClick={() => {
                                                if (item.link !== '') {
                                                    window.open(item.link, '_blank')
                                                }
                                            }}
                                            className={`
                                        ${'transition ease-in duration-300 object-contain md:min-h-[500px] md:max-h-[600px] min-h-[275px] max-h-[275px]'}
                                        ${index === imageIndex ? 'opacity-100' : 'opacity-0 hidden'}
                                        ${item.link !== '' ? 'cursor-pointer' : 'cursor-default'}
                                        `}
                                            alt='blp-main-image'
                                            width={0}
                                            height={0}
                                            loading="lazy"
                                            sizes="80vw"
                                            style={{ width: 'auto', height: 'auto' }}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center text-white mb-4'>
                {
                    imageList.map((image, index) => {
                        return (
                            <div
                                key={index}
                                className={`cursor-pointer w-4 h-4 mx-2 rounded-full ${index === imageIndex ? 'bg-white' : 'bg-slate-500'}`}
                                onClick={() => setImageIndex(index)}
                            >
                            </div>
                        );
                    })
                }
            </div>
            <div className='flex justify-center w-screen text-white'>

            </div>
        </div>
    );
}

export default Product;