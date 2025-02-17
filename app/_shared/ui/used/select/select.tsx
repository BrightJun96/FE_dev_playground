import { primitive } from "@/app/_shared/types/primitive";
import SelectContainer from "@/app/_shared/ui/used/select/selectContainer";
import SelectLabel from "@/app/_shared/ui/used/select/selectLabel";
import SelectLayout from "@/app/_shared/ui/used/select/selectLayout";
import SelectOption from "@/app/_shared/ui/used/select/selectOption";
import React, { ReactNode } from "react";

// 셀렉트 프롭스
interface SelectProps {
    label: ReactNode; //
    options: Option[]; // 옵션
    name: string; // 이름
}

// 옵션 타입
interface Option {
    text: string;
    value: primitive;
}

// 셀렉트 컴포넌트
function Select({ label, options, name }: SelectProps) {
    return (
        <SelectLayout>
            <SelectLabel>{label}</SelectLabel>
            <SelectContainer name={name}>
                {options.map((option, index) => (
                    <SelectOption
                        key={index}
                        value={option.value}
                    >
                        {option.text}
                    </SelectOption>
                ))}
            </SelectContainer>
        </SelectLayout>
    );
}

export default Select;
