type BackdropProps = { onClick?: () => void };
export const Backdrop = ({ onClick }: BackdropProps) => {
    return (
        <div
            css={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
            }}
            onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
            }}
        />
    );
};
