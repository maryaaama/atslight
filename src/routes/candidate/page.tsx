import Button from "../../components/button/button";
import NavBar from "../../components/navBar/navBar";
import PersonalCard from "../../components/personalCard/personalCard";
import StarRating from "../../components/starRating/starRating";
import { useState } from "react";

export default function Candidate() {

  return (
    <main>
      <NavBar name={"مدیر فروش"} />
      <PersonalCard />
      <div className="w-full border-b border-t">
        <div className="flex justify-between mx-6 my-2">
          <div className="text-base text-gray2 font-medium">ارزیابی رزومه</div>
          <div className="text-lg">
            <StarRating />
          </div>
        </div>
        <div className="flex justify-between mx-6 my-2">
          <div className="text-base text-gray2 font-medium">تماس تلفنی</div>
          <div className="text-lg">
            <StarRating />
          </div>
        </div>
        <div className="flex justify-between mx-6 my-2">
          <div className="text-base text-gray2 font-medium">مصاحبه حضوری</div>
          <div className="text-lg">
            <StarRating />
          </div>
        </div>
        <div className="flex justify-between mx-6 my-2">
          <div className="text-base text-gray2 font-medium">آزمون تخصصی</div>
          <div className="text-lg">
            <StarRating />
          </div>
        </div>
      </div>
      <div className="w-full flex border-t py-5">
        <div className="w-1/2 text-center border border-slate-300 rounded-md shadow mx-6 py-2 font-normal bg-gray-100">
          <Button name="رد صلاحیت" className={""} />
        </div>
        <div className="w-1/2 text-center border border-slate-300 rounded-md shadow mx-6 py-2 font-normal bg-primary text-white">
          <Button name="استخدام" className={""} />
        </div>
      </div>
      <div className="flex flex-row py-4 px-3 justify-between border-t">
        <Button
          className="m-auto text-center border border-slate-300 p-2 text-sm rounded-md bg-[#b23226] text-white shadow font-normal"
          name={"تماس تلفنی"}
        />
        <Button
          className="m-auto text-center border border-slate-300 p-2 text-sm rounded-md shadow font-normal bg-gray-100"
          name={"تماس ویدیویی"}
        />
        <Button
          className="m-auto text-center border border-slate-300 p-2 text-sm rounded-md shadow font-normal bg-gray-100"
          name={"قرار روی تقویم"}
        />
   
      </div>
    </main>
  );
}
