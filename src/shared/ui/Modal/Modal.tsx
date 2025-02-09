import { PropsWithChildren } from "react";

import { Backdrop } from "../Backdrop/Backdrop";
import { Portal } from "../Portal/Portal";

export const Modal = ({ children }: PropsWithChildren) => {
    if (!children) {
        return;
    }

    return (
        <Portal zIndex={100}>
            <Backdrop isBlur={true} />
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
        </Portal>
    );
};
