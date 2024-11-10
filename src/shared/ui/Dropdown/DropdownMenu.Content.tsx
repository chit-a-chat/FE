import { PropsWithChildren } from "react";

import { Backdrop } from "../Backdrop/Backdrop";
import { Portal } from "../Portal/Portal";
import { DropdownMenu } from "./DropdownMenu";

export const Content = ({ children }: PropsWithChildren) => {
    const { anchorElement, isOpen, toggleOpen } = DropdownMenu.useContext();

    if (!anchorElement.current || !isOpen) return;

    return (
        <Portal
            zIndex={100}
            container={document.body}
            anchorEl={anchorElement.current}
            position={{ right: 0, top: "calc(100% + 10px)" }}
        >
            <Backdrop onClick={toggleOpen} />
            {children}
        </Portal>
    );
};
