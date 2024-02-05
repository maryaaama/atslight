import StarRating from "../starRating/starRating";
import Modal from "../modal/modal";
import EvaluationForm from "../evaluationForm/evaluationForm";
import { useState } from "react";
const EvaluateModal = () => {
  const [open, setOpen] = useState(false);

  const starHandler = (event: { stopPropagation: any }) => {
    event?.stopPropagation();
    setOpen(true);
  };

  return (
    <div>
      <div className="text-3xl">
        <StarRating starClick={starHandler} />
      </div>
      <Modal open={open} setOpen={setOpen} request={undefined}>
        <EvaluationForm />
      </Modal>
    </div>
  );
};

export default EvaluateModal;
