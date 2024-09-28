import { NavLink } from "react-router-dom";

import { lightPalette } from "@shared/ui/theme/palette";

import styled from "@emotion/styled";

export const Menu = styled(NavLink)`
    position: relative;
    display: flex;
    text-decoration: none;
    flex-direction: column;
    vertical-align: middle;
    line-height: 32px;
    gap: 3px;
    height: fit-content;
    color: ${lightPalette.grey[7]};
    &.active::after {
        content: "";
        width: 30px;
        height: 5px;
        background-color: ${lightPalette.primary[4]};
        border-radius: 10px;
    }
`;
