type CustomIconProps = { size: number; src: string };

export function CustomIcon({ size, src }: CustomIconProps) {
    const srcPaths = src.split("/");
    const fileName = srcPaths[srcPaths.length - 1];
    return <img width={size} height={size} src={src} alt={fileName}></img>;
}
