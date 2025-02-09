import dayjs, { Dayjs } from "dayjs";

export const displayChatUpdatedAt = (
    updatedAt: Dayjs,
    minuteSuffix: string,
    hourSuffix: string,
    curretSuffix: string
) => {
    const diffInMs = dayjs().diff(dayjs(updatedAt)); // 현재 시간과 주어진 날짜의 차이 (밀리초)
    const diffInHours = diffInMs / (1000 * 60 * 60); // 차이를 시간 단위로 변환
    if (diffInHours < 1) {
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60)); // 차이를 분 단위로 변환
        if (diffInMinutes < 1) return curretSuffix;
        return `${diffInMinutes}${minuteSuffix}`;
    } else if (diffInHours < 24) {
        return `${Math.floor(diffInHours)}${hourSuffix}`;
    } else {
        return dayjs(updatedAt).format("YYYY-MM-DD");
    }
};
7;
