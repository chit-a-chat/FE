import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { Reviewee, Reviewer } from "../../model/models";

type ReviewerProfileProps = {
    reviewer: Reviewer | Reviewee;
};

export const ReviewerProfile = ({ reviewer }: ReviewerProfileProps) => {
    const theme = useTheme();
    return (
        <FlexDiv direction="row" gap={30} alignItems="center" css={{ height: "fit-content" }}>
            {/* 프로필 사진 */}
            <Profile src={reviewer.images[0]} size="l" />
            {/* 이름, 평균 리뷰 점수, 총 리뷰 수 */}
            <FlexDiv direction="column">
                <Text typoVariant="body/medium" color={theme.palette.common.black}>
                    {reviewer.name}
                </Text>
                <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                    Average rating:&nbsp;
                    <span css={{ color: theme.palette.grey[8] }}>{reviewer.averageRating}</span>
                </Text>
                <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                    Total reviews:&nbsp;
                    <span css={{ color: theme.palette.grey[8] }}>{reviewer.totalReviews}</span>
                </Text>
            </FlexDiv>
        </FlexDiv>
    );
};
