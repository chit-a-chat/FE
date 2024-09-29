import styled from "@emotion/styled";

import { PictureCard } from "./components/PictureCard";

const HomePictureListContainer = styled.div`
    width: 920px;
    height: 390px;
    position: relative;
    transform-origin: left top;
    & > .home-picture-card {
        transform-origin: left top;
    }
    & > .home-picture-card:nth-of-type(4) {
        transform: rotate(-5.28deg);
        left: 0px;
        top: 25px;
    }
    & > .home-picture-card:nth-of-type(3) {
        transform: rotate(1.07deg);
        left: 220.1px;
        top: 9px;
    }
    & > .home-picture-card:nth-of-type(2) {
        transform: rotate(7.73deg);
        left: 467.69px;
        top: 9px;
    }
    & > .home-picture-card:nth-of-type(1) {
        transform: rotate(-2.52deg);
        left: 634.58px;
        top: 37px;
    }
`;

export const HomePictureList = () => {
    return (
        <HomePictureListContainer>
            <PictureCard src="https://images.unsplash.com/photo-1542327897-d73f4005b533?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <PictureCard src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <PictureCard src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <PictureCard src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </HomePictureListContainer>
    );
};
