import { media } from "@shared/ui";

import { css } from "@emotion/react";

import { GNBs } from "..";

export const GNB = () => {
    /** emotion babel plugin 적용 후 적용 가능. */
    const headerStyle = () => css`
        height: 100px;
        display: flex;
        flex-direction: row;
        background-color: red;
        ${media.small`
            grid-column: 1 / -1;
        `};
        ${media.medium`
            grid-column: 1 / -1;
        `};
        ${media.large`
            grid-column: 1 / -1;
        `};
    `;
    return (
        <header css={headerStyle}>
            <GNBs.Logo />
            <GNBs.MenuList>
                <GNBs.Menu>dd</GNBs.Menu>
                <GNBs.Menu>ss</GNBs.Menu>
            </GNBs.MenuList>
        </header>
    );
};
