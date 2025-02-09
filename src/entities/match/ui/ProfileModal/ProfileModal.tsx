import { useState } from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Icon } from "@shared/Icon";
import { TIcon } from "@shared/type";
import { Accordion, Badge, FlexDiv, Modal, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ProfileModalProps = {
    userId: string;
    handleClose: () => void;
};
const MockData: {
    labelKey: "AboutMe" | "LookingFor" | "AdditionalInfo" | "Language";
    values: { label: string; iconName: TIcon }[];
}[] = [
    {
        labelKey: "AboutMe",
        values: [
            { label: "Women", iconName: "woman" },
            { label: "Graphic designer at Google", iconName: "woman" },
        ],
    },
    {
        labelKey: "LookingFor",
        values: [
            { label: "Women2", iconName: "woman" },
            { label: "Graphic2 designer at Google", iconName: "woman" },
        ],
    },
    {
        labelKey: "AdditionalInfo",
        values: [
            { label: "Women3", iconName: "woman" },
            { label: "Graphic designer at Google3", iconName: "woman" },
        ],
    },
    {
        labelKey: "Language",
        values: [
            { label: "Women3", iconName: "woman" },
            { label: "Graphic designer at Google3", iconName: "woman" },
        ],
    },
] as const;

export const ProfileModal = ({ userId, handleClose }: ProfileModalProps) => {
    const theme = useTheme();
    const interests = ["Tennis", "Footbal"];
    const navigate = useNavigate();
    const [selectedAccordion, setSelectedAccordion] = useState<string>("");
    const { t } = useTranslation("home");
    console.log(userId);
    return (
        <Modal onClickBackdrop={handleClose}>
            <FlexDiv
                direction="column"
                css={{
                    boxShadow: theme.shadow.cardShadow,
                    borderRadius: "8px",
                    backgroundColor: theme.palette.common.white,
                    width: "507px",
                }}
            >
                <FlexDiv
                    css={{ padding: "20px", justifyContent: "space-between", alignItems: "center" }}
                >
                    <Text typoVariant="modal/title">{t("ProfilePreview.Title")}</Text>
                    <FlexDiv
                        onClick={handleClose}
                        css={{ cursor: "pointer", alignItems: "center" }}
                    >
                        <Icon type="x" color={theme.palette.primary[6]} />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv gap={20} direction="column" css={{ padding: "20px" }}>
                    <FlexDiv gap={16} direction="row" alignItems="center">
                        <Profile
                            size="lg"
                            src={
                                "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                        />
                        <FlexDiv gap={5} direction="column" css={{ flex: 1 }}>
                            <FlexDiv
                                justifyContent="space-between"
                                alignItems="center"
                                css={{ flex: 1 }}
                            >
                                <FlexDiv gap={7} alignItems="center">
                                    <Text
                                        typoVariant="h2/medium"
                                        color={theme.palette.common.black}
                                    >
                                        Applebanana
                                    </Text>
                                    <Badge
                                        size="lg"
                                        radius="full"
                                        backgroundColor={theme.palette.blue[0]}
                                    >
                                        20s
                                    </Badge>
                                </FlexDiv>
                                <Icon type="instagram" size={"l"} />
                            </FlexDiv>
                            <FlexDiv gap={4} alignItems="center">
                                <Icon type="location" color={theme.palette.grey[5]} />
                                <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                                    7 {t("ProfilePreview.DistanceSuffix")}
                                </Text>
                            </FlexDiv>
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv direction="column" justifyContent="space-between" gap={5}>
                        <FlexDiv
                            css={{
                                padding: "12px",
                                backgroundColor: theme.palette.primary[0],
                                borderRadius: "10px",
                            }}
                        >
                            <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                                I am looking for long-term relationship, who is a good fit with me.
                                I love tennis, Football and anything exciting! I don’t drink often
                                but I can drink a bit of wine if you would love to! Is anybody
                                living near London, please request a match! Let’s chat.
                            </Text>
                        </FlexDiv>
                        <FlexDiv
                            gap={2}
                            css={{ alignSelf: "end", alignItems: "center", cursor: "pointer" }}
                            onClick={() => {
                                navigate("/explore");
                            }}
                        >
                            <Text typoVariant="body/regular" color={theme.palette.primary[5]}>
                                {t("ProfilePreview.ViewMore")}
                            </Text>
                            <Icon type="arrow-right" color={theme.palette.primary[6]} />
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv direction="column" gap={5}>
                        <Text typoVariant="body/bold" color={theme.palette.common.black}>
                            {t("ProfilePreview.interest.title")}
                        </Text>
                        <FlexDiv direction="row" gap={10}>
                            {interests.map((aInterest) => (
                                <Badge
                                    size="lg"
                                    radius="full"
                                    backgroundColor={theme.palette.primary[0]}
                                >
                                    {aInterest}
                                </Badge>
                            ))}
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv direction="column" gap={10}>
                        {MockData.map((aData) => (
                            <Accordion
                                key={aData.labelKey}
                                label={t(`ProfilePreview.interest.${aData.labelKey}`)}
                                isOpen={selectedAccordion === aData.labelKey}
                                onClick={() => {
                                    setSelectedAccordion((prev) =>
                                        prev === aData.labelKey ? "" : aData.labelKey
                                    );
                                }}
                            >
                                {aData.values.map((aValue) => (
                                    <Badge
                                        key={aValue.label}
                                        size="lg"
                                        radius="full"
                                        backgroundColor={theme.palette.grey[0]}
                                    >
                                        <Icon
                                            type={aValue.iconName}
                                            color={theme.palette.common.black}
                                        />
                                        {aValue.label}
                                    </Badge>
                                ))}
                            </Accordion>
                        ))}
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
        </Modal>
    );
};
