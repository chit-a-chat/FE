import { useTranslation } from "react-i18next";

import { HomePictureList } from "@widgets/HomePictureList";
import { HomeStatistics } from "@widgets/HomeStatistics";
import { Button } from "@widgets/components";

import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { HomeTitleLogo } from "./component/HomeTitleLogo";

export function Home() {
    const { t } = useTranslation("home");
    const theme = useTheme();
    return (
        <section
            css={{
                display: "flex",
                paddingTop: "140px",
                paddingBottom: "auto",
                background: `linear-gradient(180deg, ${theme.palette.primary[1]}66 0%, ${theme.palette.blue[1]}66 83%)`,
                flexDirection: "column",
                flex: 1,
            }}
        >
            <FlexDiv direction="column" gap={48}>
                <FlexDiv direction="column" gap={24}>
                    <FlexDiv direction="column" gap={24}>
                        <FlexDiv gap={5} direction="column">
                            <Text typoVariant="display/large" color={theme.palette.primary[7]}>
                                {t("MainTitle")}
                            </Text>
                            <HomeTitleLogo />
                        </FlexDiv>
                        <FlexDiv>
                            <Text
                                typoVariant="h4/regular"
                                color={theme.palette.grey[6]}
                                css={{ textAlign: "center" }}
                            >
                                {t("SubTitle")}
                            </Text>
                        </FlexDiv>
                    </FlexDiv>
                    <Button
                        label={t("MainButton")}
                        iconRight={{ icon: "search", color: theme.palette.common.white }}
                        size="lg"
                    />
                </FlexDiv>
                <FlexDiv direction="column" gap={24}>
                    <HomeStatistics />
                    <HomePictureList />
                </FlexDiv>
            </FlexDiv>
        </section>
    );
}
