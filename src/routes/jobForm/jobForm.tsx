import React from "react";

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
  return (
    <>
      <h1>موقعیت شغلی جدید</h1>
      <form className=" border shadow m-2 p-1" action="">
        <div className="m-2 p-2">
          <label htmlFor="title">عنوان : </label>
          <input
            className="w-[70%] border shadow-sm my-3"
            type="text"
            id="title"
          />
          <br />
          <label htmlFor="desc">توضیحات : </label>
          <textarea
            className="w-[70%] border shadow-sm"
            name="desc"
            id="desc"
            cols={30}
            rows={3}
          ></textarea>
        </div>
        <div className="border shadow m-2 p-2">
          <h2 className="my-3 font-semibold">شرایط احراز</h2>
          <div className="p-2 my-3">
            <label htmlFor="title">رشته : </label>
            <input
              className="w-[70%] border shadow-sm"
              type="text"
              id="title"
            />
          </div>
          <div className="p-2">
            <label htmlFor="desc">مقطع</label>
            <br />
            <input className="mx-1 my-2" type="checkbox" id="1" />
            <label className="mx-2" htmlFor="1">
              دیپلم
            </label>
            <br />
            <input className="mx-1" type="checkbox" id="2" value={""} name="" />
            <label className="mx-2" htmlFor="2">
              لیسانس
            </label>
            <br />
            <input className="mx-1" type="checkbox" id="3" value={""} name="" />
            <label className="mx-2" htmlFor="3">
              فوق لیسانس
            </label>
            <br />
            <input className="mx-1" type="checkbox" id="4" value={""} name="" />
            <label className="mx-2" htmlFor="4">
              دکتری
            </label>
            <br />
            <input className="mx-1" type="checkbox" id="5" value={""} name="" />
            <label className="mx-2" htmlFor="5">
              فوق دکتری
            </label>
          </div>
          <div className="my-3">
            <label className="mx-2" htmlFor="Orientation">
              گرایش :
            </label>
            <input
              className="w-[70%] border shadow-sm"
              type="text"
              id="Orientation"
            />
          </div>
        </div>

        <div className="border shadow m-2 p-2">
          <label className="mx-2" htmlFor="age">
            بازه سنی :
          </label>
          <input
            className="w-[70%] my-2"
            type="range"
            id="age"
            max={100}
            min={0}
            name=""
          />
        </div>
        <div className="border shadow m-2 p-2">
          <h2 className="font-semibold my-2">جنسیت</h2>
          <input className="mx-1" type="checkbox" id="man" value={""} name="" />
          <label className="mx-2" htmlFor="man">
            مرد
          </label>
          <br />
          <input
            className="mx-1"
            type="checkbox"
            id="woman"
            value={""}
            name=""
          />
          <label className="mx-2" htmlFor="woman">
            زن
          </label>
        </div>
        <div className="border shadow m-2 p-2">
          <label className="mx-1" htmlFor="experience">
            سابقه کاری :
          </label>
          <input
            className="w-[70%] my-2 border shadow-sm"
            type="number"
            id="experience"
            name=""
          />
        </div>
        <div className="border shadow m-2 p-2">
          <h2 className="font-semibold">تخصص</h2>
          <label className="mx-2" htmlFor="knowledge">
            دانش :
          </label>
          <input
            className="w-[70%] border shadow-sm my-2"
            type="text"
            id="knowledge"
            value={""}
            name=""
          />
          <br />
          <label className="mx-2" htmlFor="skill">
            مهارت :
          </label>
          <input
            className="w-[70%] border shadow-sm my-2"
            type="text"
            id="skill"
            value={""}
            name=""
          />
          <br />
          <label className="mx-2" htmlFor="competency">
            شایستگی :
          </label>
          <input
            className="w-[70%] border shadow-sm my-2"
            type="text"
            id="competency"
            value={""}
            name=""
          />
        </div>
      </form>
    </>
  );
}
