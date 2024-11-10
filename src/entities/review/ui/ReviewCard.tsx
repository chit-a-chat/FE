import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { Review } from "../model/models";

type ReviewCardProps = {
    review: Review;
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
    const theme = useTheme();
    return (
        <FlexDiv
            direction="column"
            gap={4}
            css={{
                padding: "10px 14px",
                backgroundColor: theme.palette.common.white,
                borderRadius: "8px",
                boxShadow: theme.shadow.innerShadowPrimary,
            }}
        >
            <FlexDiv gap={6} alignItems="center">
                <Text typoVariant="body/medium" color={theme.palette.common.black}>
                    {review.name}
                </Text>
                <Text typoVariant="supporting/regular" color={theme.palette.grey[5]}>
                    2w ago
                </Text>
            </FlexDiv>
            <Text color={theme.palette.common.black} typoVariant="body/regular">
                {review.content}
            </Text>
        </FlexDiv>
    );
};
