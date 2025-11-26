import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function ImagePopup() {
    const [open, setOpen] = useState(false);
    const [dontShow, setDontShow] = useState(false);

    useEffect(() => {
        // 1) เช็กวันหมดอายุของ popup (30/11/2025)
        const expireDate = new Date("2025-11-30T23:59:59").getTime();
        const now = Date.now();
        if (now > expireDate) return;

        // 2) อ่าน "เวลาที่ห้ามแสดง" จาก localStorage
        const hideUntil = localStorage.getItem("hideImageUntil");

        if (hideUntil && now < Number(hideUntil)) {
            // ยังไม่ครบ 1 วัน ห้ามแสดง popup
            return;
        }

        // ถ้าหมดอายุแล้วหรือไม่มีข้อมูล → ลบค่าเก่า แล้วแสดง popup
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
            // ตั้งค่า 1 วัน (24 ชั่วโมง)
            const hideUntil = Date.now() + 24 * 60 * 60 * 1000;
            localStorage.setItem("hideImageUntil", hideUntil.toString());
        }
        setOpen(false);
    };

    if (!open) return null;

    return createPortal(
        <div
            className="
                fixed inset-0 
                bg-black/60 
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
                "
            >
                <Image
                    src="/images/products/product_halloween_25.jpeg"
                    alt="Popup Image"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-md"
                />

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
