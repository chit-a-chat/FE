import styled from "@emotion/styled";

import { media } from "../theme/media";

export const Layout = styled.div`
    width: 1440px;
    display: block;
    flex-direction: column;
    margin: 0 auto;
    ${media.small`
    `};
    ${media.medium`
    `};
    ${media.large`
    `};
`;
