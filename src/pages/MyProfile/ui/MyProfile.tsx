import { useState } from "react";

import { Icon } from "@shared/Icon";
import { Badge, ChipInput, Divider, FlexDiv, Text, Textarea } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { ProfileLabelCaption } from "./component/ProfileLabelCaption";

export const MyProfile = () => {
    const theme = useTheme();
    const AboutYou = {
        Work: ["Graphic designer at Google"],
        Education: ["Oxford University"],
        Location: ["London, United Kingdom"],
        Gender: ["Women"],
        Sexuality: ["Heterosexual"],
        LookingFor: ["Long term relationship"],
        Height: ["160cm / 5.2 inches"],
        Age: ["Between 20-30"],
        MBTI: ["INTJ"],
    };
    const LifeStyle = {
        Interests: ["Tennis", "Football", "Running", "Music", "Pub"],
        Languages: ["English", "Spanish", "French", "German"],
        Pet: ["Pet owner"],
        Smoking: ["I smoke sometimes"],
        WantsKid: ["Yes, not very soon tho"],
        Drinking: ["I drink sometimes"],
        Politic: ["Democrat"],
        Religion: ["Catholic"],
        Diet: ["Vegetarian"],
        Allegies: ["Nuts"],
    };
    const [profileImages, setProfileImages] = useState<(string | null)[]>([
        "https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        null,
        null,
        null,
    ]);
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
                        {profileImages.map((aUrl, index) => (
                            <label
                                css={{
                                    display: "flex",
                                    borderRadius: "30px",
                                    boxShadow: theme.shadow.profileShadow,
                                    width: "315px",
                                    height: "350px",
                                    backgroundColor:
                                        "linear-gradient(151.06deg, rgba(255, 255, 255, 0.5) 3.57%, rgba(255, 255, 255, 0.2) 97.69%)",
                                    padding: "9px",
                                    position: "relative",
                                    cursor: aUrl ? undefined : "pointer",
                                    "&.on-file-drag": {
                                        border: `1px solid ${theme.palette.primary[6]}`,
                                    },
                                }}
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                onDragLeave={(e) => {
                                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                                        e.currentTarget.classList.remove("on-file-drag");
                                    }
                                }}
                                onDragEnter={(e) => {
                                    if (
                                        !e.currentTarget.contains(e.relatedTarget as Node) &&
                                        e.relatedTarget
                                    ) {
                                        e.currentTarget.classList.add("on-file-drag");
                                    }
                                }}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    const droppedFiles = e.dataTransfer.files;
                                    if (droppedFiles.length > 0) {
                                        const imageFile = Array.from(droppedFiles).find((file) =>
                                            file.type.startsWith("image/")
                                        );
                                        if (imageFile) {
                                            const imageURL = URL.createObjectURL(imageFile);
                                            setProfileImages((prev) => {
                                                return [
                                                    ...prev.slice(0, index),
                                                    imageURL,
                                                    ...prev.slice(index + 1),
                                                ];
                                            });
                                        }
                                    }
                                    e.currentTarget.classList.remove("on-file-drag");
                                }}
                                onDragEnd={(e) => {
                                    e.currentTarget.classList.remove("on-file-drag");
                                }}
                                key={`photo-${index}`}
                                htmlFor={`profile-file-${index}`}
                            >
                                {aUrl ? (
                                    <img
                                        src={aUrl}
                                        css={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "30px",
                                        }}
                                        alt="profile-image"
                                    />
                                ) : (
                                    <Icon type="plus" css={{ margin: "auto" }} size={"xl"} />
                                )}
                                <input
                                    type="file"
                                    id={`profile-file-${index}`}
                                    hidden
                                    name={`profile-file-${index}`}
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.currentTarget.files?.length) {
                                            const newImage = e.currentTarget.files[0];
                                            const imageURL = URL.createObjectURL(newImage);
                                            setProfileImages((prev) => {
                                                return [
                                                    ...prev.slice(0, index),
                                                    imageURL,
                                                    ...prev.slice(index + 1),
                                                ];
                                            });
                                        }
                                    }}
                                />
                                <Badge
                                    radius="full"
                                    backgroundColor={theme.palette.grey[0]}
                                    fontVariant="tag/regular"
                                    color={theme.palette.common.black}
                                    css={{ position: "absolute", left: "26px", bottom: "20px" }}
                                >
                                    {index ? index + 1 : "Main"}
                                </Badge>
                            </label>
                        ))}
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv id="Bio" gap={10} direction="column">
                    <ProfileLabelCaption label="Bio" caption="Write about yourself" />
                    <Textarea
                        rows={2}
                        defaultValue={
                            "Hey, I’m Alex! I’m a graphic designer who loves traveling, cooking, and hiking. I’m upbeat, curious, and always up for new adventures. Looking for someone who enjoys deep conversations and spontaneous outings. Let’s connect and share some laughs!"
                        }
                    />
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Work">
                        <ProfileLabelCaption
                            label="Work"
                            caption="Where do you work and what position?"
                        />
                        <ChipInput defaultValue={AboutYou.Work} />
                    </FlexDiv>
                    <FlexDiv id="Education">
                        <ProfileLabelCaption
                            label="Education"
                            caption="Share specific interests about the things you love."
                        />
                        <ChipInput defaultValue={AboutYou.Education} />
                    </FlexDiv>
                    <FlexDiv id="Location">
                        <ProfileLabelCaption
                            label="Location"
                            caption="Where do you work and what position?"
                        />
                        <ChipInput defaultValue={AboutYou.Location} />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Gender">
                        <ProfileLabelCaption
                            label="Gender"
                            caption="Where do you work and what position?"
                        />
                        <ChipInput defaultValue={AboutYou.Gender} />
                    </FlexDiv>
                    <FlexDiv id="Sexuality">
                        <ProfileLabelCaption
                            label="Sexuality"
                            caption="Where do you work and what position?"
                        />
                        <ChipInput defaultValue={AboutYou.Sexuality} />
                    </FlexDiv>
                    <FlexDiv id="I am looking for">
                        <ProfileLabelCaption
                            label="I am looking for.."
                            caption="Where do you work and what position?"
                        />
                        <ChipInput defaultValue={AboutYou.LookingFor} />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Height">
                        <ProfileLabelCaption
                            label="Height"
                            caption="Where do you work and what position?"
                        />
                        <ChipInput defaultValue={AboutYou.Height} />
                    </FlexDiv>
                    <FlexDiv id="Age">
                        <ProfileLabelCaption
                            label="Age"
                            caption="Where do you work and what position?"
                        />
                        <ChipInput defaultValue={AboutYou.Age} />
                    </FlexDiv>
                    <FlexDiv id="MBTI">
                        <ProfileLabelCaption
                            label="MBTI"
                            caption="Where do you work and what position?"
                        />
                        <ChipInput defaultValue={AboutYou.MBTI} />
                    </FlexDiv>
                </FlexDiv>
                <Divider />
                {/* Your life style */}
                <Text typoVariant="h3/medium" color={theme.palette.common.black}>
                    Your life style
                </Text>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Specific interests">
                        <ProfileLabelCaption
                            label="Specific interests"
                            caption="Share specific things you like to share with someone"
                        />
                        <ChipInput defaultValue={LifeStyle.Interests} />
                    </FlexDiv>
                    <FlexDiv id="Language">
                        <ProfileLabelCaption
                            label="Language I can speak"
                            caption="Choose the languages you know."
                        />
                        <ChipInput defaultValue={LifeStyle.Languages} />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Pet">
                        <ProfileLabelCaption label="Pet" caption="Do you have any pets?" />
                        <ChipInput defaultValue={LifeStyle.Pet} />
                    </FlexDiv>
                    <FlexDiv id="Smoking">
                        <ProfileLabelCaption label="Smoking" caption="Do you smoke?" />
                        <ChipInput defaultValue={LifeStyle.Smoking} />
                    </FlexDiv>
                    <FlexDiv id="Wants kid">
                        <ProfileLabelCaption label="Wants kid?" caption="Do you work out?" />
                        <ChipInput defaultValue={LifeStyle.WantsKid} />
                    </FlexDiv>
                    <FlexDiv id="Drinking">
                        <ProfileLabelCaption label="Drinking" caption="Do you drink?" />
                        <ChipInput defaultValue={LifeStyle.Drinking} />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv className="form-row" gap={20}>
                    <FlexDiv id="Politic">
                        <ProfileLabelCaption
                            label="Politic"
                            caption="What’s your political side?"
                        />
                        <ChipInput defaultValue={LifeStyle.Politic} />
                    </FlexDiv>
                    <FlexDiv id="Religion">
                        <ProfileLabelCaption label="Religion" caption="What do you believe in?" />
                        <ChipInput defaultValue={LifeStyle.Religion} />
                    </FlexDiv>
                    <FlexDiv id="Diet">
                        <ProfileLabelCaption label="Diet" caption="What is your diet?" />
                        <ChipInput defaultValue={LifeStyle.Diet} />
                    </FlexDiv>
                    <FlexDiv id="Allegies">
                        <ProfileLabelCaption
                            label="Allegies"
                            caption="Do you have any allergies?"
                        />
                        <ChipInput defaultValue={LifeStyle.Allegies} />
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
        </section>
    );
};
