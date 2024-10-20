import { MouseEventHandler, PropsWithChildren, forwardRef } from "react";

type ContentsProps = PropsWithChildren<{ onClick?: MouseEventHandler<HTMLDivElement> }>;
export const Contents = forwardRef<HTMLDivElement, ContentsProps>(({ children, onClick }, ref) => {
    return (
        <div ref={ref} onClick={onClick} css={{ display: "inherit" }} role="combobox">
            {children}
        </div>
    );
});
