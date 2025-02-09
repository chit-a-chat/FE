import { PropsWithChildren } from "react";

import { Backdrop } from "../Backdrop/Backdrop";
import { Portal2 } from "../Portal/Portal2";

type ModalProps = PropsWithChildren<{ onClickBackdrop?: () => void }>;

export const Modal = ({ children, onClickBackdrop }: ModalProps) => {
    if (!children) {
        return;
    }

    return (
        <Portal2>
            <Backdrop isBlur={true} onClick={onClickBackdrop} />
            <div
                css={{
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    translate: "-50% -50%",
                }}
            >
                {children}
            </div>
        </Portal2>
    );
};
