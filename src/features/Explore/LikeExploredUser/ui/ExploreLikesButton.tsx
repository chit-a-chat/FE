import { Icon } from "@shared/Icon";
import { Badge } from "@shared/ui";

import { useTheme } from "@emotion/react";
import { useMutation } from "@tanstack/react-query";

type ExploreLikeButtonProps = {
    numOfLikes: number;
    targetId: string;
    isLike: boolean;
};

export const ExploreLikesButton = ({ numOfLikes, targetId, isLike }: ExploreLikeButtonProps) => {
    const theme = useTheme();
    const { mutate: postLikes } = useMutation({
        mutationFn: async () => {
            console.log(targetId, !isLike, "좋아요!");
        },
    });

    return (
        <div>
            <Badge
                radius="full"
                fontVariant="tag/medium"
                color={theme.palette.primary[5]}
                padding={"10px"}
                gap={4}
                isShadow
                css={{
                    alignItems: "center",
                    cursor: "pointer",
                }}
                onClick={postLikes}
            >
                <Icon type="heart-circle" />
                {numOfLikes}
            </Badge>
        </div>
    );
};
