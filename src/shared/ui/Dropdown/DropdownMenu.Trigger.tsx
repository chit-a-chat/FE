import { HTMLAttributes, PropsWithChildren } from "react";

import { DropdownMenu } from "./DropdownMenu";

export const Trigger = ({
    children,
    ...props
}: PropsWithChildren<Omit<HTMLAttributes<HTMLDivElement>, "onClick">>) => {
    const { toggleOpen, anchorElement } = DropdownMenu.useContext();
    return (
        <div
            className="dropdown-trigger"
            onClick={toggleOpen}
            css={{ cursor: "pointer" }}
            ref={anchorElement}
            {...props}
        >
            {children}
        </div>
    );
};
