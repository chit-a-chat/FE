import styled from "@emotion/styled";

import { media } from "../theme/media";

export const Layout = styled.div`
    width: 1440px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    & > main {
        display: flex;
        flex: 1;
    }

    ${media.small`
    `};
    ${media.medium`
    `};
    ${media.large`
    `};
`;
