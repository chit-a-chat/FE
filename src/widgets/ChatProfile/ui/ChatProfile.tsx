import { PropsWithChildren } from "react";

import { useTranslation } from "react-i18next";

import { useChatStore, useGetChatRooms } from "@entities/chat";

import { Icon } from "@shared/Icon";
import { Badge, Divider, FlexDiv, Profile, StarRating, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

const ProfileDetailTitle = ({ children }: PropsWithChildren) => {
    const theme = useTheme();
    return (
        <Text typoVariant="body/medium" color={theme.palette.common.black}>
            {children}
        </Text>
    );
};

const MOCK_IMAGES = [
    "https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661598655597-8e6720995532?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1591980607162-923fa31e8240?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1630952588640-0204d5d48021?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
type ChatProfileProps = {
    selectedRoomId: string;
};
export const ChatProfile = ({ selectedRoomId }: ChatProfileProps) => {
    const { filter } = useChatStore();
    const { data: chatRooms } = useGetChatRooms(filter);
    const theme = useTheme();
    const chatRoom = chatRooms.find((aChatRoom) => aChatRoom.roomId === selectedRoomId)!;
    const { t } = useTranslation("matches");
    if (!chatRoom) {
        throw new Error("해당하는 RoomID를 가진 Room을 못 찾았습니다.");
    }
    const sender = Object.values(chatRoom.senders)[0];
    return (
        <aside
            css={{
                display: "flex",
                flexDirection: "column",
                boxShadow: theme.shadow.cardShadow,
                backgroundColor: theme.palette.common.white,
                height: "100%",
                minWidth: 0,
                borderRadius: "10px",
            }}
        >
            <Text
                typoVariant="h4/regular"
                color={theme.palette.common.black}
                css={{ padding: "19px 17px" }}
            >
                ${t("ChatProfile.Title")}
            </Text>
            <Divider />
            <FlexDiv
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap={10}
                css={{ padding: "20px 0" }}
            >
                <Profile size="xxxl" src={sender.profileImageUrl} />
                <Text
                    typoVariant="h5/bold"
                    color={theme.palette.primary[5]}
                    css={{ textAlign: "center" }}
                >
                    {sender.name}
                </Text>
            </FlexDiv>
            <Divider />
            <FlexDiv direction="column" gap={20} css={{ padding: "10px 20px" }}>
                <FlexDiv direction="column" gap={12}>
                    <ProfileDetailTitle>{t("ChatProfile.MyFavorite")}</ProfileDetailTitle>
                    <FlexDiv direction="row" wrap="wrap" gap={10}>
                        {["Tennis", "Football", "Running", "Music", "Pub"].map((aItem) => (
                            <Badge
                                key={`${aItem}`}
                                size="lg"
                                radius="full"
                                backgroundColor={theme.palette.primary[0]}
                            >
                                {aItem}
                            </Badge>
                        ))}
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv direction="column" gap={12}>
                    <ProfileDetailTitle>{t("ChatProfile.MyScore")}</ProfileDetailTitle>
                    <FlexDiv direction="row" gap={10}>
                        <Text typoVariant="body/regular" color={theme.palette.grey[8]}>
                            4.5
                        </Text>
                        <StarRating rate={4.5} isEdit={false} />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv direction="column" gap={12}>
                    <ProfileDetailTitle>{t("ChatProfile.SocialMedia")}</ProfileDetailTitle>
                    <div
                        css={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            rowGap: "12px",
                            columnGap: "6px",
                        }}
                    >
                        {MOCK_IMAGES.map((aImage) => (
                            <img
                                src={aImage}
                                key={aImage}
                                css={{
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                    width: "100%",
                                    aspectRatio: "1 / 1",
                                }}
                            />
                        ))}
                    </div>
                </FlexDiv>
            </FlexDiv>
            <FlexDiv
                direction="row"
                gap={2}
                css={{
                    paddingRight: "20px",
                    alignSelf: "flex-end",
                    alignItems: "center",
                    cursor: "pointer",
                }}
            >
                <Text typoVariant="link/regular" color={theme.palette.primary[6]}>
                    {t("ChatProfile.ViewMore")}
                </Text>
                <Icon type="arrow-right" color={theme.palette.primary[6]} />
            </FlexDiv>
        </aside>
    );
};
