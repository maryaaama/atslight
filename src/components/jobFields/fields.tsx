// FieldComponent.tsx
import React from "react";
import { jobFieldTypes } from "../../options";
import { JobField } from "../../graphql/generated/graphql";

interface FieldComponentProps {
  fieldKeys: JobField[];
}

const FieldComponent: React.FC<FieldComponentProps> = ({ fieldKeys }) => {
  return (
    <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
      <h2 className="font-medium text-lg my-2">فیلد های ورودی</h2>
      {fieldKeys.map((key, index) => {
        const field = jobFieldTypes[key];
        if (!field) {
          return <div key={index}>Unknown Field: {key}</div>;
        }
        const { icon: Icon, title } = field;
        return (
          <div key={index} className="flex mx-1 my-1 items-center">
            <Icon className="w-6 h-6 my-0.5" aria-label={title} />
            <div className="mx-2">{title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FieldComponent;
