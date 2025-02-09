export const dummyRooms = {
    "123": {
        roomId: "123",
        isFavorite: false,
        senders: {
            apple1: {
                id: "apple1",
                name: "Applebanana123",
                profileImageUrl:
                    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        },
        currentMessage: "Hey! How are you? How was the weekend we met",
        unReadCount: 0,
        lastReadAt: "2024-12-15 12:03:03",
        createdAt: "2024-12-15 06:03:03",
        updatedAt: "2024-12-15 12:03:03",
        messages: [],
    },
    "124": {
        roomId: "124",
        isFavorite: false,
        senders: {
            apple3: {
                id: "apple3",
                name: "포도",
                profileImageUrl:
                    "https://plus.unsplash.com/premium_photo-1707932496423-1ee96181ade8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        },
        currentMessage: "You Don't know me!! What the hell",
        unReadCount: 1,
        lastReadAt: "2024-12-15 12:00:00",
        createdAt: "2024-12-15 06:03:03",
        updatedAt: "2024-12-15 14:13:03",
        messages: [],
    },
    "153": {
        roomId: "153",
        isFavorite: false,
        senders: {
            apple7: {
                id: "apple6",
                name: "배",
                profileImageUrl:
                    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        },
        currentMessage: "I got It",
        unReadCount: 3,
        lastReadAt: "2024-12-15 16:00:00",
        createdAt: "2024-12-15 06:03:03",
        updatedAt: "2024-12-15 15:03:03",
        messages: [],
    },
    복숭아: {
        roomId: "복숭아",
        isFavorite: false,
        senders: {
            apple7: {
                id: "apple7",
                name: "복숭아",
                profileImageUrl:
                    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        },
        currentMessage: "누구세요?",
        unReadCount: 3,
        lastReadAt: "2024-12-15 16:00:00",
        createdAt: "2024-12-15 06:03:03",
        updatedAt: "2024-12-14 15:03:03",
        messages: [],
    },
    수박: {
        roomId: "수박",
        isFavorite: false,
        senders: {
            apple7: {
                id: "apple8",
                name: "수박",
                profileImageUrl:
                    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        },
        currentMessage: "반갑습니다.",
        unReadCount: 3,
        lastReadAt: "2024-12-15 16:00:00",
        createdAt: "2024-12-15 06:03:03",
        updatedAt: "2024-12-15 16:03:03",
        messages: [],
    },
};
const senders = {
    "123": { id: "apple1", name: "Applebanana123" },
    "124": { id: "apple3", name: "포도" },
    "153": { id: "apple6", name: "배" },
    복숭아: { id: "apple7", name: "복숭아" },
    수박: { id: "apple8", name: "수박" },
};

export const dummyMessages = {
    "123": {
        messages: [
            {
                sender: senders[123],
                message: "안녕하세요? xxx입니다.",
                createdAt: "2024-12-15 18:03:01",
            },
            {
                sender: senders[123],
                message: "12월 25일 크리스마스에 만나는 거 어떠신가요",
                createdAt: "2024-12-15 18:40:10",
            },
            {
                sender: { id: "아이디", name: "John Doe" },
                message: "ㅇㅋㅇㅋ",
                createdAt: "2024-12-11 18:12:01",
            },
            {
                sender: senders[123],
                message: "Hey! How are you? How was the weekend we met",
                createdAt: "2024-12-15 18:03:08",
            },
        ],
    },
    "124": {
        messages: [
            {
                sender: senders[124],
                message: "안녕하세요? xxx입니다.",
                createdAt: "2024-12-15 18:03:01",
            },
            {
                sender: senders[124],
                message: "12월 25일 크리스마스에 만나는 거 어떠신가요",
                createdAt: "2024-12-15 18:40:10",
            },
            {
                sender: { id: "아이디", name: "John Doe" },
                message: "ㅇㅋㅇㅋ",
                createdAt: "2024-12-11 18:12:01",
            },
            {
                sender: senders[124],
                message: "You Don't know me!! What the hell",
                createdAt: "2024-12-15 18:03:08",
            },
        ],
    },
    "153": {
        messages: [
            {
                sender: senders[153],
                message: "안녕하세요? xxx입니다.",
                createdAt: "2024-12-15 18:03:01",
            },
            {
                sender: senders[153],
                message: "12월 25일 크리스마스에 만나는 거 어떠신가요",
                createdAt: "2024-12-15 18:40:10",
            },
            {
                sender: { id: "아이디", name: "John Doe" },
                message: "ㅇㅋㅇㅋ",
                createdAt: "2024-12-11 18:12:01",
            },
            {
                sender: senders[153],
                message: "I got It",
                createdAt: "2024-12-15 18:03:08",
            },
        ],
    },
    복숭아: {
        messages: [
            {
                sender: senders["복숭아"],
                message: "안녕하세요? xxx입니다.",
                createdAt: "2024-12-15 18:03:01",
            },
            {
                sender: senders["복숭아"],
                message: "12월 25일 크리스마스에 만나는 거 어떠신가요",
                createdAt: "2024-12-15 18:40:10",
            },
            {
                sender: { id: "아이디", name: "John Doe" },
                message: "ㅇㅋㅇㅋ",
                createdAt: "2024-12-11 18:12:01",
            },
            {
                sender: senders["복숭아"],
                message: "누구세요?",
                createdAt: "2024-12-15 18:03:08",
            },
        ],
    },
    수박: {
        messages: [
            {
                sender: senders["수박"],
                message: "안녕하세요? xxx입니다.",
                createdAt: "2024-12-15 18:03:01",
            },
            {
                sender: senders["수박"],
                message: "12월 25일 크리스마스에 만나는 거 어떠신가요",
                createdAt: "2024-12-15 18:40:10",
            },
            {
                sender: { id: "아이디", name: "John Doe" },
                message: "ㅇㅋㅇㅋ",
                createdAt: "2024-12-11 18:12:01",
            },
            {
                sender: senders["수박"],
                message: "반갑습니다.",
                createdAt: "2024-12-15 18:03:08",
            },
        ],
    },
};
