import React from "react";
import { Gender } from "../../graphql/generated/graphql";

const genderOptions = [
  { value: Gender.Male, label: "مرد" },
  { value: Gender.Female, label: "زن" },
  { value: Gender.Other, label: "نامشخص" },
];

interface GenderComponentProps {
  gender: Gender[] | null; // به روز شده برای پشتیبانی از آرایه
  onChange: (gender: Gender[]) => void; // تابع تغییر برای آرایه
}

const GenderComponent: React.FC<GenderComponentProps> = ({
  gender,
  onChange,
}) => {
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as Gender;
    if (gender?.includes(value)) {
      onChange(gender.filter((g) => g !== value)); // حذف جنسیت از آرایه
    } else {
      onChange([...(gender || []), value]); // اضافه کردن جنسیت به آرایه
    }
  };

  return (
    <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
      <h2 className="font-medium my-2 text-lg">جنسیت</h2>
      {genderOptions.map((option) => (
        <div key={option.value}>
          <input
            className="mx-1 my-1"
            type="checkbox" // تغییر از radio به checkbox برای پشتیبانی از انتخاب چندگانه
            id={option.value}
            value={option.value}
            name="gender"
            checked={gender?.includes(option.value)}
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
