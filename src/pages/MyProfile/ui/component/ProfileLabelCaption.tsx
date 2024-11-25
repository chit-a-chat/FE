import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ProfileLabelCaptionProps = {
    label: string;
    caption?: string;
};

export const ProfileLabelCaption = ({ label, caption }: ProfileLabelCaptionProps) => {
    const theme = useTheme();
    return (
        <FlexDiv direction="column" gap={5}>
            <Text typoVariant="h4/regular" color={theme.palette.common.black}>
                {label}
            </Text>
            <Text typoVariant="body/medium" color={theme.palette.grey[5]}>
                {caption}
            </Text>
        </FlexDiv>
    );
};
