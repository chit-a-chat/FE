export const matches = {
    ChatRoom: {
        Profile: {
            MyAccount: "My account",
        },
        Title: "Messages",
        Filter: "Filter",
        Message: {
            TimeSuffix: {
                minute: " min",
                hour: " hours",
                now: "just now",
            },
        },
        AddFavorite: "Add this person to favourite",
        EndConversation: "End conversation",
    },
    ChatDetail: {
        Favorite: "Favorite",
        Typing: "Typing...",
        InputPlaceholder: "Type yout message...",
    },
    ChatProfile: {
        Title: "Match profile",
        MyFavorite: "My main interest",
        MyScore: "Average rating",
        SocialMedia: "Social media",
        ViewMore: "View more",
    },
    ChatDeleteModal: {
        Title: "End conversation",
        Subtitle: "Are you sure you want to delete this chat?",
        Content:
            "Deleting this chat will permanently unmatch you from this person.\nIf you're sure, click the button to confirm.",
        CancelBtn: "Go back",
        DeleteBtn: "Delete this chat",
    },
} as const;
