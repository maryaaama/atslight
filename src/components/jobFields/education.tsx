import React from "react";
import { JobEducation } from "../../graphql/generated/graphql";

interface EducationProps {
  selectedEducation: JobEducation | null;
  setSelectedEducation: React.Dispatch<
    React.SetStateAction<JobEducation | null>
  >;
}

const educationLabels: { [key in JobEducation]: string } = {
  [JobEducation.Diploma]: "دیپلم",
  [JobEducation.Bachelor]: "لیسانس",
  [JobEducation.Master]: "فوق لیسانس",
  [JobEducation.Phd]: "دکترا",
  [JobEducation.Associate]: "فوق دکترا",
};

const Education: React.FC<EducationProps> = ({
  selectedEducation,
  setSelectedEducation,
}) => {
  const handleEducationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    if (Object.values(JobEducation).includes(value as JobEducation)) {
      setSelectedEducation(value as JobEducation);
    } else {
      setSelectedEducation(null);
    }
  };

  return (
    <div>
      {Object.entries(educationLabels).map(([key, label]) => (
        <div key={key}>
          <input
            type="radio"
            id={key}
            name="education"
            value={key}
            checked={selectedEducation === key}
            onChange={handleEducationChange}
          />
          <label htmlFor={key}>{label}</label>
        </div>
      ))}
    </div>
  );
};

export default Education;
