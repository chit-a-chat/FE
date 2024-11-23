import { ReviewFormCard, Reviewee } from "@entities/review";

import { FlexDiv } from "@shared/ui";

export const ReviewFormList = () => {
    const sampleReviews: Reviewee[] = [
        {
            averageRating: 4.4,
            totalReviews: 30,
            name: "사과",
            images: ["임시"],
            id: "id-1",
        },
        {
            averageRating: 3.5,
            totalReviews: 16,
            name: "포도",
            images: ["임시"],
            id: "id-2",
        },
    ];

    return (
        <FlexDiv direction="column" gap={23}>
            {sampleReviews.map((aReview, index) => (
                <ReviewFormCard key={`review-${index}`} reviewee={aReview} />
            ))}
        </FlexDiv>
    );
};
