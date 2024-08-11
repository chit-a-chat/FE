import { css } from "@emotion/react";

export type Breakpoints = "small" | "medium" | "large";

export const breakpoints: Record<Breakpoints, string> = {
    small: "@media (min-width: 393px)",
    medium: "@media (min-width: 744px)",
    large: "@media (min-width: 1440px)",
};
type cssFuncProps = Parameters<typeof css>;

/**
 * small, medium, large 순으로 써야함. (이렇게 안할려면 "@media"를 범위로 써야함)
 */
export const media = Object.entries(breakpoints).reduce(
    (acc, [key, value]) => {
        return {
            ...acc,
            [key]: ([strings, ...interpolations]: cssFuncProps) => css`
                ${value} {
                    ${css(strings, ...interpolations)}
                }
            `,
        };
    },
    {} as Record<Breakpoints, typeof css>
);
