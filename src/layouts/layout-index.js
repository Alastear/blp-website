import React, { useState } from "react";
import HeaderComponent from "@/components/Header";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const RootLayoutIndex = ({ children }) => {
    const router = useRouter();
    const [scrollY, setScrollY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const onscroll = (e) => {
        // console.log(e.target.scrollTop);
        setScrollY(e.target.scrollTop);
    }

    return (
        <>
            <Head>
                <title>BLP | Blinding Lights Project</title>
                <meta name="description" content="BLP - Blinding Lights Project: กลุ่ม VTuber สุดน่ารัก พร้อมกิจกรรม, การแสดง และสมาชิกสุดคูล" />
                <meta name="keywords" content="VTuber, Blinding Lights Project, BLP, Virtual YouTuber, Anime, Streaming" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Blinding Lights Project" />
                <meta property="og:type" content="website" />
                <meta property="og:image:url" content="/images/BLP NY_2025_Wallpaper.png" />
                <meta property="og:description" content="Blinding Lights Project" />
                <meta property="og:image" content="/images/BLP NY_2025_Wallpaper.png" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="300" />
                <link rel="icon" href="/images/logo-blp-circle.png" />
            </Head>
            <div>
                {children}
            </div>
        </>
    )

}

export default RootLayoutIndex;