import { useTranslation } from "react-i18next";

import { Button } from "@widgets/components";

import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const SignUp = () => {
    const theme = useTheme();
    const { t } = useTranslation("sign_in");
    return (
        <article
            css={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                justifyContent: "center",
                gap: "32px",
                width: "595px",
            }}
        >
            <FlexDiv gap={10} direction="column">
                <Text typoVariant="display/large" color={theme.palette.common.black}>
                    {t("Title")}
                </Text>
                <Text typoVariant="h4/regular" color={theme.palette.grey[6]}>
                    {t("SubTitle")}
                </Text>
            </FlexDiv>
            <Button
                variant="secondary"
                size="lg"
                iconLeft={{ icon: "google", color: theme.palette.green[5] }}
                label={t("SignUp")}
                css={{ alignItems: "center", justifyContent: "center" }}
            />
        </article>
    );
};
