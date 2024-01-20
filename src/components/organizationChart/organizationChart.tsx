import { useState } from "react";
import Logo from "../../image/logo.png";
import { useNavigate } from 'react-router-dom';
import { useCurrentSessionQuery } from '../../graphql/generated/graphql';
import logo from "../../image/logo.png";
export default function OrganizationChart() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [manager, setManager] = useState(user);
  

  const { data, error } = useCurrentSessionQuery();

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const currentUser = data?.currentUser?.translations.nodes[0].fullname;
  const currentCompany = data?.currentCompany?.translations.nodes[0].name;
  const companyLogo = data?.currentCompany?.logoUrl;

  const handleManagerChange = (event: { target: { value: string; }; }) => {
    const newValue = event.target.value;
    setManager(newValue);
    setUser(newValue);
  };

  return (
    <div className="relative z-0 px-2 m-auto lg:max-w-[30%] max-w-[90%] my-10">
      <img src={companyLogo || Logo} alt="Logo" className="h-40 w-auto m-auto" />
      <h1 className="text-center font-bold text-xl mt-2">
        {currentCompany}
      </h1>

      <div className="relative mt-8 bg-white rounded-lg shadow-md">
        <label htmlFor="name" className="mb-6 pr-2 text-base h-1/2">
          مدیریت
        </label>
        <input
          onChange={handleManagerChange}
          type="text"
          name={currentUser||""}
          value={currentUser||logo}
          id="name"
          disabled={user !== ""}
          className="w-full px-4 peer outline-none font-medium border-2 border-gray2 rounded-lg py-3 text-center text-base text-gray-700"
        />
      </div>
      <div className="h-14 w-[0.1rem] bg-gray-200 m-auto"></div>
      <button
        className="w-full border-2 border-gray2 rounded-lg p-6 h-11
          text-gray2 flex items-center justify-center hover:bg-opacity-80"
        onClick={() => navigate("/candidates")}
      >
        مدیریت فروش
      </button>
      <div className="h-14 w-[0.1rem] bg-gray-200 m-auto"></div>
      <button
        onClick={() => navigate("/jobs")}
        className="w-full border-2 border-gray2 rounded-lg p-6 h-11 bg-opacity-80 text-gray2 flex items-center justify-center"
      >
        افزودن شغل جدید +
      </button>
    </div>
  );
}
