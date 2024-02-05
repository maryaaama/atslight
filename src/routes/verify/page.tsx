// import "../globals.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import LoadingButton from "../../components/button/LoadingButton";

export default function Signup() {
  const [data, setData] = useState("");
  const [err, setErr] = useState("");
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const clickHandlear = () => {
    if (!data.trim()) {
      setErr("وارد کردن کد الزامیست");
    } else {
      setIsClick(true);
      navigate("/company");
    }
  };
  const Completionist = () => (
    <button className="flex m-1 w-1/2 justify-center border bg-back shadow-md rounded-md px-1.5 sm:px-3 py-1.5 text-xs font-semibold leading-6 text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
      درخواست مجدد
    </button>
  );

  const renderer: ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: any;
    seconds: any;
    completed: any;
  }) => JSX.Element = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <button
          className="flex m-1 w-1/2 text-xs bg-back justify-center text-gray2 border shadow-md rounded-md px-1.5 sm:px-3 py-1.5 leading-6"
          disabled
        >{`(${minutes}:${seconds}) درخواست مجدد`}</button>
      );
    }
  };

  return (
    <div className="flex flex-col h-[95vh] sm:h-auto sm:my-36">
      <div className=" flex h-full flex-col px-4 py-8 sm:mx-auto sm:w-full sm:max-w-sm sm:border sm:shadow-md sm:rounded-md sm:border-gray-200">
        <div className="flex flex-1 flex-col px-2">
          <h2 className="font-semibold text-xl">تأیید شماره موبایل</h2>
          <div>
            <div className="flex flex-col py-5">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                کد تأیید را وارد کنید.
              </label>
              <span className="text-xs text-gray-500 mt-5">
                لطفا کد تأییدی که برای شماره -----------پیامک شده را وارد کنید.
              </span>
            </div>
            <input
              type="text"
              name="phoneNumber"
              value={data}
              onChange={(e) => setData(e.target.value)}
              autoFocus
              placeholder="کد تأیید"
              className="pr-3 text-sm block w-full m-auto rounded-md border-0 leading-6 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray1 placeholder:text-gray1 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-8"
            />
            <span className="text-sm text-red-600">{err}</span>
            <div className="flex w-full mt-4 gap-2">
              <Countdown date={Date.now() + 119000} renderer={renderer} />

              <button
                onClick={() => navigate("/signin")}
                className="flex w-1/2 justify-center m-auto border bg-back shadow-md rounded-md px-1.5 py-1.5 text-xs font-semibold leading-6 text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                ویرایش شماره
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            onClick={clickHandlear}
            className="flex w-full justify-center rounded-md bg-primary py-1.5 text-sm font-semibold leading-8 text-white shadow-sm hover:bg-opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {isClick ? <LoadingButton /> : "ورود"}
          </button>
        </div>
      </div>
    </div>
  );
}
