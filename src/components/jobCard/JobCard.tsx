import { useState } from "react"
import Modal from '../modal/modal';

export const JobCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <span
      onClick={() => setOpen(true)}
      className="flex w-auto m-1 border rounded-md bg-back shadow-sm hover:bg-gray-100 hover:shadow-lg items-center justify-between py-2"
    >
      <div className="w-[46%]">
        <h2 className="pr-2 font-medium text-lg">مدیر فروش</h2>
      </div>
      <Modal open={open} setOpen={setOpen} request={undefined} children={undefined} />
    </span>
  );
};

export default JobCard;
