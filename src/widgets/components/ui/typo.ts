import { TTypoVariant } from "@shared/type";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Typo = styled.p<{ variant?: TTypoVariant; color?: string }>`
    ${({ variant = "body/regular", color, theme }) => css`
        font-size: ${theme.typo[variant].fontSize};
        line-height: ${theme.typo[variant].lineHeight};
        letter-spacing: ${theme.typo[variant].letterSpacing};
        font-weight: ${theme.typo[variant].fontWeight};
        color: ${color ?? theme.typo.defaultColor};
    `}
`;
