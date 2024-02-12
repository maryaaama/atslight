import { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
interface StarRatingProps {
  starClick: any;
}
const StarRating = ({ starClick }: StarRatingProps) => {
  const [rate, setRate] = useState(0);

  const onClickHandler = (rateValue: number) => {
    if (starClick) {
      starClick();
    } else {
      setRate(rateValue);
    }
  };

  return (
    <>
      <StarRatingComponent
        name={0}
        starCount={5}
        value={rate}
        onStarClick={onClickHandler}
      />
    </>
  );
};
export default StarRating;
