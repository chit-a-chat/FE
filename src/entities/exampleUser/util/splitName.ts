export const splitName = (name: string) => {
    const [firstName, lastName] = name.split(" ");
    return {
        firstName,
        lastName,
    };
};
