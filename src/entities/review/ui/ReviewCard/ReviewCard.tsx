import { Review } from "@entities/review/model/models";

import { FlexDiv } from "@shared/ui";

import { ReviewerProfile } from "../ReviewProfile/RevieweProfile";
import { ReviewCardContent } from "./ReviewCard.Content";

type ReviewCardProps = {
    review: Review;
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
    return (
        <FlexDiv direction="row" gap={109} css={{ height: "148px" }}>
            <ReviewerProfile reviewer={review.reviewer} />
            <ReviewCardContent review={review} />
        </FlexDiv>
    );
};
