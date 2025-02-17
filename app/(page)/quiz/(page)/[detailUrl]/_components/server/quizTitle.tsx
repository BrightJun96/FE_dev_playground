"use server";

import React from "react";

// 퀴즈 제목
function QuizTitle({ title }: { title: string }) {
    return (
        <h1
            aria-live={"polite"}
            className={
                "text-center lg:text-title1 md:text-title2Bold sm:text-title2Bold"
            }
        >
            {title}
        </h1>
    );
}

export default QuizTitle;
