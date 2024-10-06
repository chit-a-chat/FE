import styled from "@emotion/styled";

type PictureCardProps = {
    src: string;
};

const Picture = styled.img`
    object-fit: cover;
    border-radius: 30.9px;
    width: 100%;
    height: 100%;
    border: 0.77px solid transparent;
    background-image: linear-gradient(45deg, #ffffff99 0%, #ffffff99 100%);
    background-clip: border-box;
    background-origin: border-box;
`;
const PictureContainer = styled.div`
    display: flex;
    position: absolute;
    width: 270.63px;
    height: 347.68px;
    padding: 8px 8px 69px;
    border-radius: 30.9px;
    background: linear-gradient(
        151.06deg,
        rgba(255, 255, 255, 0.5) 3.57%,
        rgba(255, 255, 255, 0.2) 97.69%
    );
    box-shadow: 0px 15.4524px 30.9049px rgba(195, 178, 255, 0.2);
    backdrop-filter: blur(7.72622px);
    border: 0.77px solid transparent;
    background-image: linear-gradient(45deg, #ffffff99 0%, #ffffff99 100%);
    background-clip: border-box;
    background-origin: border-box;
`;
//-147px
export const PictureCard = ({ src }: PictureCardProps) => {
    return (
        <PictureContainer className="home-picture-card">
            <Picture src={src} />
        </PictureContainer>
    );
};
