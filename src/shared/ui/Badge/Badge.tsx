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
    isShadow?: boolean;
    gap?: number;
    /**
     * @param size - sm: pd 3px 12px, md: pd 4px 12px, lg: pd 5px 12px
     */
    size: "sm" | "md" | "lg";
    onClick?: () => void;
}>;

const RadiusToBorderRadius = {
    none: undefined,
    full: "30px",
} as const;

const SIZE_TO_PADDING = {
    sm: "3px 12px",
    md: "4px 12px",
    lg: "5px 12px",
} as const;
export const Badge = ({
    children,
    size,
    width = "fit-content",
    height = "fit-content",
    backgroundColor,
    color,
    radius = "none",
    fontVariant = "tag/regular",
    isShadow = false,
    gap = 0,
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
                padding: SIZE_TO_PADDING[size],
                boxShadow: isShadow ? "0px 0px 5px #C3B2FF" : undefined,
                gap: gap ? `${gap}px` : undefined,
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
