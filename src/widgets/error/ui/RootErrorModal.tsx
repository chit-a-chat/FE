import { useEffect, useState } from "react";

import { createPortal } from "react-dom";

type Props = {
    title: string;
    message: string;
};

export const RootErrorModal = ({ title, message }: Props) => {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        const timeKey = setTimeout(() => {
            setIsOpen(false);
        }, 1500);

        return () => {
            clearTimeout(timeKey);
        };
    }, []);
    return (
        isOpen &&
        createPortal(
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div>{title}</div>
                <div>{message}</div>
            </div>,
            document.body
        )
    );
};
