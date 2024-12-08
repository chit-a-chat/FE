import { useEffect, useRef } from "react";

import { PROFILE_FORM_SKELETON, useProfileStore } from "@entities/profile";
import { ProfilePhotoList } from "@entities/profile/ui/ProfilePhotoList";

import { ChipInput, Divider, FlexDiv, Text, Textarea } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { ProfileLabelCaption } from "./component/ProfileLabelCaption";

export const MyProfile = () => {
    const theme = useTheme();

    const {
        profile: { AboutYou, LifeStyle },
        setTargetChipValue,
        changeBio,
    } = useProfileStore();

    useEffect(() => {
        return () => {
            const canvasForDrag = document.getElementById("canvas-drag");
            canvasForDrag?.remove();
        };
    }, []);
    const debounceKey = useRef<number | null>(null);
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
                    Your profile
                </Text>
                <Text typoVariant="h2/medium" color={theme.palette.grey[8]}>
                    Customise how others see your profile.
                </Text>
            </FlexDiv>
            <FlexDiv
                direction="row"
                gap={20}
                css={{
                    minWidth: 0,
                    flexWrap: "wrap",
                }}
            >
                <Text
                    typoVariant="h3/medium"
                    color={theme.palette.common.black}
                    css={{
                        flex: 1,
                    }}
                >
                    About you
                </Text>
                {PROFILE_FORM_SKELETON.AboutYou.map((profileData) => {
                    switch (profileData.type) {
                        case "chip":
                            return (
                                <FlexDiv
                                    id={profileData.label}
                                    direction="column"
                                    css={{
                                        flex: "1 0 calc(33.3% - 14px)",
                                        minWidth: 0,
                                        gap: "10px",
                                    }}
                                    key={`${profileData.label}`}
                                >
                                    <ProfileLabelCaption
                                        label={profileData.label}
                                        caption={profileData.caption}
                                    />
                                    <ChipInput
                                        defaultValue={AboutYou[profileData.valueKey]}
                                        onEditFinish={(values) =>
                                            setTargetChipValue(profileData.valueKey, values)
                                        }
                                    />
                                </FlexDiv>
                            );
                        case "image":
                            return (
                                <FlexDiv
                                    direction="column"
                                    gap={10}
                                    id="photo"
                                    key={`${profileData.label}`}
                                >
                                    <ProfileLabelCaption
                                        label="Photo"
                                        caption="Highlight your true self."
                                    />
                                    <ProfilePhotoList />
                                </FlexDiv>
                            );
                        case "textarea":
                            return (
                                <FlexDiv
                                    id={profileData.label}
                                    gap={10}
                                    direction="column"
                                    css={{ flexBasis: "100%" }}
                                    key={`${profileData.label}`}
                                >
                                    <ProfileLabelCaption
                                        label={profileData.label}
                                        caption={profileData.caption}
                                    />
                                    <Textarea
                                        rows={2}
                                        defaultValue={AboutYou[profileData.valueKey]}
                                        onChange={(e) => {
                                            const value = e.currentTarget.value;
                                            if (debounceKey.current)
                                                clearTimeout(debounceKey.current);
                                            debounceKey.current = setTimeout(() => {
                                                changeBio(value);
                                            }, 300);
                                        }}
                                    />
                                </FlexDiv>
                            );
                        default:
                            break;
                    }
                })}

                <Divider />
                {/* Your life style */}
                <Text
                    typoVariant="h3/medium"
                    color={theme.palette.common.black}
                    css={{ flexBasis: "100%" }}
                >
                    Your life style
                </Text>

                {PROFILE_FORM_SKELETON.LifeStyle.map((profileData, index) => {
                    return (
                        <FlexDiv
                            key={`${profileData.label}`}
                            id={profileData.label}
                            direction="column"
                            css={{
                                flex: `1 1 ${index < 2 ? "calc(50% - 10px)" : "calc(25% - 15px)"}`,
                                gap: "10px",
                                minWidth: 0,
                            }}
                        >
                            <ProfileLabelCaption
                                label={profileData.label}
                                caption={profileData.caption}
                            />
                            <ChipInput
                                defaultValue={LifeStyle[profileData.valueKey]}
                                onEditFinish={(values) =>
                                    setTargetChipValue(profileData.valueKey, values)
                                }
                            />
                        </FlexDiv>
                    );
                })}
            </FlexDiv>
        </section>
    );
};
