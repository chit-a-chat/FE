import { Review, ReviewCard } from "@entities/review";

import { FlexDiv } from "@shared/ui";

export const ReviewList = () => {
    const sampleReviews: Review[] = [
        {
            rating: 4.9,
            registerDate: new Date(),
            content:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim.",
            reviewer: { averageRating: 4.4, totalReviews: 30, name: "사과", images: ["임시"] },
        },
        {
            rating: 1.1,
            registerDate: new Date(),
            content:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim.",
            reviewer: { averageRating: 3.5, totalReviews: 16, name: "포도", images: ["임시"] },
        },
    ];

    return (
        <FlexDiv direction="column" gap={23}>
            {sampleReviews.map((aReview, index) => (
                <ReviewCard key={`review-${index}`} review={aReview} />
            ))}
        </FlexDiv>
    );
};
