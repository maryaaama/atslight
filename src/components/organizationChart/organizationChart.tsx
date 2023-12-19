import { useState } from "react";
import Logo from "../../image/logo.png";
import { useNavigate } from 'react-router-dom';

export default function OrganizationChart() {
  const navigate = useNavigate();
const[manager,setManager]=useState("")

  return (
    <div className="relative z-0 px-2 m-auto lg:max-w-[30%] max-w-[90%] my-10">
      <img src={Logo} alt="Logo" className="h-40 w-auto m-auto" />
      <h1 className="text-center font-bold text-xl mt-2">
        استودیو منابع انسانی کارجو+
      </h1>

        <div className="relative group mt-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
         <label
           htmlFor="name"
           className={
            manager?
            "absolute -mt-6 pr-2 text-base h-1/2":
           "transform transition-all absolute text-gray2 top-0 right-2 h-full flex items-center pl-2 text-sm group-focus-within:text-base peer-valid:text-base group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-black"}>
           مدیریت
         </label>
         <input
           onChange={(event)=>setManager(event.target.value)}
           type="text"
           name="name"
           value={manager}
           id="name"
           className="w-full h-11  px-4 text-sm peer outline-none  border-2 border-gray2 rounded-lg p-6"/>
        </div>
          <div className=" h-14 w-[0.1rem] bg-gray-200 m-auto"></div>
          {/* <button
            className="w-full border-2 border-gray2 rounded-lg p-6 h-11
          text-gray2 flex items-center justify-center hover:bg-opacity-80"
            onClick={() => navigate("/candidates")}
          >
            مدیریت فروش
          </button> */}
          <button 
            onClick={() => navigate("/jobs")}
          className="w-full border-2 border-gray2 rounded-lg p-6 h-11 bg-opabg-opacity-80 text-gray2 flex items-center justify-center">
            افزودن شغل جدید +
          </button>
        </div>
      );
    }
