import { Children, PropsWithChildren, ReactNode, useMemo } from "react";

import { TTypoVariant } from "@shared/type";

import { Text } from "../Text/Text";
import { FlexDiv } from "../components/flexDiv";

type BadgeProps = PropsWithChildren<{
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
    radius?: "none" | "full";
    fontVariant?: TTypoVariant;
    padding?: string;
    isShadow?: boolean;
}>;

const RadiusToBorderRadius = {
    none: undefined,
    full: "30px",
} as const;

export const Badge = ({
    children,
    width = "fit-content",
    height = "fit-content",
    backgroundColor,
    color,
    radius = "none",
    fontVariant = "tag/regular",
    padding = "5px 12px",
    isShadow = false,
    ...props
}: BadgeProps) => {
    const { stringChildren, frontChildren, backChildren } = useMemo(
        () =>
            Children.toArray(children).reduce<{
                stringIndex: number;
                stringChildren?: string;
                frontChildren: ReactNode[];
                backChildren: ReactNode[];
            }>(
                (acc, child, index) => {
                    if (typeof child === "string") {
                        acc.stringIndex = index;
                        acc.stringChildren = child;
                    } else {
                        if (acc.stringIndex > index || acc.stringIndex === -1) {
                            acc.frontChildren.push(child);
                        } else {
                            acc.backChildren.push(child);
                        }
                    }
                    return acc;
                },
                { stringIndex: -1, stringChildren: undefined, frontChildren: [], backChildren: [] }
            ),
        [children]
    );
    return (
        <FlexDiv
            direction="row"
            gap={4}
            css={{
                width,
                height,
                backgroundColor,
                color,
                borderRadius: RadiusToBorderRadius[radius],
                padding,
                boxShadow: isShadow ? "0px 0px 5px #C3B2FF" : undefined,
            }}
            {...props}
        >
            {frontChildren}
            {stringChildren && (
                <Text typoVariant={fontVariant} color={color}>
                    {stringChildren}
                </Text>
            )}
            {backChildren}
        </FlexDiv>
    );
};
