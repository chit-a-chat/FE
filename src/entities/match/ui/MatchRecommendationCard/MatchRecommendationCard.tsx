import { Button } from "@widgets/components";

import { MatchRecommend } from "@entities/match/model/models";

import { Icon } from "@shared/Icon";
import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { InterestList } from "./MatchRecommendationCard.InterestList";

type MatchCardProps = { match: MatchRecommend };

export const MatchRecommendationCard = ({ match }: MatchCardProps) => {
    const theme = useTheme();
    return (
        <FlexDiv
            direction="row"
            gap={10}
            css={{
                flex: 1,
                padding: "10px",
                boxShadow: theme.shadow.cardShadow,
                backgroundColor: theme.palette.common.white,
                borderRadius: "10px",
            }}
        >
            <FlexDiv direction="column" gap={10} justifyContent="center">
                <Profile src={match.profileImages[0]} size="xl" />
                <FlexDiv gap={10} justifyContent="center">
                    <Icon
                        type="chevron-down-fill"
                        size={"xs"}
                        css={{ transform: "rotate(90deg)", cursor: "pointer" }}
                        color={theme.palette.grey[5]}
                    />
                    <Icon
                        type="chevron-down-fill"
                        size={"xs"}
                        css={{ transform: "rotate(-90deg)", cursor: "pointer" }}
                        color={theme.palette.grey[5]}
                    />
                </FlexDiv>
            </FlexDiv>
            <FlexDiv direction="column" gap={10} css={{ flex: 1 }}>
                <FlexDiv direction="column" gap={4}>
                    <FlexDiv direction="column" gap={4}>
                        <FlexDiv direction="row" justifyContent="space-between">
                            <Text typoVariant="h4/regular" color={theme.palette.common.black}>
                                {match.name}, {match.age}s
                            </Text>
                            <Icon type="instagram" />
                        </FlexDiv>
                        <FlexDiv direction="row" justifyContent="space-between">
                            <FlexDiv
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                gap={2}
                            >
                                <Icon type="map-pin" color={theme.palette.grey[5]} />
                                <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                                    {match.distance} km away from you
                                </Text>
                            </FlexDiv>
                            <Text typoVariant="link/regular" color={theme.palette.primary[5]}>
                                View more
                            </Text>
                        </FlexDiv>
                    </FlexDiv>
                    <Text typoVariant="body/medium" color={theme.palette.grey[8]}>
                        Common interest
                    </Text>
                    <MatchRecommendationCard.InterestList interests={match.interests} />
                </FlexDiv>

                <FlexDiv direction="row" justifyContent="space-between">
                    <Button type="button" label="Not interested" variant="secondary" size="sm" />
                    <Button type="button" label="Request Match" variant="primary" size="sm" />
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    );
};

MatchRecommendationCard.InterestList = InterestList;
