import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MenuItem = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 8px;
        &:hover {
            background-color: ${theme.palette.primary[0]};
            cursor: pointer;
        }
    `
);
