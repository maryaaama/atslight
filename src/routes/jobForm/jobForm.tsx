import React from "react";
import RangeSlider from "../../components/rangeSlider/rangeSlider";
import AddressComponent from "../../components/jobFields/address";
import GenderComponent from "../../components/jobFields/gender";
import FieldComponent from "../../components/jobFields/fields";
import { JobField } from "../../graphql/generated/graphql";
import { EntryForm } from "../../components/jobFields/entryForm";

// interface JobData {
//   title: string;
//   decription: string;
//   field: string;
//   grade: string;
//   gender: string;
//   experience: number;
//   skill: string;
//   competency: string;
//   label: string;
//   knowledge: string;
// }

export default function JobForm() {
  const fieldsToShow: JobField[] = [
    JobField.Gender,
    JobField.MilitaryStatus,
    JobField.Resume,
    JobField.Address,
    JobField.Birthday,
    JobField.CoverLetter,
  ];

  return (
    <>
      <h1 className="text-xl mx-4 my-2">موقعیت شغلی جدید</h1>
      <form className="m-1 p-1" action="">
        <div className="border shadow-sm m-2 p-2 bg-slate-50 rounded-lg">
          <label className="" htmlFor="title">
            عنوان
          </label>
          <input
            className="w-[100%] border shadow-sm my-3 mt-1 rounded-sm p-0.5"
            type="text"
            id="title"
            required={true}
          />
          <br />
          <label className="ml-1" htmlFor="desc">
            توضیحات
          </label>
          <textarea
            className="w-[100%] border shadow-sm mt-1 rounded-sm p-0.5"
            name="desc"
            id="desc"
            cols={30}
            rows={3}
          ></textarea>
        </div>
        <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
          <h2 className="my-3 font-medium text-lg">شرایط احراز</h2>
          <div className="my-3">
            <label className="" htmlFor="title">
              رشته
            </label>
            <input
              className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm p-0.5"
              type="text"
              id="title"
            />
          </div>
          <div className="mt-2 p-2  bg-white border rounded-lg">
            <label className="font-medium" htmlFor="desc">
              مقطع
            </label>
            <br />
            <input className="mx-2 my-2" type="checkbox" id="1" />
            <label className="mx-1 text-sm" htmlFor="1">
              دیپلم
            </label>
            <br />
            <input className="mx-2" type="checkbox" id="2" value={""} name="" />
            <label className="mx-1 text-sm" htmlFor="2">
              لیسانس
            </label>
            <br />
            <input className="mx-2" type="checkbox" id="3" value={""} name="" />
            <label className="mx-1 text-sm" htmlFor="3">
              فوق لیسانس
            </label>
            <br />
            <input className="mx-2" type="checkbox" id="4" value={""} name="" />
            <label className="mx-1 text-sm" htmlFor="4">
              دکتری
            </label>
            <br />
            <input className="mx-2" type="checkbox" id="5" value={""} name="" />
            <label className="mx-1 text-sm" htmlFor="5">
              فوق دکتری
            </label>
          </div>
          <div className="my-3">
            <label className="" htmlFor="Orientation">
              گرایش
            </label>
            <input
              className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm p-0.5"
              type="text"
              id="Orientation"
            />
          </div>
        </div>

        <div className="border shadow px-2 m-2 py-3 bg-slate-50 rounded-lg">
          <label className="my-auto" htmlFor="age">
            بازه سنی
          </label>
          <RangeSlider className="w-full mt-3 h-9 " defaultValue={[25, 75]} />
        </div>
        <GenderComponent />
        <div className="border shadow m-2 px-2 py-3 bg-slate-50 rounded-lg">
          <label className="" htmlFor="experience">
            سابقه کاری
          </label>
          <input
            className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
            type="number"
            id="experience"
            name=""
          />
        </div>
        <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
          <h2 className="font-medium my-2 text-lg">تخصص</h2>
          <div>
            <label className="" htmlFor="knowledge">
              دانش
            </label>
            <input
              className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
              type="text"
              id="knowledge"
              name=""
            />
          </div>
          <br />
          <div>
            <label className="" htmlFor="skill">
              مهارت
            </label>
            <input
              className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
              type="text"
              id="skill"
              name=""
            />
          </div>
          <br />
          <div>
            <label className="" htmlFor="competency">
              شایستگی
            </label>
            <input
              className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
              type="text"
              id="competency"
              name=""
            />
          </div>
        </div>
        <div className="px-2 py-3 m-2 border shadow bg-slate-50 rounded-lg">
          <label className="" htmlFor="tag">
            برچسب ها
          </label>
          <input
            className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
            type="text"
            id="tag"
            name=""
            placeholder="باریستا, صندوقدار, آشپز"
          />
        </div>
        <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
          <AddressComponent />
        </div>
        <FieldComponent fieldKeys={fieldsToShow} />
        <div className="px-2 py-3 m-2 border shadow bg-slate-50 rounded-lg">
          <h1 className="font-medium text-lg">فرم های ورودی</h1>
          <EntryForm />
        </div>
        <div className="px-2 py-3 m-2 border shadow bg-slate-50 rounded-lg">
          <label className="font-medium my-2 text-lg" htmlFor="step">
            مراحل استخدام
          </label>
          <input
            className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5 text-slate-700"
            type="text"
            id="step"
            value={"پیش فرض"}
            name=""
            disabled
          />
        </div>
        <div className="flex gap-2">
          <button className="w-[46%] bg-primary text-white text-lg font-medium py-2 border shadow m-auto rounded-lg">
            ذخیره
          </button>
          <button className="w-[46%] bg-gray1 text-white text-lg font-medium py-2 border shadow m-auto rounded-lg">
            لغو
          </button>
        </div>
      </form>
    </>
  );
}
