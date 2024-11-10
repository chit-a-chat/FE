import { HTMLAttributes, PropsWithChildren } from "react";

import { DropdownMenu } from "./DropdownMenu";

export const DropdownItem = ({
    children,
    onClick,
    ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
    const { toggleOpen } = DropdownMenu.useContext();

    return (
        <div
            onClick={(e) => {
                onClick && onClick(e);
                toggleOpen();
            }}
            css={{ cursor: "pointer" }}
            {...props}
        >
            {children}
        </div>
    );
};
