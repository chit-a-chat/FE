import { TTypoVariant } from "@shared/type";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

// TODO: color prop 받아서 처리 (palette color 추가 및 theme에 추가한 뒤 작업) 2024.08.21. 김하늬
export const Typo = styled.p<{ variant: TTypoVariant }>`
    ${({ variant, theme }) => css`
        font-size: ${theme.typo[variant].fontSize};
        line-height: ${theme.typo[variant].lineHeight};
        letter-spacing: ${theme.typo[variant].letterSpacing};
        font-weight: ${theme.typo[variant].fontWeight};
    `}
`;
