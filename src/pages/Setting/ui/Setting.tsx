import { useRef } from "react";

import { Button } from "@widgets/components";

import { useAccountStore } from "@entities/account";

import { Icon } from "@shared/Icon";
import { Divider, FlexDiv, Input, Text, Toggle } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const Setting = () => {
    const theme = useTheme();
    const { account, changeNickname, changePassword, deleteAccount } = useAccountStore();
    const nicknameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<
        Record<"currentPwd" | "newPwd" | "confirmPwd", HTMLInputElement | null>
    >({ currentPwd: null, newPwd: null, confirmPwd: null });
    return (
        <section
            css={{
                display: "flex",
                flexDirection: "column",
                padding: "30px 60px",
                gap: "30px",
                flex: 1,
                minWidth: 0,
            }}
        >
            <FlexDiv direction="column" gap={2}>
                <Text typoVariant="h1/bold" color={theme.palette.grey[8]}>
                    Setting
                </Text>
                <Text typoVariant="h2/medium" color={theme.palette.grey[8]}>
                    Personalise your preferences, notifications, and privacy options.
                </Text>
            </FlexDiv>
            <FlexDiv direction="column" gap={30}>
                <FlexDiv direction="column" gap={20}>
                    <Text typoVariant="h3/medium" color={theme.palette.common.black}>
                        Change your nick name
                    </Text>
                    <FlexDiv direction="column" gap={5} css={{ width: "468px" }}>
                        <Text typoVariant="body/medium" color={theme.palette.common.black}>
                            Change your nick name
                        </Text>
                        <Input defaultValue={account?.name} ref={nicknameRef} />
                    </FlexDiv>
                    <Button
                        label="Save"
                        variant="primary"
                        size="md"
                        css={{ width: "fit-content" }}
                        onClick={() => {
                            const value = nicknameRef.current?.value;
                            if (value) {
                                changeNickname(value);
                            }
                        }}
                    />
                    <Divider />
                </FlexDiv>
                <FlexDiv direction="column" gap={20}>
                    <Text typoVariant="h3/medium" color={theme.palette.common.black}>
                        Change password
                    </Text>
                    <FlexDiv direction="column" gap={5} css={{ width: "468px" }}>
                        <Text typoVariant="body/medium" color={theme.palette.common.black}>
                            Current password
                        </Text>
                        <Input
                            type="password"
                            ref={(el) => (passwordRef.current.currentPwd = el)}
                        />
                    </FlexDiv>
                    <FlexDiv gap={20}>
                        <FlexDiv direction="column" gap={5} css={{ width: "468px" }}>
                            <Text typoVariant="body/medium" color={theme.palette.common.black}>
                                New password
                            </Text>
                            <Input
                                type="password"
                                ref={(el) => (passwordRef.current.newPwd = el)}
                            />
                        </FlexDiv>
                        <FlexDiv direction="column" gap={5} css={{ width: "468px" }}>
                            <Text typoVariant="body/medium" color={theme.palette.common.black}>
                                Confirm new password
                            </Text>
                            <Input
                                type="password"
                                ref={(el) => (passwordRef.current.confirmPwd = el)}
                            />
                        </FlexDiv>
                    </FlexDiv>
                    <Button
                        label="Save"
                        variant="primary"
                        size="md"
                        css={{ width: "fit-content" }}
                        onClick={() => {
                            const currentPwd = passwordRef.current.currentPwd?.value;
                            const newPwd = passwordRef.current.newPwd?.value;
                            const confirmPwd = passwordRef.current.confirmPwd?.value;
                            if (currentPwd && newPwd && confirmPwd) {
                                changePassword(currentPwd, newPwd, confirmPwd);
                            }
                        }}
                    />
                    <Divider />
                </FlexDiv>
                <FlexDiv direction="column" gap={20}>
                    <Text typoVariant="h3/medium" color={theme.palette.common.black}>
                        Your privacy
                    </Text>
                    <FlexDiv direction="row" gap={10}>
                        <FlexDiv direction="row" gap={4}>
                            <Text typoVariant="h4/regular" color={theme.palette.common.black}>
                                Display your exact age
                            </Text>
                            <Icon type="info" color={theme.palette.primary[6]} size={"xl"} />
                        </FlexDiv>
                        <Toggle size="md" defaultValue={false} />
                    </FlexDiv>
                    <FlexDiv direction="row" gap={10}>
                        <Text typoVariant="h4/regular" color={theme.palette.common.black}>
                            Display your distance
                        </Text>
                        <Toggle size="md" defaultValue={false} />
                    </FlexDiv>
                    <FlexDiv direction="row" gap={10}>
                        <Text typoVariant="h4/regular" color={theme.palette.common.black}>
                            Dark mode
                        </Text>
                        <Toggle size="md" defaultValue={false} />
                    </FlexDiv>
                    <Divider />
                </FlexDiv>
                <FlexDiv direction="column" gap={20}>
                    <Text typoVariant="h3/medium" color={theme.palette.common.black}>
                        Delete your account
                    </Text>
                    <Button
                        variant="error"
                        label="Delete account"
                        css={{ width: "fit-content" }}
                        onClick={() => deleteAccount()}
                    />
                </FlexDiv>
            </FlexDiv>
        </section>
    );
};
