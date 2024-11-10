type ProfileProps = {
    src?: string | null;
    size?: "sm" | "md" | "l";
};

const ProfileSize: Record<NonNullable<ProfileProps["size"]>, string> = {
    sm: "42px",
    md: "60px",
    l: "158px",
} as const;

export const Profile = ({ src, size = "sm" }: ProfileProps) => {
    return (
        <img
            src={src ?? undefined}
            alt="프로필 이미지"
            css={{
                width: ProfileSize[size],
                height: ProfileSize[size],
                objectFit: "cover",
                borderRadius: "100%",
            }}
        />
    );
};
