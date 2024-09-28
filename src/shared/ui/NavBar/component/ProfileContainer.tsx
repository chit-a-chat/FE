import styled from "@emotion/styled";

export const ProfileContainer = styled.div<{ isLoggedIn: boolean }>`
    display: flex;
    gap: ${({ isLoggedIn }) => (isLoggedIn ? "14px" : "20px;")};
`;
