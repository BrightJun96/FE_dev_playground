import EmojiContainer from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/modal/emojiContainer";
import React from "react";

// 정답일 경우,텍스트와 이모지를 보여주는 컴포넌트
function CorrectAnswerExpression() {
    return (
        <section>
            <h2 className={"text-title2Bold"}>
                정답입니다!
            </h2>
            <EmojiContainer>🥳</EmojiContainer>
        </section>
    );
}

export default CorrectAnswerExpression;
