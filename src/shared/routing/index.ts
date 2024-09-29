export const ROUTES = {
    home: {
        url: "/",
    },
    explore: {
        url: "/explore",
    },
    matches: {
        url: "/matches",
        detail: { url: (id: number) => `/${id}` },
    },
    community: {
        url: "/commnunity",
    },
} as const;
