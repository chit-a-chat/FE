type BackdropProps = { onClick?: () => void; isBlur?: boolean };
export const Backdrop = ({ onClick, isBlur = false }: BackdropProps) => {
    return (
        <div
            css={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "100vw",
                height: "100vh",
                backdropFilter: isBlur ? "blur(5px)" : undefined,
                zIndex: -1,
            }}
            onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
            }}
        />
    );
};
