import { Icon } from "@shared/Icon";
import { CountryFlag, TCountryName } from "@shared/ui";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const LanguageSelectorContainer = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    cursor: pointer;
`;
type LanguageSelectorProps = {
    value: TCountryName;
};
export const Button = ({ value }: LanguageSelectorProps) => {
    const theme = useTheme();
    return (
        <LanguageSelectorContainer>
            <CountryFlag isRound country={value} width="30px" height="30px" />
            <Icon type="chevron-down" color={theme.palette.primary[5]} />
        </LanguageSelectorContainer>
    );
};
