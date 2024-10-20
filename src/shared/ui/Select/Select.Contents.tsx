import { MouseEventHandler, PropsWithChildren, forwardRef, useMemo } from "react";

type ContentsProps = PropsWithChildren<{ onClick?: MouseEventHandler<HTMLDivElement> }>;
export const Contents = forwardRef<HTMLDivElement, ContentsProps>(({ children, onClick }, ref) => {
    const newElement = useMemo(() => {
        return (
            <div ref={ref} onClick={onClick} css={{ display: "inherit" }}>
                {children}
            </div>
        );
    }, [children, ref, onClick]);

    return <>{newElement}</>;
});
