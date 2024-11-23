import { Review } from "@entities/review/model/models";

import { FlexDiv, StarRating, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ReviewCardContentProps = {
    review: Review;
};

export const ReviewCardContent = ({ review }: ReviewCardContentProps) => {
    const theme = useTheme();
    return (
        <FlexDiv direction="column" css={{ marginTop: "16px", marginRight: "7px", flex: 1 }}>
            {/* 리뷰 점수, 등록일 */}
            <FlexDiv direction="row" gap={24}>
                <StarRating rate={review.rating} />
                <Text typoVariant="supporting/regular" color={theme.palette.grey[5]}>
                    {review.registerDate.toLocaleDateString()}
                </Text>
            </FlexDiv>
            {/* 리뷰 내용 */}
            <Text typoVariant="body/regular" color={theme.palette.common.black}>
                {review.content}
            </Text>
        </FlexDiv>
    );
};
