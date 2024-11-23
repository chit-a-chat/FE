import { useState } from "react";

import { useTheme } from "@emotion/react";

type ProfileProps = {
    src?: string | null;
    size?: "sm" | "md" | "l" | "xl";
};

const ProfileSize: Record<NonNullable<ProfileProps["size"]>, string> = {
    sm: "42px",
    md: "60px",
    l: "112px",
    xl: "158px",
} as const;

export const Profile = ({ src, size = "sm" }: ProfileProps) => {
    const theme = useTheme();
    const [isError, setIsError] = useState(false);
    return (
        <img
            src={isError || !src ? "/defaultProfile.png" : src}
            alt="프로필 이미지"
            css={{
                width: ProfileSize[size],
                height: ProfileSize[size],
                objectFit: "cover",
                borderRadius: "100%",
                boxShadow: theme.shadow.profileShadow,
            }}
            onError={() => {
                if (isError) return;
                setIsError(true);
            }}
        />
    );
};
