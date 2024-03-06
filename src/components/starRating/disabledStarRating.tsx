import React from "react";
import StarRatingComponent from "react-star-rating-component";

interface DisabledStarRatingProps {
  rating: number;
}

const DisabledStarRating: React.FC<DisabledStarRatingProps> = ({ rating }) => {
  return (
    <StarRatingComponent
      name={""}
      starCount={5}
      value={rating}
      editing={false}
    />
  );
};

export default DisabledStarRating;
