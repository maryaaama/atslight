import Image from "next/image";
import Logo from "../../../public/image/logo.png";
import { useRouter } from "next/navigation";

export default function OrganizationChart() {
  const router = useRouter();
  return (
    <div className="relative z-0 px-2 m-auto lg:max-w-[30%] max-w-[90%] my-10">
      <Image src={Logo} alt="Logo" className="h-40 w-auto m-auto" priority />
      <h1 className="text-center font-bold text-xl mt-2">
        استودیو منابع انسانی کارجو+
      </h1>
      <label
        htmlFor="name"
        className="font-mono text-sm text-gray2
    bg-white relative px-1 top-3 -left-2 w-auto p-2.5 "
      >
        مدیریت:
      </label>
      <input
        type="text"
        name="name"
        value="فراز کریمی"
        id="name"
        className="h-11 text-center text-10  border-2  border-gray2 focus:border-gray2 text-sm rounded-lg block w-full p-6  "
      />
      <div className=" h-14 w-[0.1rem] bg-gray2 m-auto"></div>
      <button
        className="w-full border-2 border-gray2 rounded-lg p-6 h-11
       text-gray2 flex items-center justify-center hover:bg-opacity-80"
        onClick={() => router.push("/candidates")}
      >
        مدیریت فروش
      </button>
      <div className="h-14 w-[0.1rem] bg-gray2 m-auto"></div>
      <button className="w-full border-2 border-gray2 rounded-lg p-6 h-11 bg-opabg-opacity-80 text-gray2 flex items-center justify-center">
        افزودن شغل جدید +
      </button>
    </div>
  );
}
