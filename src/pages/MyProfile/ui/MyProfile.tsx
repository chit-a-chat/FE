import { ChipInput, Divider, FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { ProfileLabelCaption } from "./component/ProfileLabelCaption";

export const MyProfile = () => {
    const theme = useTheme();
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
                direction="column"
                gap={20}
                css={{
                    ".form-row > div": {
                        flex: 1,
                        flexDirection: "column",
                        minWidth: 0,
                    },
                }}
            >
                <Text typoVariant="h3/medium" color={theme.palette.common.black}>
                    About you
                </Text>
                <FlexDiv direction="column" gap={10} id="photo">
                    <ProfileLabelCaption label="Photo" caption="Highlight your true self." />
                    <FlexDiv direction="row" gap={20}>
                        <div
                            css={{
                                borderRadius: "30px",
                                boxShadow: theme.shadow.profileShadow,
                                width: "315px",
                                height: "350px",
                                backgroundColor:
                                    "linear-gradient(151.06deg, rgba(255, 255, 255, 0.5) 3.57%, rgba(255, 255, 255, 0.2) 97.69%)",
                                padding: "9px",
                            }}
                        >
                            <img
                                src={
                                    "https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                }
                                css={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "30px",
                                }}
                                alt="profile-image"
                            />
                        </div>
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv id="Bio">
                    <ProfileLabelCaption label="Bio" caption="Write about yourself" />
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Work">
                        <ProfileLabelCaption
                            label="Work"
                            caption="Where do you work and what position?"
                        />
                        <ChipInput />
                    </FlexDiv>
                    <FlexDiv id="Education">
                        <ProfileLabelCaption
                            label="Education"
                            caption="Share specific interests about the things you love."
                        />
                    </FlexDiv>
                    <FlexDiv id="Location">
                        <ProfileLabelCaption
                            label="Location"
                            caption="Where do you work and what position?"
                        />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Gender">
                        <ProfileLabelCaption
                            label="Gender"
                            caption="Where do you work and what position?"
                        />
                    </FlexDiv>
                    <FlexDiv id="Sexuality">
                        <ProfileLabelCaption
                            label="Sexuality"
                            caption="Where do you work and what position?"
                        />
                    </FlexDiv>
                    <FlexDiv id="I am looking for">
                        <ProfileLabelCaption
                            label="I am looking for.."
                            caption="Where do you work and what position?"
                        />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Height">
                        <ProfileLabelCaption
                            label="Height"
                            caption="Where do you work and what position?"
                        />
                    </FlexDiv>
                    <FlexDiv id="Age">
                        <ProfileLabelCaption
                            label="Age"
                            caption="Where do you work and what position?"
                        />
                    </FlexDiv>
                    <FlexDiv id="MBTI">
                        <ProfileLabelCaption
                            label="MBTI"
                            caption="Where do you work and what position?"
                        />
                    </FlexDiv>
                </FlexDiv>
                <Divider />
                {/* Your life style */}
                <Text typoVariant="h3/medium" color={theme.palette.common.black}>
                    Your life style
                </Text>
                <FlexDiv id="Specific interests">
                    <ProfileLabelCaption
                        label="Specific interests"
                        caption="Share specific things you like to share with someone"
                    />
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Pet">
                        <ProfileLabelCaption label="Pet" caption="Do you have any pets?" />
                    </FlexDiv>
                    <FlexDiv id="Smoking">
                        <ProfileLabelCaption label="Smoking" caption="Do you smoke?" />
                    </FlexDiv>
                    <FlexDiv id="Wants kid">
                        <ProfileLabelCaption label="Wants kid?" caption="Do you work out?" />
                    </FlexDiv>
                    <FlexDiv id="Drinking">
                        <ProfileLabelCaption label="Drinking" caption="Do you drink?" />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Politic">
                        <ProfileLabelCaption
                            label="Politic"
                            caption="What’s your political side?"
                        />
                    </FlexDiv>
                    <FlexDiv id="Religion">
                        <ProfileLabelCaption label="Religion" caption="What do you believe in?" />
                    </FlexDiv>
                    <FlexDiv id="Diet">
                        <ProfileLabelCaption label="Diet" caption="What is your diet?" />
                    </FlexDiv>
                    <FlexDiv id="Allegies">
                        <ProfileLabelCaption
                            label="Allegies"
                            caption="Do you have any allergies?"
                        />
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
        </section>
    );
};
