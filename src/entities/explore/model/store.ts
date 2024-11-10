import { create } from "zustand";

import { ExploreFilter, ExploredUser } from "./models";

interface ExploreStore {
    exploredFilter: ExploreFilter;
    fetchExplore: () => Promise<ExploredUser>;
    setExploredFilter: () => void;
}

export const useExploreStore = create<ExploreStore>((set) => ({
    exploredFilter: { interest: "" },
    fetchExplore: async () => {
        const fetchedData: ExploredUser = {
            name: "Jannie",
            interests: ["Tennis", "Football", "Running", "Music", "Pub"],
            aboutMe: {
                gender: "Women",
                job: "Graphic designer at Google",
                height: "160cm",
                university: "Oxford University",
                mbti: "ISTJ",
                abcd: "abcd",
            },
            bio: "I am looking for long-term relationship, who is a good fit with me.\nI love tennis, Football and anything exciting! I don’t drink often\nbut I can drink a bit of wine if you would love to! Is anybody\nliving near London, please request a match! Let’s chat.",
            age: 25,
            distance: 10,
            languages: ["English", "Spanish", "French", "German"],
            likes: 143,

            lookingFor: ["Long term relationship", "Heterosexual"],

            moreAboutMe: {
                drink: "I drink",
                smoking: "No",
                childPlan: "Wants Kids",
                pet: "Pet owner",
                religion: "Catholic",
                ideology: "Democrats",
                diet: "Vegetarian",
                Nuts: "Nuts",
            },
            reviews: [
                {
                    name: "Cool",
                    registerDate: new Date("2024-11-02"),
                    content: "Jane was a fantastic person, easy to hangout and very chilled person",
                },
                {
                    name: "YellowBana**",
                    registerDate: new Date(),
                    content: "Jane was a fantastic person, easy to hangout and very chilled person",
                },
                {
                    name: "Yellow***",
                    registerDate: new Date(),
                    content: "Jane was a fantastic person, easy to hangout and very chilled person",
                },
            ],
            images: [
                "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1707932496423-1ee96181ade8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2646&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
        };
        return fetchedData;
    },
    setExploredFilter: () => {
        set({ exploredFilter: { interest: "" } });
    },
}));
