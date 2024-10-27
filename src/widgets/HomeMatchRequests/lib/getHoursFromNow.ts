export const getHoursFromNow = (date: Date) => {
    const now = Date.now();
    const past = date.getTime();
    const diff = now - past;

    return Math.floor(diff / (1000 * 60 * 60));
};
