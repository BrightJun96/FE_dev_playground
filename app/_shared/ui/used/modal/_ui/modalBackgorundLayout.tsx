import useHandleModal from "@/app/_shared/ui/used/modal/_hook/useHandleModal";
import React from "react";

// 모달 백그라운드 레이아웃
const ModalBackgroundLayout = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const { handleBackgroundClick } = useHandleModal();

    return (
        <div
            className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/30"
            role={"button"}
            onClick={handleBackgroundClick}
        >
            {children}
        </div>
    );
};

export default ModalBackgroundLayout;
