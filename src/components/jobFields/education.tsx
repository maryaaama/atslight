import React, { useState } from "react";
import { JobEducation } from "../../graphql/generated/graphql";

const educationLabels = {
  [JobEducation.Diploma]: "دیپلم",
  [JobEducation.Master]: "لیسانس",
  [JobEducation.Bachelor]: "فوق لیسانس",
  [JobEducation.Phd]: "دکترا",
  [JobEducation.Associate]: "فوق دکترا",
};

const Education = () => {
  const [selectedEducations, setSelectedEducations] = useState<JobEducation[]>(
    []
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const educationValue = value as JobEducation;

    setSelectedEducations((prev) =>
      checked
        ? [...prev, educationValue]
        : prev.filter((eduValue) => eduValue !== educationValue)
    );
  };

  return (
    <div className="mt-2 p-2  bg-white border rounded-lg">
      <div className="font-medium mb-2">مقطع</div>
      {Object.values(JobEducation).map((value) => (
        <div key={value}>
          <input
            className="mx-2 my-2"
            type="checkbox"
            id={value}
            value={value}
            checked={selectedEducations.includes(value)}
            onChange={handleCheckboxChange}
          />
          <label className="mx-1 text-sm" htmlFor={value}>
            {educationLabels[value]}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Education;
