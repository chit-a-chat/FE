import { CSSProperties } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

type TFlexDirection = CSSProperties["flexDirection"];
type TJustifyContent = CSSProperties["justifyContent"];
type TAlignItems = CSSProperties["alignItems"];
type TFlexWrap = CSSProperties["flexWrap"];

// TODO: padding, margin 등 편의용 CSS prop 추가, 지정하지 않은 css props 받아서 적용. 2024.08.22. 김하늬
export const FlexDiv = styled.div<{
    direction?: TFlexDirection;
    justifyContent?: TJustifyContent;
    alignItems?: TAlignItems;
    wrap?: TFlexWrap;
    gap?: number;
}>`
    ${({
        direction = "row",
        justifyContent = "center",
        alignItems = "center",
        wrap = "inherit",
        gap,
    }) => css`
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        flex-wrap: ${wrap};
        gap: ${gap ?? 0}px;
    `}
`;
