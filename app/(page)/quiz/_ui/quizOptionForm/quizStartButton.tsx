import PrimaryButton from "@/app/_shared/ui/used/button/primaryButton";
import React from "react";

// 퀴즈 시작 버튼 컴포넌트
function QuizStartButton({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PrimaryButton
            type={"submit"}
            color={"primary"}
            className={"!w-full !h-[48px] !mt-14"}
        >
            {children}
        </PrimaryButton>
    );
}

export default QuizStartButton;
