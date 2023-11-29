import NavBar from "../../components/navBar/navBar";
import { ChangeEvent, useState } from "react";
import DefaultImage from "../../image/upload.png";
import { Link } from 'react-router-dom';

export default function Company() {
  const [file, setFile] = useState(DefaultImage);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type.startsWith("image/")) {
        setFile(URL.createObjectURL(selectedFile));
      } else {
        alert("فایل نامعتبر!!! لطفا فایل با فرمت درست را وارد کنید");
      }
    }
  }

  return (
    <div className="h-screen w-screen">
      <NavBar name={"ساخت حساب کاربری"} />
      <form action="post" className="">
        <div className="flex mt-4 flex-col gap-4 mx-6">
          <p className="">تصویر لوگو</p>
          <div className="shadow-xl w-fit rounded-lg">
            <section className="container w-fit items-start border-[2px] border-gray1 border-dashed rounded-lg">
              <label htmlFor="upload" className="cursor-pointe">
                <input
                  type="file"
                  onChange={handleChange}
                  id="upload"
                  className="hidden"
                />
                <img
                  src={file}
                  alt=""
                  className="p-2 w-44 h-40"/>
              </label>
            </section>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="business">نام تجاری</label>
            <input
              type="text"
              className="shadow-sm border-2 border-gray1 rounded-lg p-2 outline-none focus:border-gray2"
              name="business"
              id="business"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="manager">نام مدیریت</label>
            <input
              type="text"
              className="shadow-sm border-2 border-gray1 rounded-lg p-2 outline-none focus:border-gray2"
              name="manager"
              id="manager"
            />
          </div>
          <Link
            className={
              "p-[12px] my-4 font-bold flex items-center justify-center w-full bg-primary text-white border border-gray1 rounded-lg shadow"
            }
            to={"/organization"}
          >
            ذخیره
          </Link>
        </div>
      </form>
    </div>
  );
}
