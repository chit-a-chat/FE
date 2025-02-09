export const matches = {
    ChatRoom: {
        Profile: {
            MyAccount: "내계정",
        },
        Title: "메세지",
        Filter: "필터 적용",
        Message: {
            TimeSuffix: {
                minute: "분",
                hour: "시간",
                now: "방금",
            },
        },
        AddFavorite: "즐겨찾기에 추가하기",
        EndConversation: "대화 종료하기",
    },
    ChatDetail: {
        Favorite: "좋아요",
        Typing: "작성중...",
        InputPlaceholder: "메세지를 작성해주세요...",
    },
    ChatProfile: {
        Title: "매칭된 프로필",
        MyFavorite: "내 주요 관심사",
        MyScore: "내가 받은 평점",
        SocialMedia: "소셜미디어",
        ViewMore: "더보기",
    },
    ChatDeleteModal: {
        Title: "대화 종료",
        Subtitle: "이 채팅을 삭제하시겠습니까?",
        Content: "이 채팅을 삭제하면, 상대방과 다시 매칭되지 않습니다.",
        CancelBtn: "돌아가기",
        DeleteBtn: "이 채팅을 삭제하기",
    },
} as const;
