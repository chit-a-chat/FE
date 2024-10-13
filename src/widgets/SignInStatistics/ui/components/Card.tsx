import { PropsWithChildren } from "react";

import { Icon } from "@shared/Icon";

import styled from "@emotion/styled";

const CardContainer = styled.div`
    display: flex;
    width: 280px;
    height: 330px;
    flex-direction: column;
    padding: 24px;
    border-radius: 34px;
    background: linear-gradient(
        151.06deg,
        rgba(255, 255, 255, 0.5) 3.57%,
        rgba(255, 255, 255, 0.2) 97.69%
    );
    box-shadow: 0px 17.1429px 34.2857px rgba(195, 178, 255, 0.2);
    backdrop-filter: blur(8.57143px);
`;

export const Card = ({ children }: PropsWithChildren) => {
    return <CardContainer className="card">{children}</CardContainer>;
};
Card.Title = styled.span(({ theme }) => ({
    color: theme.palette.grey[7],
    ...theme.typo["h3/medium"],
}));
Card.Value = styled.span(({ theme }) => ({
    color: theme.palette.grey[8],
    ...theme.typo["display/large"],
}));
Card.SupportText = styled.span(({ theme }) => ({
    color: theme.palette.grey[5],
    ...theme.typo["supporting/regular"],
}));
Card.ReviewContent = styled.span(({ theme }) => ({
    color: theme.palette.primary[6],
    ...theme.typo["h2/medium"],
}));
Card.ProfileName = styled.span(({ theme }) => ({
    color: theme.palette.common.black,
    ...theme.typo["h4/regular"],
}));
Card.ProfileImage = styled.img`
    border-radius: 34.3px;
    width: 50.5px;
    height: 50.5px;
    background-color: #d9d9d9;
    object-fit: cover;
`;
Card.Heart = () => <Icon type="card-heart" size={131} />;
Card.Arrow = () => <Icon type="arrow-target" size={131} />;
Card.Statistics = () => <Icon type="graph-bar" size={155} />;
