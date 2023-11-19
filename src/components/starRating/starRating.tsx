import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const StarRating = () => {
  const [rate, setRate] = useState(3);

  const onClickHandler = (rateValue: number) => {
    setRate(rateValue);
  };

  return (
    <div>
      <StarRatingComponent
        name="star"
        starCount={5}
        value={rate}
        onStarClick={onClickHandler}
      />
    </div>
  );
};
export default StarRating;
