import { useTranslation } from "react-i18next";

import { Button, FlexDiv, StarRating, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { ReviewTextarea } from "./ReviewFormCard.Textarea";

export const ReviewCardForm = () => {
    const theme = useTheme();
    const { t } = useTranslation("reviews");
    return (
        <FlexDiv
            direction="column"
            gap={10}
            css={{
                flex: 1,
                backgroundColor: theme.palette.primary[0],
                padding: "20px",
                borderRadius: 10,
            }}
        >
            <Text typoVariant="h5/bold" color={theme.palette.grey[8]}>
                {t("Detail.Rating")}
            </Text>
            <StarRating rate={0} isEdit />
            <Text typoVariant="h5/bold" color={theme.palette.grey[8]}>
                {t("Detail.Comments")}
            </Text>
            <ReviewTextarea />
            <Button label={t("Detail.SubmitBtn")} size="md" css={{ alignSelf: "flex-end" }} />
        </FlexDiv>
    );
};
