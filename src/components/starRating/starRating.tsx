import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import Modal from "../modal/modal";
import EvaluationForm from "../evaluationForm/evaluationForm";

const StarRating = () => {
  const [rate, setRate] = useState(0);
  const [open, setOpen] = useState(false);


  const onClickHandler = (rateValue: number) => {
    // setRate(rateValue);
    setOpen(true)
  };

  return (
    <>
      <StarRatingComponent
        name="star"
        starCount={5}
        value={rate}
        onStarClick={onClickHandler}
      />
      <Modal open={open} setOpen={setOpen} request={undefined} >
        <EvaluationForm/>
        </Modal>
    </>

  );
};
export default StarRating;
