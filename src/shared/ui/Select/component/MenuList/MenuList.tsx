import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MenuList = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        background-color: ${theme.palette.common.white};
        filter: drop-shadow(0 0 6px #0000001a) drop-shadow(0 0 10px #0000001a);
        padding: 10px;
        gap: 10px;
        border-radius: 10px;
    `
);
