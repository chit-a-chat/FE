import { Text } from "@shared/ui";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
    display: flex;
`;

export const Footer = () => {
    const theme = useTheme();
    return (
        <FooterContainer
            id="footer"
            css={{
                justifyContent: "flex-end",
                gap: "20px",
                padding: "20px 60px",
                backgroundColor: theme.palette.common.white,
                flex: 0,
                width: "100%",
            }}
        >
            <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                Privacy Policy
            </Text>
            <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                Terms
            </Text>
            <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                Notice
            </Text>
        </FooterContainer>
    );
};
