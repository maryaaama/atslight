import React from "react";

export const Fields = (props: { value: string }) => {
  return <li className="my-0.5 mx-2 text-slate-700">{props.value}</li>;
};

const EntryForm: React.FC = () => {
  const options = [
    { id: 1, value: "زمینه فعالیت" },
    { id: 2, value: "مدرک تحصیلی" },
    { id: 3, value: "رشته تحصیلی" },
    { id: 4, value: "سابقه کار" },
  ];
  return (
    <div className="mt-2 py-2 bg-white border rounded-lg">
      <h1 className="text-base mx-2">کافه و رستوران</h1>
      <ul className="list-disc list-inside mt-2">
        {options.map((option) => (
          <Fields key={option.id} value={option.value} />
        ))}
      </ul>
    </div>
  );
};

export { EntryForm };
