import React from "react";

// 셀렉트 컨테이너 컴포넌트
function SelectContainer({
    children,
    name,
}: {
    children: React.ReactNode;
    name: string;
}) {
    return (
        <select
            className={
                "pl-2 border-r-8 border-transparent  outline outline-gray-200 h-[48px] rounded-[12px]"
            }
            name={name}
            id={"select"}
        >
            {children}
        </select>
    );
}

export default SelectContainer;
