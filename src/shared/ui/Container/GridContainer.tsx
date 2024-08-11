import styled from "@emotion/styled";

import { media } from "../theme/media";

export const GridContainer = styled.div`
    display: grid;
    ${media.small`
        grid-template-columns: repeat(4, 1fr);
        margin-left: 35px;
        margin-right: 35px;
        column-gap: 20px;;
    `};
    ${media.medium`
        grid-template-columns: repeat(8, 1fr);
        margin-left: 70px;
        margin-right: 70px;
        column-gap: 20px;
    `};
    ${media.large`
        grid-template-columns: repeat(12, 1fr);
        margin-left: 70px;
        margin-right: 70px;
        column-gap: 20px;
    `};
`;
