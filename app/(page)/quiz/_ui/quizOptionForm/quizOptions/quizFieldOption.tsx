import { FIELD_OPTIONS } from "@/app/(page)/quiz/constant";
import Select from "@/app/_shared/ui/used/select/select";
import React from "react";

// 퀴즈 옵션 컴포넌트(분야)
function QuizFieldOption() {
    return (
        <section>
            <Select
                name={"field"}
                label={"분야"}
                options={FIELD_OPTIONS}
            />
        </section>
    );
}

export default QuizFieldOption;
