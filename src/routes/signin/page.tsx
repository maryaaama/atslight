import "../globals.css";
import { SyntheticEvent, useState } from "react";
import { KavehNegar } from "../../api/kavehNegar";

export default function Home() {
  const [data, setData] = useState("");
  const { sendSms, err } = KavehNegar();

  const clickHandler = () => {
    sendSms({ data });
  };

  return (
    <main>
      <div className="flex flex-col h-[95vh] sm:h-auto sm:my-36">
        <div className="flex h-full flex-col px-4 py-8 lg:px-8 justify-between sm:mx-auto sm:w-full sm:max-w-sm sm:border sm:shadow-md   sm:rounded-md sm:border-gray-200">
          <div>
            <h2 className="flex font-semibold text-xl sm:justify-center ">
              ورود به حساب کاربری
            </h2>
            <div className="flex flex-col pt-5 pb-1 mt-8">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900 mb-3"
              >
                شماره موبایل خود را وارد کنید
              </label>
            </div>

            <input
              type="text"
              name="phoneNumber"
              value={data}
              onChange={(e: SyntheticEvent<HTMLInputElement>) =>
                setData(e.currentTarget.value)
              }
              placeholder="0912XXXXXXX"
              className="my-2 pl-2 text-sm  text-left block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray2 placeholder:text-gray2 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:leading-8"
            />
            <span className="text-red-600 text-xs">{err}</span>
            <p className="text-slate-500 text-xs mt-2">
              شرایط استفاده از خدمات و حریم خصوصی این سرویس را می‌پذیرم.
            </p>
          </div>

          <div className="flex w-full mt-8">
            <button
              type="submit"
              onClick={clickHandler}
              className="flex w-full justify-center rounded-md bg-primary py-1.5 text-sm font-semibold leading-8 text-white shadow-sm hover:bg-opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              تایید
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
