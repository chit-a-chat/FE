import { MatchRecommend } from "@entities/match/model/models";

import { Icon } from "@shared/Icon";
import { TIcon } from "@shared/type";
import { Badge, FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

type InterestListProps = {
    interests: MatchRecommend["interests"];
};
const InterestToIcons: Record<string, TIcon> = {
    "Pet owner": "cat",
    Democrats: "news",
    Catholic: "cross",
    Vegetarian: "chef-hat",
    Buddhism: "pray",
};

export const InterestList = ({ interests }: InterestListProps) => {
    const theme = useTheme();
    return (
        <FlexDiv
            direction="row"
            justifyContent="flex-start"
            css={{
                rowGap: "10px",
                columnGap: "6px",
                backgroundColor: theme.palette.primary[0],
                borderRadius: "10px",
                padding: "10px",
                flex: 1,
                flexWrap: "wrap",
                minHeight: "92px",
            }}
        >
            {interests.map((interest) => (
                <Badge key={interest} backgroundColor={theme.palette.font.white} radius="full">
                    {InterestToIcons[interest] && (
                        <Icon
                            type={InterestToIcons[interest]}
                            color={theme.palette.common.black}
                            size={"s"}
                        />
                    )}
                    {interest}
                </Badge>
            ))}
        </FlexDiv>
    );
};
