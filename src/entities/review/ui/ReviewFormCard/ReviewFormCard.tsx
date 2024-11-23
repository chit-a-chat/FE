import { FlexDiv } from "@shared/ui";

import { Reviewee } from "../../model/models";
import { ReviewerProfile } from "../ReviewProfile/RevieweProfile";
import { ReviewCardForm } from "./ReviewFormCard.Form";

type ReviewFormCardProps = {
    reviewee: Reviewee;
};

export const ReviewFormCard = ({ reviewee }: ReviewFormCardProps) => {
    return (
        <FlexDiv direction="row" gap={30}>
            <ReviewerProfile reviewer={reviewee} />
            <ReviewCardForm />
        </FlexDiv>
    );
};
