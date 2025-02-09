import { useTranslation } from "react-i18next";

import { Icon } from "@shared/Icon";
import { Button, FlexDiv, Modal, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type DeleteChatRoomModalProps = {
    handleCloseDeleteModal: () => void;
    handleClickDelete: () => void;
};

export const DeleteChatRoomModal = ({
    handleCloseDeleteModal,
    handleClickDelete,
}: DeleteChatRoomModalProps) => {
    const theme = useTheme();
    const { t } = useTranslation("matches");
    return (
        <Modal>
            <FlexDiv
                direction="column"
                css={{
                    height: "fit-content",
                    width: "526px",
                    backgroundColor: theme.palette.common.white,
                    boxShadow: theme.shadow.cardShadow,
                    borderRadius: "10px",
                }}
            >
                <FlexDiv css={{ padding: "20px" }}>
                    <Text typoVariant="modal/title">{t("ChatDeleteModal.Title")}</Text>
                </FlexDiv>
                <FlexDiv gap={20} direction="column" css={{ padding: "20px" }}>
                    <FlexDiv gap={10} direction="column" alignItems="center">
                        <Icon type="alertTriangle" size={"xxl"} color={theme.palette.red[6]} />
                        <FlexDiv gap={4} direction="column">
                            <Text typoVariant="modal/heading" css={{ textAlign: "center" }}>
                                {t("ChatDeleteModal.Subtitle")}
                            </Text>
                            <Text typoVariant="modal/body" css={{ textAlign: "center" }}>
                                {t("ChatDeleteModal.Content")}
                            </Text>
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv justifyContent="space-between">
                        <Button
                            label={t("ChatDeleteModal.CancelBtn")}
                            variant="secondary"
                            onClick={handleCloseDeleteModal}
                        ></Button>
                        <Button
                            label={t("ChatDeleteModal.DeleteBtn")}
                            variant="error"
                            onClick={handleClickDelete}
                        ></Button>
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
        </Modal>
    );
};
