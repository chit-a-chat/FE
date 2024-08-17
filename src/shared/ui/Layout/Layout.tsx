import styled from "@emotion/styled";

import { media } from "../theme/media";

export const Layout = styled.div`
    ${media.small`
        margin-left: 35px;
        margin-right: 35px;
    `};
    ${media.medium`
        margin-left: 70px;
        margin-right: 70px;
    `};
    ${media.large`
        margin-left: 70px;
        margin-right: 70px;
    `};
`;
