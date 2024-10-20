import { Icon } from "@shared/Icon";
import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { useAccountStore } from "../model/store";

export const AccountProfile = () => {
    const { account } = useAccountStore();
    const theme = useTheme();
    return (
        <FlexDiv gap={6}>
            <FlexDiv direction="column" alignItems="flex-end">
                <Text typoVariant="supporting/regular" color={theme.palette.common.black}>
                    Hello!
                </Text>
                <Text typoVariant="supporting/regular" color={theme.palette.primary[5]}>
                    {account?.name}
                </Text>
            </FlexDiv>
            <FlexDiv>
                <img
                    src={account?.profileImage ?? "/"}
                    alt="프로필 이미지"
                    css={{
                        width: "42px",
                        height: "42px",
                        objectFit: "cover",
                        borderRadius: "100%",
                    }}
                />
                <Icon type="chevron-down" color={theme.palette.primary[5]} />
            </FlexDiv>
        </FlexDiv>
    );
};
