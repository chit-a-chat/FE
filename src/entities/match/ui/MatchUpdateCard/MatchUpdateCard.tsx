import { getHoursFromNow } from "@widgets/HomeMatchRequests/lib/getHoursFromNow";

import { MatchRequest } from "@entities/match/model/models";

import { Icon } from "@shared/Icon";
import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type MatchUpdateCardProps = {
    matchRequest: MatchRequest;
};

export const MatchUpdateCard = ({ matchRequest }: MatchUpdateCardProps) => {
    const theme = useTheme();

    return (
        <FlexDiv
            direction="row"
            css={{
                boxShadow: "0px 0px 6px #0000001a, 0px 0px 10px #0000001a",
                backgroundColor: theme.palette.common.white,
                borderRadius: "10px",
            }}
        >
            <FlexDiv
                gap={10}
                css={{
                    flex: 1,

                    padding: "10px",
                }}
            >
                <Profile src={matchRequest.profileImage} size="md" />
                <FlexDiv direction="column" gap={4}>
                    <FlexDiv direction="row" gap={6} alignItems="center">
                        <Text typoVariant="body/medium" color={theme.palette.common.black}>
                            {matchRequest.name}
                        </Text>
                        <Text typoVariant="supporting/regular" color={theme.palette.grey[5]}>
                            {getHoursFromNow(matchRequest.requestTime)} hours ago
                        </Text>
                    </FlexDiv>
                    <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                        <span css={{ color: theme.palette.primary[5] }}>{matchRequest.name} </span>
                        liked your photo!
                        <br />
                        Would you like to match with this person?
                    </Text>
                </FlexDiv>
            </FlexDiv>
            {/* Reject, Accept */}
            <FlexDiv css={{ width: "fit-content" }}>
                <FlexDiv
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    css={{
                        backgroundColor: theme.palette.red[0],
                        padding: "10px",
                        width: "98px",
                        cursor: "pointer",
                    }}
                    gap={2}
                >
                    <Text typoVariant="link/regular" color={theme.palette.red[6]}>
                        Reject
                    </Text>
                    <Icon type="x" color={theme.palette.red[6]} size={"m"} />
                </FlexDiv>
                <FlexDiv
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    css={{
                        backgroundColor: theme.palette.primary[0],
                        padding: "10px",
                        width: "98px",
                        cursor: "pointer",
                    }}
                    gap={2}
                >
                    <Text typoVariant="link/regular" color={theme.palette.primary[6]}>
                        Accept
                    </Text>
                    <Icon type="check" color={theme.palette.primary[6]} size={"m"} />
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    );
};
