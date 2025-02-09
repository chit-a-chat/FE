import { create } from "zustand";

import { ProfileState } from "./models";

interface ProfileStore {
    profile: ProfileState;
    moveProfileImageByIndex: (from: number, to: number) => void;
    upLoadProfileImage: (src: string, index: number) => void;
    setTargetChipValue: (
        label:
            | Exclude<keyof ProfileState["AboutYou"], "Photo" | "Bio">
            | keyof ProfileState["LifeStyle"],
        value: string[]
    ) => void;
    changeBio: (value: string) => void;
}

export const useProfileStore = create<ProfileStore>((set, get) => ({
    profile: {
        AboutYou: {
            Bio: "Hey, I’m Alex! I’m a graphic designer who loves traveling, cooking, and hiking. I’m upbeat, curious, and always up for new adventures. Looking for someone who enjoys deep conversations and spontaneous outings. Let’s connect and share some laughs!",
            Photo: [
                "https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            Work: ["Graphic designer at Google"],
            Education: ["Oxford University"],
            Location: ["London, United Kingdom"],
            Gender: ["Women"],
            Sexuality: ["Heterosexual"],
            LookingFor: ["Long term relationship"],
            Height: ["160cm / 5.2 inches"],
            Age: ["Between 20-30"],
            MBTI: ["INTJ"],
        },
        LifeStyle: {
            Interests: ["Tennis", "Football", "Running", "Music", "Pub"],
            Languages: ["English", "Spanish", "French", "German"],
            Pet: ["Pet owner"],
            Smoking: ["I smoke sometimes"],
            WantsKid: ["Yes, not very soon tho"],
            Drinking: ["I drink sometimes"],
            Politic: ["Democrat"],
            Religion: ["Catholic"],
            Diet: ["Vegetarian"],
            Allergies: ["Nuts"],
        },
    },
    setTargetChipValue: (label, value) => {
        const { AboutYou, LifeStyle } = get().profile;
        if (label in AboutYou) {
            set((state) => ({
                profile: {
                    ...state.profile,
                    AboutYou: { ...state.profile.AboutYou, [label]: value },
                },
            }));
        }
        if (label in LifeStyle) {
            set((state) => ({
                profile: {
                    ...state.profile,
                    LifeStyle: { ...state.profile.LifeStyle, [label]: value },
                },
            }));
        }
    },
    changeBio: (value) => {
        set((state) => ({
            profile: { ...state.profile, AboutYou: { ...state.profile.AboutYou, Bio: value } },
        }));
    },
    moveProfileImageByIndex: (from, to) => {
        const profileImages = get().profile.AboutYou.Photo;
        if (from < 0 || to < 0 || from >= profileImages.length) {
            throw new Error("Invalid 'from' or 'to' index");
        }
        if (to >= profileImages.length) {
            const profileImagesAfterMove = [
                ...profileImages.slice(0, from),
                ...profileImages.slice(from + 1),
                profileImages[from],
            ];
            set((state) => ({
                profile: {
                    ...state.profile,
                    AboutYou: { ...state.profile.AboutYou, Photo: profileImagesAfterMove },
                },
            }));
            return;
        }
        const offset = to - from;
        const profileImagesAfterMove =
            offset > 0
                ? [
                      ...profileImages.slice(0, from),
                      ...profileImages.slice(from + 1, from + 1 + offset),
                      profileImages[from],
                      ...profileImages.slice(from + 1 + offset),
                  ]
                : [
                      ...profileImages.slice(0, to),
                      profileImages[from],
                      ...profileImages.slice(to, from),
                      ...profileImages.slice(from + 1),
                  ];
        set((state) => ({
            profile: {
                ...state.profile,
                AboutYou: { ...state.profile.AboutYou, Photo: profileImagesAfterMove },
            },
        }));
    },
    upLoadProfileImage: (src: string, index: number) => {
        const profileImages = get().profile.AboutYou.Photo;
        if (index < 0 || 3 < index) {
            throw new Error("Invalid 'from' or 'to' index");
        }
        if (profileImages.length < index + 1) {
            const profileImagesAfterUpload = [...profileImages, src];
            set((state) => ({
                profile: {
                    ...state.profile,
                    AboutYou: { ...state.profile.AboutYou, Photo: profileImagesAfterUpload },
                },
            }));
            return;
        }
        const profileImagesAfterUpload = [...profileImages];
        profileImagesAfterUpload[index] = src;
        set((state) => ({
            profile: {
                ...state.profile,
                AboutYou: { ...state.profile.AboutYou, Photo: profileImagesAfterUpload },
            },
        }));
    },
}));
