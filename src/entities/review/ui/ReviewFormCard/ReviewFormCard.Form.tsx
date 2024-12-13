import { Button, FlexDiv, StarRating, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { ReviewTextarea } from "./ReviewFormCard.Textarea";

export const ReviewCardForm = () => {
    const theme = useTheme();
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
                Rating
            </Text>
            <StarRating rate={0} isEdit />
            <Text typoVariant="h5/bold" color={theme.palette.grey[8]}>
                Comments
            </Text>
            <ReviewTextarea />
            <Button label="Submit" size="md" css={{ alignSelf: "flex-end" }} />
        </FlexDiv>
    );
};
