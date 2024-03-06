import React from "react";
import { Gender } from "../../graphql/generated/graphql";

const genderOptions = [
  { value: Gender.Male, label: "مرد" },
  { value: Gender.Female, label: "زن" },
  { value: Gender.Other, label: "نامشخص" },
];

interface GenderComponentProps {
  selectedGender: Gender | null;
  setSelectedGender: React.Dispatch<React.SetStateAction<Gender | null>>;
}

const GenderComponent: React.FC<GenderComponentProps> = ({
  selectedGender,
  setSelectedGender,
}) => {
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value as Gender);
  };

  return (
    <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
      <h2 className="font-medium my-2 text-lg">جنسیت</h2>
      {genderOptions.map((option) => (
        <div key={option.value}>
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
