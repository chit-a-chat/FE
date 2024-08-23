import { FlexDiv } from "@shared/ui";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Typo } from "./typo";

interface InputProps {
    title: string;
}

export function Input({ title, ...inputProps }: InputProps) {
    return (
        <FlexDiv direction="column" gap={5}>
            <Typo variant="body/medium">{title}</Typo>
            <StyledInput {...inputProps} />
        </FlexDiv>
    );
}

const StyledInput = styled.input`
    ${({ theme }) => css`
        padding: 10px;
        border-radius: 8px;
        border: 1px solid ${theme.input.color.border};
    `}
`;
