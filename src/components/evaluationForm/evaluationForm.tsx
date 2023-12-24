import { useState } from "react";
import StarRating from "../starRating/starRating";
const EvaluationForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1 className="font-bold absolute top-3">فرم ارزیابی</h1>
      <div className="flex flex-col md:flex-row items-start p-4 bg-white rounded border-t relative">
        <p className="ml-8 text-right w-52 h-22 overflow-y-hidden verflow-auto break-words">
          ارزیابی رزومه
        </p>
        <div className="mt-6 md:mt-0">
          <StarRating  starClick={undefined}/>
        </div>
      </div>

      <div className="mt-6">
      <h1 className="text-right text-lg text-gray-600">نظر</h1>
      <textarea className="w-full h-20 p-2 border border-slate-400 rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
        placeholder=""></textarea>
    </div>

      <div className="flex flex-col md:flex-row items-start p-4 bg-white rounded relative mt-6">
        <p className="ml-8 text-right w-52 h-22 overflow-y-hidden verflow-auto break-words">
          جمع بندی
        </p>
        <div className="mt-6 md:mt-0">
          <StarRating  starClick={undefined}/>
        </div>
      </div>
      <div className="w-full border-t mt-1">
        <button className="bg-slate-300 m-5 px-2 py-1 rounded-md">ثبت</button>
      </div>
    </>
  );
};

export default EvaluationForm;
