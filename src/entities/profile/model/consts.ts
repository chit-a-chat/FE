import { ProfileSkeleton } from "./models";

export const PROFILE_FORM_SKELETON: ProfileSkeleton = {
    AboutYou: [
        { label: "Photo", caption: "Highlight your true self.", type: "image", valueKey: "Photo" },
        { label: "Bio", caption: "Write about yourself", type: "textarea", valueKey: "Bio" },
        {
            label: "Work",
            caption: "Where do you work and what position?",
            type: "chip",
            valueKey: "Work",
        },
        {
            label: "Education",
            caption: "Share specific interests about the things you love.",
            type: "chip",
            valueKey: "Education",
        },
        {
            label: "Location",
            caption: "Where do you work and what position?.",
            type: "chip",
            valueKey: "Location",
        },
        {
            label: "Gender",
            caption: "Where do you work and what position?.",
            type: "chip",
            valueKey: "Gender",
        },
        {
            label: "Sexuality",
            caption: "Where do you work and what position?.",
            type: "chip",
            valueKey: "Sexuality",
        },
        {
            label: "I am looking for",
            caption: "Where do you work and what position?.",
            type: "chip",
            valueKey: "LookingFor",
        },
        {
            label: "Height",
            caption: "Where do you work and what position?.",
            type: "chip",
            valueKey: "Height",
        },
        {
            label: "Age",
            caption: "Where do you work and what position?.",
            type: "chip",
            valueKey: "Age",
        },
        {
            label: "MBTI",
            caption: "Where do you work and what position?.",
            type: "chip",
            valueKey: "MBTI",
        },
    ],
    LifeStyle: [
        {
            label: "Specific interests",
            caption: "Share specific things you like to share with someone",
            type: "chip",
            valueKey: "Interests",
        },
        {
            label: "Language I can speak",
            caption: "Choose the languages you know.",
            type: "chip",
            valueKey: "Languages",
        },
        {
            label: "Pet",
            caption: "Do you have any pets?",
            type: "chip",
            valueKey: "Pet",
        },
        {
            label: "Smoking",
            caption: "Do you smoke?",
            type: "chip",
            valueKey: "Smoking",
        },
        {
            label: "Wants Kid?",
            caption: "Do you work out?",
            type: "chip",
            valueKey: "WantsKid",
        },
        {
            label: "Drinking",
            caption: "Do you drink?",
            type: "chip",
            valueKey: "Drinking",
        },
        {
            label: "Politic",
            caption: "What’s your political side?",
            type: "chip",
            valueKey: "Politic",
        },
        {
            label: "Religion",
            caption: "What do you believe in?",
            type: "chip",
            valueKey: "Religion",
        },
        {
            label: "Diet",
            caption: "What is your diet?",
            type: "chip",
            valueKey: "Diet",
        },
        {
            label: "Allegies",
            caption: "Do you have any allergies?",
            type: "chip",
            valueKey: "Allegies",
        },
    ],
} as const;
