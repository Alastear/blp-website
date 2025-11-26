import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function ImagePopup() {
    const [open, setOpen] = useState(false);
    const [dontShow, setDontShow] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    // รายการรูปเหมือน product page
    const imageList = [
        { image: "/images/products/product_halloween_25.jpeg", link: "https://x.com/blindinglightsv/status/1984213774908473458" },
    ];

    useEffect(() => {
        // 1) เช็กวันหมดอายุ popup
        const expireDate = new Date("2025-11-30T23:59:59").getTime();
        const now = Date.now();
        if (now > expireDate) return;

        // 2) เช็ก hide 1 วัน
        const hideUntil = localStorage.getItem("hideImageUntil");

        if (hideUntil && now < Number(hideUntil)) {
            return;
        }

        localStorage.removeItem("hideImageUntil");
        setOpen(true);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const handleClose = () => {
        if (dontShow) {
            const hideUntil = Date.now() + 24 * 60 * 60 * 1000;
            localStorage.setItem("hideImageUntil", hideUntil.toString());
        }
        setOpen(false);
    };

    if (!open) return null;

    return createPortal(
        <div
            className="
                fixed inset-0 bg-black/60 
                z-[999999]
                flex items-center justify-center
            "
        >
            <div
                className="
                    bg-white 
                    rounded-xl 
                    shadow-xl 
                    p-4 
                    w-[75vw]
                    h-[75vh]
                    max-w-[900px]
                    overflow-y-auto
                    relative z-[1000000]
                    flex flex-col items-center
                    rounded-md
                "
            >

                {/* รูปหลายรูปสลับแบบ product */}
                <div className="w-full h-[60vh] flex justify-center items-center px-4 relative">
                    <Image
                        key={imageIndex}
                        src={imageList[imageIndex].image}
                        alt="Popup Image"
                        fill // ใช้ fill ให้เต็ม container
                        style={{ objectFit: 'contain' }} // หรือ 'cover' ถ้าต้องการเต็มและ crop
                        className="rounded-md cursor-pointer"
                        onClick={() => {
                            if (imageList[imageIndex].link) {
                                window.open(imageList[imageIndex].link, "_blank");
                            }
                        }}
                    />
                </div>

                {/* จุดสถานะรูป */}
                <div className="flex justify-center my-3">
                    {imageList.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${index === imageIndex ? "bg-black" : "bg-gray-300"
                                }`}
                            onClick={() => setImageIndex(index)}
                        />
                    ))}
                </div>

                {/* Check "ไม่ต้องแสดงอีก" */}
                <div className="flex items-center mt-3">
                    <input
                        id="dontshow"
                        type="checkbox"
                        checked={dontShow}
                        onChange={() => setDontShow(!dontShow)}
                        className="mr-2"
                    />
                    <label htmlFor="dontshow">ไม่ต้องแสดงอีก (24 ชั่วโมง)</label>
                </div>

                {/* ปุ่มปิด */}
                <button
                    onClick={handleClose}
                    className="
                        mt-4 w-full 
                        bg-black text-white 
                        py-2 rounded-md 
                        hover:bg-gray-800 transition
                    "
                >
                    ปิด
                </button>
            </div>
        </div>,
        document.body
    );
}
