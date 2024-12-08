export type Profile = {
    id: string;
    name: string;
    age: number;
    distance: number;
    interests: string[];
    profileImages: string[];
    instagram?: string;
};

export type ProfileRequest = {
    id: string;
    name: string;
    profileImage: string;
    requestTime: Date;
};
type AboutYou = keyof ProfileState["AboutYou"];
type LifeStyle = keyof ProfileState["LifeStyle"];

export type ProfileSkeleton = {
    AboutYou: (
        | {
              label: string;
              caption: string;
              type: "chip";
              valueKey: Exclude<AboutYou, "Bio" | "Photo">;
          }
        | {
              label: string;
              caption: string;
              type: "image";
              valueKey: Extract<AboutYou, "Photo">;
          }
        | {
              label: string;
              caption: string;
              type: "textarea";
              valueKey: Extract<AboutYou, "Bio">;
          }
    )[];
    LifeStyle: {
        label: string;
        caption: string;
        type: "chip";
        valueKey: LifeStyle;
    }[];
};
export interface ProfileState {
    AboutYou: {
        Bio: string;
        Photo: string[];
        Work: string[];
        Education: string[];
        Location: string[];
        Gender: string[];
        Sexuality: string[];
        LookingFor: string[];
        Height: string[];
        Age: string[];
        MBTI: string[];
    };
    LifeStyle: {
        Interests: string[];
        Languages: string[];
        Pet: string[];
        Smoking: string[];
        WantsKid: string[];
        Drinking: string[];
        Politic: string[];
        Religion: string[];
        Diet: string[];
        Allegies: string[];
    };
}
