import { useTranslation } from "react-i18next";

import { ExploreLikesButton } from "@features/Explore/LikeExploredUser";

import { useExploreStore } from "@entities/explore";
import { ReviewCard } from "@entities/review";

import { Icon } from "@shared/Icon";
import { Badge, FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";

import { BlurProfileCard } from "./BlurProfileCard/BlurProfileCard";
import { ExploreBadge } from "./ExploreBadge/ExploreBadge";
import { LabeledBadgeList } from "./LabeledBadgeList/LabeledBadgeList";

export const ExploreDetails = () => {
    const theme = useTheme();
    const fetchExplore = useExploreStore((state) => state.fetchExplore);
    const { data, isSuccess } = useQuery({ queryKey: [], queryFn: fetchExplore });
    const { t } = useTranslation("explore");
    if (!isSuccess) {
        return;
    }
    const {
        interests,
        aboutMe,
        lookingFor,
        moreAboutMe,
        languages,
        reviews,
        bio,
        distance,
        likes,
        name,
        age,
        images,
    } = data;

    return (
        <FlexDiv direction="row" gap={10} css={{ flex: 1 }}>
            {/* 좌측 카드 */}
            <FlexDiv css={{ flex: 1, minWidth: 0 }}>
                <FlexDiv direction="column" css={{ flex: 1, minWidth: 0 }}>
                    <BlurProfileCard images={images} />
                    <FlexDiv
                        direction="column"
                        css={{
                            backgroundColor: theme.palette.common.white,
                            flex: 1,
                            padding: "20px",
                        }}
                        gap={12}
                    >
                        <FlexDiv direction="column" gap={4}>
                            <FlexDiv direction="row" justifyContent="space-between">
                                <FlexDiv direction="row" gap={10} alignItems="center">
                                    <Text
                                        typoVariant="h2/medium"
                                        color={theme.palette.common.black}
                                    >
                                        {name}, {Math.floor(age / 10) * 10}s
                                    </Text>
                                    <Icon type="instagram" size={"m"} />
                                </FlexDiv>
                                <ExploreLikesButton numOfLikes={likes} targetId={name} isLike />
                            </FlexDiv>
                            <FlexDiv direction="row" gap={4} alignItems="center">
                                <Icon type="map-pin" color={theme.palette.grey[5]} />
                                <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                                    {distance} km {t("AwayFromYou")}
                                </Text>
                            </FlexDiv>
                        </FlexDiv>
                        <FlexDiv>
                            <Text typoVariant="body/regular" color={theme.palette.grey[7]}>
                                {bio}
                            </Text>
                        </FlexDiv>
                        <Text color={theme.palette.common.black} typoVariant="h3/medium">
                            Your main interest
                        </Text>
                        <FlexDiv gap={10}>
                            {interests.map((interest) => (
                                <ExploreBadge label={interest} isMain key={`${interest}`} />
                            ))}
                        </FlexDiv>
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
            {/* Explore 우측 카드 */}
            <FlexDiv
                direction="column"
                gap={20}
                css={{
                    flex: 1,
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: theme.shadow.cardShadow,
                    backgroundColor: theme.palette.common.white,
                }}
            >
                {/* 자기 소개 요약 영역 */}
                <FlexDiv direction="column" gap={10}>
                    <LabeledBadgeList label="About me">
                        {Object.entries(aboutMe).map(([icon, label]) => (
                            <LabeledBadgeList.Badge label={label} icon={icon} key={label} />
                        ))}
                    </LabeledBadgeList>
                    <LabeledBadgeList label="I am looking for">
                        {lookingFor.map((label) => (
                            <LabeledBadgeList.Badge label={label} key={label} />
                        ))}
                    </LabeledBadgeList>
                    <LabeledBadgeList label="More about me">
                        {Object.entries(moreAboutMe).map(([icon, label]) => (
                            <LabeledBadgeList.Badge label={label} icon={icon} key={label} />
                        ))}
                    </LabeledBadgeList>
                    <LabeledBadgeList label="Language I can speak">
                        {languages.map((label) => (
                            <LabeledBadgeList.Badge label={label} key={label} />
                        ))}
                    </LabeledBadgeList>
                </FlexDiv>
                {/* 리뷰 영역 */}
                <FlexDiv direction="column" gap={10}>
                    <FlexDiv gap={10}>
                        <Text typoVariant="h5/bold" color={theme.palette.common.black}>
                            Reviews
                        </Text>
                        <Badge
                            backgroundColor={theme.palette.primary[0]}
                            fontVariant="tag/regular"
                            color={theme.palette.common.black}
                            radius="full"
                        >
                            12
                        </Badge>
                    </FlexDiv>
                    {reviews.map((aReview, index) => (
                        <ReviewCard review={aReview} key={`review-${index}`} />
                    ))}
                </FlexDiv>
                <FlexDiv
                    alignItems="center"
                    gap={4}
                    css={{ cursor: "pointer", width: "fit-content", alignSelf: "flex-end" }}
                >
                    <Icon type="reload" color={theme.palette.primary[5]} size={"s"} />
                    <Text typoVariant="link/regular" color={theme.palette.primary[5]}>
                        {t("LoadMoreReviewButton")}
                    </Text>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    );
};
