import { ReactNode } from "react";

import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { ExploreBadge } from "../ExploreBadge/ExploreBadge";

type LabeledBadgeListProps = {
    label: string;
    children: ReactNode;
};
export const LabeledBadgeList = ({ label, children }: LabeledBadgeListProps) => {
    const theme = useTheme();
    return (
        <FlexDiv direction="column" gap={10}>
            <Text typoVariant="h5/bold" color={theme.palette.common.black}>
                {label}
            </Text>
            <FlexDiv
                gap={10}
                css={{
                    flexWrap: "wrap",
                    rowGap: "10px",
                }}
            >
                {children}
            </FlexDiv>
        </FlexDiv>
    );
};
LabeledBadgeList.Badge = ExploreBadge;
