import React, { useState } from "react";
import Image1 from "../../image/image1.png";
import Button from "../button/button";
import Modal from "../../components/modal/modal";

const PersonalCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col mx-auto">
      <div className="my-2">
        <h1 className="text-lg font-bold mx-2">نام و نام خانوادگی</h1>
        <p className="text-base font-light text-gray2 mx-2 my-1">
          مدیر فروش و بازاریابی
        </p>
      </div>
      <div className="w-full flex flex-row-2 justify-between items-center gap-10">
        <div className="w-1/2 h-28 rounded-sm shadow-xl shadow-slate-300 mx-6">
          <img
            alt="person"
            src={Image1}
            className="rounded-2xl w-full h-full m-auto p-0"
          />
        </div>
        <div
          onClick={() => setOpen(true)}
          className="flex h-28 w-1/2 flex-col mx-6 border rounded-2xl justify-between shadow-sm shadow-slate-100 cursor-pointer"
        >
          <h1 className="text-base mx-1 my-1 text-gray2 justify-center text-center">
            نمایش توضیحات
          </h1>
          <p className="text-lg mx-1 my-1 self-center text-red-950 font-extrabold text-center">
            انطباق ۷۵٪
          </p>
        </div>
      </div>
      <div className="w-full flex border-b py-4 gap-10">
        <div className="w-1/2 mx-6 border text-center border-slate-300 rounded-md shadow py-2 font-normal bg-gray-100">
          <Button name="رزومه" className={""} />
        </div>
        <div className="w-1/2 mx-6 border text-center border-slate-300 rounded-md shadow py-2 font-normal bg-gray-100">
          <Button name="مدارک" className={""} />
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} request={undefined} />
    </div>
  );
};

export default PersonalCard;
