import { Icon } from "@shared/Icon";
import { Badge, ChipInput, FlexDiv, Portal, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type PreferenceControllerProps = {
    anchorEl: HTMLElement;
    handleClose: () => void;
};
export const PreferenceController = ({ anchorEl, handleClose }: PreferenceControllerProps) => {
    const theme = useTheme();

    return (
        <Portal
            zIndex={100}
            container={document.body}
            anchorEl={anchorEl}
            position={{ top: "100%", right: 0 }}
        >
            <FlexDiv
                direction="column"
                css={{
                    boxShadow: theme.shadow.cardShadow,
                    backgroundColor: theme.palette.common.white,
                    borderRadius: "8px",
                    width: "507px",
                }}
                onClick={handleClose}
            >
                <FlexDiv justifyContent="space-between" css={{ padding: "20px" }}>
                    <Text typoVariant="modal/title" color={theme.palette.common.black}>
                        Preference
                    </Text>
                    <Icon
                        type="x"
                        size={"l"}
                        color={theme.palette.primary[6]}
                        css={{ cursor: "pointer" }}
                    />
                </FlexDiv>
                <FlexDiv direction="column" gap={20} css={{ padding: "20px" }}>
                    <FlexDiv direction="row" gap={10}>
                        <Badge size="lg" radius="full" isShadow>
                            Basic filteres
                        </Badge>
                        <Badge size="lg" radius="full" isShadow>
                            Advanced filters
                        </Badge>
                    </FlexDiv>
                    <FlexDiv direction="column" gap={20}>
                        <Text typoVariant="body/bold" color={theme.palette.grey[8]}>
                            How old are they?
                        </Text>
                        <FlexDiv direction="column" gap={5}>
                            <Text typoVariant="supporting/medium" color={theme.palette.grey[6]}>
                                Between 19 to 39
                            </Text>
                            슬라이더
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv direction="column" gap={20}>
                        <FlexDiv direction="column" gap={5}>
                            <Text typoVariant="body/bold" color={theme.palette.grey[8]}>
                                How far away are they?
                            </Text>
                            <Text typoVariant="supporting/medium" color={theme.palette.grey[6]}>
                                Up to 30 miles away
                            </Text>
                            슬라이더
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv direction="column" gap={20}>
                        <Text typoVariant="body/bold" color={theme.palette.grey[8]}>
                            Do they share any of your interest?
                        </Text>
                        <FlexDiv
                            direction="column"
                            gap={10}
                            css={{
                                borderRadius: "8px",
                                border: `1px solid ${theme.palette.grey[2]}`,
                                padding: "10px",
                            }}
                        >
                            <Text typoVariant="supporting/medium" color={theme.palette.grey[6]}>
                                Filter by your interests
                            </Text>
                            <Badge size="lg" radius="full" backgroundColor={theme.palette.grey[2]}>
                                Writing
                            </Badge>
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv direction="column" gap={10}>
                        <Text typoVariant="body/bold" color={theme.palette.grey[8]}>
                            Which languages do they know?
                        </Text>
                        <ChipInput />
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
        </Portal>
    );
};
