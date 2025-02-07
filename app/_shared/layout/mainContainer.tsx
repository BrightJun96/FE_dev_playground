"use client";

import { StringUtils } from "@/app/_shared/utils/class/StringUtils";
import { usePathname } from "next/navigation";
import React from "react";

// 메인 컨테이너(루트 레이아웃 내부의 컨테이너)
function MainContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const portfolioPath =
        StringUtils.removeFirstChar(pathname) ===
        "portfolio";

    const generalCaseCls =
        "w-full min-h-[100vh]  lg:flex lg:justify-center md:flex md:justify-center mb-[65px] sm:px-[10px] pt-10 sm:pt-5";

    const portfolioPathCaseCls =
        "w-full lg:h-[100vh] md:h-[100vh] sm:h-[100vh] lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center sm:px-[10px]";

    const processCls = !portfolioPath
        ? generalCaseCls
        : portfolioPathCaseCls;
    return (
        <main
            // className={""}
            className={processCls}
        >
            {children}
        </main>
    );
}

export default MainContainer;
