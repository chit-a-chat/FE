import { useState } from "react";

import { useTheme } from "@emotion/react";

type ProfileProps = {
    src?: string | null;
    /**
     * - sm : 42px
     * - md : 60px
     * - lg : 90px
     * - xl : 112px
     * - xxl : 158px
     * - xxxl : 200px
     * - undefined = md
     */
    size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
};

const ProfileSize: Record<NonNullable<ProfileProps["size"]>, string> = {
    sm: "42px",
    md: "60px",
    lg: "90px",
    xl: "112px",
    xxl: "158px",
    xxxl: "200px",
} as const;

/**
 * 프로필 컴포넌트
 * @param size - "sm" | "md" | "lg" | "xl" | "xxl"
 * @default size - "md", src - undefined
 */
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
