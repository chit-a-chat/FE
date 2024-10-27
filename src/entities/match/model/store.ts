import { create } from "zustand";

import { MatchRecommend, MatchRequest } from "./models";

interface MatchRecommendationStore {
    matches: MatchRecommend[];
    getMatchRecommendation: () => Promise<{
        matches: MatchRecommend[];
    }>;
    requestMatch: () => void;
    refuseMatch: () => void;
}

interface MatchRequestStore {
    matchRequests: MatchRequest[];
    getMatchRequests: () => Promise<{
        matchRequests: MatchRequest[];
    }>;
    rejectRequest: () => void;
    acceptRequest: () => void;
}

export const useMatchRecommendation = create<MatchRecommendationStore>((set) => ({
    matches: [],
    getMatchRecommendation: async () => {
        const returnedData = {
            matches: [
                {
                    name: "Orange123",
                    age: 20,
                    distance: 3,
                    interests: ["Catholic"],
                    profileImages: [
                        "https://plus.unsplash.com/premium_photo-1707932496423-1ee96181ade8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ],
                    id: "orange-123",
                    instagram: "456",
                },
                {
                    name: "Kiwi",
                    age: 20,
                    distance: 11,
                    interests: ["Pet owner"],
                    profileImages: [
                        "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ],
                    id: "Kiwi-123",
                    instagram: "123",
                },
                {
                    name: "Soda",
                    age: 20,
                    distance: 5,
                    interests: ["Catholic", "Pet owner", "Long term relationship", "Buddhism"],
                    profileImages: [
                        "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2646&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ],
                    id: "Soda-123",
                    instagram: undefined,
                },
            ],
        };
        set(returnedData);
        return returnedData;
    },
    requestMatch: async () => {},
    refuseMatch: async () => {},
}));

export const useMatchRequests = create<MatchRequestStore>((set) => ({
    matchRequests: [],
    getMatchRequests: async () => {
        const matchRequests = {
            matchRequests: [
                {
                    id: "123",
                    name: "CoolioApple",
                    profileImage:
                        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    requestTime: new Date(2024, 9, 26, 17, 30),
                },
                {
                    id: "124",
                    name: "Banana123",
                    profileImage:
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    requestTime: new Date(2024, 9, 26, 20, 20),
                },
                {
                    id: "125",
                    name: "Banana2345",
                    profileImage:
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    requestTime: new Date(2024, 9, 27, 12, 10),
                },
                {
                    id: "126",
                    name: "Melon123",
                    profileImage:
                        "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    requestTime: new Date(2024, 9, 27, 15, 0),
                },
                {
                    id: "127",
                    name: "Peach",
                    profileImage:
                        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    requestTime: new Date(2024, 9, 27, 12, 0),
                },
                {
                    id: "128",
                    name: "Watermelon",
                    profileImage:
                        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    requestTime: new Date(2024, 9, 26, 13, 0),
                },
            ],
        };
        set(matchRequests);
        return matchRequests;
    },
    acceptRequest: () => {},
    rejectRequest: () => {},
}));
