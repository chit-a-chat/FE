import { Icon } from "@shared/Icon";
import { Badge } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ProfilePhotoProps = {
    src: string | null;
    index: number;
};

export const ProfilePhoto = ({ src, index }: ProfilePhotoProps) => {
    const theme = useTheme();
    return (
        <label
            css={{
                display: "flex",
                borderRadius: "30px",
                boxShadow: theme.shadow.profileShadow,
                width: "315px",
                height: "350px",
                backgroundColor:
                    "linear-gradient(151.06deg, rgba(255, 255, 255, 0.5) 3.57%, rgba(255, 255, 255, 0.2) 97.69%)",
                padding: "9px",
                position: "relative",
                cursor: "pointer",
                "&.on-file-drag": {
                    border: `1px solid ${theme.palette.primary[6]}`,
                },
            }}
            key={`photo-${index}`}
            htmlFor={`profile-file-${index}`}
            data-index={index}
        >
            {src ? (
                <img
                    src={src}
                    css={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        borderRadius: "30px",
                    }}
                    alt="profile-image"
                />
            ) : (
                <Icon type="plus" css={{ margin: "auto" }} size={"xl"} />
            )}
            <input
                type="file"
                id={`profile-file-${index}`}
                hidden
                name={`profile-file-${index}`}
                accept="image/*"
            />
            <Badge
                size="lg"
                radius="full"
                backgroundColor={theme.palette.grey[0]}
                color={theme.palette.common.black}
                css={{
                    position: "absolute",
                    left: "26px",
                    bottom: "20px",
                }}
            >
                {index ? index + 1 : "Main"}
            </Badge>
        </label>
    );
};
