import React from "react";
import RangeSlider from "../../components/rangeSlider/rangeSlider";

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
      <h1 className="text-xl mx-4 my-2">موقعیت شغلی جدید</h1>
      <form className="m-1 p-1" action="">
        <div className="border shadow-sm m-2 p-2 bg-slate-50 rounded-lg">
          <label className="" htmlFor="title">
            عنوان
          </label>
          <input
            className="w-[100%] border shadow-sm my-3 mt-1 rounded-sm"
            type="text"
            id="title"
            required={true}
          />
          <br />
          <label className="ml-1" htmlFor="desc">
            توضیحات
          </label>
          <textarea
            className="w-[100%] border shadow-sm mt-1 rounded-sm"
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
              className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm"
              type="text"
              id="title"
            />
          </div>
          <div className="">
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
              className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm"
              type="text"
              id="Orientation"
            />
          </div>
        </div>

        <div className="border shadow px-2 m-2 py-4 bg-slate-50 rounded-lg">
          <label className="my-auto" htmlFor="age">
            بازه سنی
          </label>
          <RangeSlider className="w-full mt-3 h-9 " defaultValue={[25, 75]} />
        </div>
        <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
          <h2 className="font-medium my-2 text-lg">جنسیت</h2>
          <input className="mx-1" type="checkbox" id="man" value={""} name="" />
          <label className="ml-4" htmlFor="man">
            مرد
          </label>
          <input
            className="mr-4"
            type="checkbox"
            id="woman"
            value={""}
            name=""
          />
          <label className="mx-1" htmlFor="woman">
            زن
          </label>
        </div>
        <div className="border shadow m-2 px-2 py-4 bg-slate-50 rounded-lg">
          <label className="" htmlFor="experience">
            سابقه کاری
          </label>
          <input
            className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm"
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
              className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm"
              type="text"
              id="knowledge"
              value={""}
              name=""
            />
          </div>
          <br />
          <div>
            <label className="" htmlFor="skill">
              مهارت
            </label>
            <input
              className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm"
              type="text"
              id="skill"
              value={""}
              name=""
            />
          </div>
          <br />
          <div>
            <label className="" htmlFor="competency">
              شایستگی
            </label>
            <input
              className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm"
              type="text"
              id="competency"
              value={""}
              name=""
            />
          </div>
        </div>
        <div className="px-2 py-4 m-2 border shadow bg-slate-50 rounded-lg">
          <label className="" htmlFor="tag">
            برچسب ها
          </label>
          <input
            className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm"
            type="text"
            id="tag"
            value={""}
            name=""
          />
        </div>
        <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
          <h2 className="font-medium text-lg my-2"> فیلد های ورودی</h2>
          <div className="flex mx-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>
            <div className="mx-2 my-1">رزومه</div>
          </div>
          <div className="flex mx-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            <div className="mx-2 my-1">تاریخ تولد</div>
          </div>
          <div className="flex mx-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            <div className="mx-2 my-1">وضعیت نظام وظیفه</div>
          </div>
          <div className="flex mx-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <div className="mx-2 my-1">جنسیت</div>
          </div>
          <div className="flex mx-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div className="mx-2 my-1">آدرس</div>
          </div>
          <div className="flex mx-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <div className="mx-2 my-1">پیام</div>
          </div>
        </div>
        <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
          <h2 className="font-medium my-2 text-lg">محل سکونت</h2>
          <div>
            <label className="" htmlFor="state">
              استان
            </label>
            <input
              className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm"
              type="text"
              id="state"
              value={""}
              name=""
            />
          </div>
          <br />
          <div>
            <label className="" htmlFor="city">
              شهر
            </label>
            <input
              className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm"
              type="text"
              id="city"
              value={""}
              name=""
            />
          </div>
          <br />
          <div>
            <label className="" htmlFor="address">
              آدرس
            </label>
            <input
              className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm "
              type="text"
              id="address"
              value={""}
              name=""
            />
          </div>
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
