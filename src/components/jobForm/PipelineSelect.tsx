
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import { useDebounce } from 'use-debounce';

interface Pipeline {
  id: number;
  title: string;
}

const pipelines: Pipeline[] = [
  { id: 2421, title: 'پیشفرض' },
  { id: 2421, title: 'Pipeline 2' },
  { id: 2421, title: 'Pipeline 3' },
];

export function PipelineSelect({ labelHidden = true }: { labelHidden?: boolean }) {
  const [value, setValue] = useState('');
  const [debouncedValue] = useDebounce(value, 350);

  const [field, meta] = useField<number>('pipelineId');
  const { setFieldValue } = useFormikContext<{ pipelineId: number }>();

  const selected = field.value;

  const options = useMemo(() => {
    return pipelines
      .filter((pipeline) =>
        pipeline.title.toLowerCase().includes(debouncedValue.toLowerCase())
      )
      .map(({ id, title }) => ({ value: id.toString(), label: title }));
  }, [debouncedValue]);

  useEffect(() => {
    const selectedPipeline = pipelines.find((pipeline) => pipeline.id === selected);
    if (selectedPipeline) {
      setValue(selectedPipeline.title);
    }
  }, [selected]);

  const handleOnValueChange = useCallback(
    (val: string) => {
      setValue(val);
      setFieldValue('pipelineId', 0);
    },
    [setFieldValue]
  );

  const handleUpdateSelection = useCallback(
    (selectedValue: string) => {
      const item = options.find((o) => o.value === selectedValue);
      if (item) {
        setValue(item.label);
        setFieldValue('pipelineId', parseInt(item.value));
      }
    },
    [options, setFieldValue]
  );

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => handleOnValueChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2"
        placeholder="Select Pipeline"
        aria-label="Pipeline"
      />
      {options.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleUpdateSelection(option.value)}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
