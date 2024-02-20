import React, { useState } from "react";
import { genderOptions } from "../../options";

const GenderComponent: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
      <h2 className="font-medium my-2 text-lg">جنسیت</h2>
      {genderOptions.map((option, index) => (
        <div key={index}>
          <input
            className="mx-1 my-1"
            type="radio"
            id={option.value}
            value={option.value}
            name="gender"
            checked={selectedGender === option.value}
            onChange={handleGenderChange}
          />
          <label className="ml-4" htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default GenderComponent;
