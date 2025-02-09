import { useTranslation } from "react-i18next";

import { getHoursFromNow } from "@widgets/HomeMatchRequests/lib/getHoursFromNow";

import { Like } from "@entities/match/model/models";

import { Icon } from "@shared/Icon";
import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type LikeCardProps = {
    like: Like;
    onPreviewClick: () => void;
};

export const LikeCard = ({ like, onPreviewClick }: LikeCardProps) => {
    const theme = useTheme();
    const { t } = useTranslation("home");

    return (
        <FlexDiv
            direction="row"
            css={{
                boxShadow: theme.shadow.cardShadow,
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
                <Profile src={like.profileImage} size="md" />
                <FlexDiv direction="column" gap={2} css={{ flex: 1 }}>
                    <FlexDiv direction="column" gap={4}>
                        <FlexDiv direction="row" gap={6} alignItems="center">
                            <Text typoVariant="body/medium" color={theme.palette.common.black}>
                                {like.name}
                            </Text>
                            <Text typoVariant="supporting/regular" color={theme.palette.grey[5]}>
                                {getHoursFromNow(like.likeTime)}
                                {t("TimeSuffix")}
                            </Text>
                        </FlexDiv>
                        <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                            <span css={{ color: theme.palette.grey[5] }}>{t("LikeSuffix")}</span>
                        </Text>
                    </FlexDiv>
                    <FlexDiv
                        gap={2}
                        css={{ alignSelf: "end", alignItems: "center", cursor: "pointer" }}
                        onClick={onPreviewClick}
                    >
                        <Text typoVariant="body/regular" color={theme.palette.primary[5]}>
                            {t("LikeProfileCheck")}
                        </Text>
                        <Icon type="arrow-right" color={theme.palette.primary[6]} />
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    );
};
