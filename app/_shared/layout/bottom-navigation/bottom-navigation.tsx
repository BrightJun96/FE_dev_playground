import Navigation from "@/app/_shared/layout/header/components/navigation";
import React from "react";

function BottomNavigation() {
    return (
        <footer
            className={
                "fixed bottom-0 left-0 w-full h-[65px] flex justify-center items-center bg-gray-50"
            }
        >
            <hr />

            <Navigation />
        </footer>
    );
}

export default BottomNavigation;
