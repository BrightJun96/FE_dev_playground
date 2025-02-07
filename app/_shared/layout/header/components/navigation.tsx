"use client";

import PATHS from "@/app/_shared/constants/paths";
import PrimaryLink from "@/app/_shared/ui/used/link/primaryLink";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

// 네비게이션
function Navigation() {
    const pathname = usePathname();

    // 네비게이션 메뉴
    const NAVMENU = [
        {
            title: "홈",
            link: "",
            imagePath: "home-icon.png",
        },
        {
            title: "퀴즈",
            link: PATHS.QUIZ,
            imagePath: "quiz-icon.svg",
        },
        {
            title: "지식",
            link: "concept",
            imagePath: "info-icon.svg",
        },
        {
            title: "로드맵",
            link: "roadmap",
            imagePath: "roadmap-icon.svg",
        },
    ];

    console.log("pathname :", pathname.substring(1));
    return (
        <nav className={"w-full pt-2"}>
            <ul
                className={
                    "w-full flex justify-between items-center gap-3 text-title3Normal"
                }
            >
                {NAVMENU.map((item, index) => (
                    <li key={index}>
                        <PrimaryLink
                            // className={"font-bold"}
                            className={`flex flex-col gap-1 justify-center items-center
                            ${item.link === pathname.substring(1) ? "font-bold text-black" : "font-medium text-gray-500"}`}
                            color={"none"}
                            href={`/${item.link}`}
                        >
                            <Image
                                width={25}
                                height={25}
                                src={`/${item.imagePath}`}
                                alt={"아이콘"}
                            />

                            {item.title}
                        </PrimaryLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
