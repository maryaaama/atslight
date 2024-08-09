import React from "react";
import { JobField } from "../../graphql/generated/graphql";
import { jobFieldTypes } from "../../options";

interface FieldComponentProps {
  fieldKeys: JobField[];
  setFieldValue: (field: string, value: any) => void;
}

const FieldComponent: React.FC<FieldComponentProps> = ({ fieldKeys, setFieldValue }) => {
  // Assuming 'fields' represents the selected fields that should be passed back to Formik
  React.useEffect(() => {
    // Update Formik value when fieldKeys change
    setFieldValue("field", fieldKeys);
  }, [fieldKeys, setFieldValue]);

  return (
    <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
      <h2 className="font-medium text-lg my-2">فیلد های ورودی</h2>
      {fieldKeys.map((key, index) => {
        const field = jobFieldTypes[key];
        if (!field) {
          return <div key={index}>اطلاعاتی وارد نشده {key}</div>;
        }
        const { Icon, title } = field;
        return (
          <div key={index} className="flex mx-1 my-1 items-center">
            {Icon && <Icon className="w-6 h-6 my-0.5" aria-label={title} />}
            <div className="mx-2 text-slate-700">{title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FieldComponent;