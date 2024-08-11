// JobForm.tsx
import React, { useState } from "react";
import RangeSlider from "../rangeSlider/rangeSlider";
import AddressComponent from "../jobFields/address";
import GenderComponent from "../jobFields/gender";
import FieldComponent from "../jobFields/fields";
import Education from "../jobFields/education";
import { EntryForm } from "../jobFields/entryForm";
import { Formik, Field } from "formik";
import {
  Gender,
  JobEducation,
  JobField,
  Language,
  useCreateJobMutation,
  JobStatus,
  JobTranslationsJobIdFkeyInverseInput,
} from "../../graphql/generated/graphql";
import { FormValues } from './types';

const JobForm: React.FC = () => {
  const [createJobMutation, { loading, error }] = useCreateJobMutation();
  const [fieldsToShow, setFieldsToShow] = useState<JobField[]>([]);
  const initialValues: FormValues = {
    status: JobStatus.Draft,
    departmentId: null,
    isRemote: false,
    address: '',
    country: null,
    state: null,
    city: 'Tehran',
    education: null,
    position: 1,
    pipelineId: 2254,
    languages: [Language.Fa, Language.En],
    translations: [
      {
        create: [
          {
            lang: Language.Fa,
            title: '',
            description: '',
            requirements: ''
          }
        ]
      },
      {
        create: [
          {
            lang: Language.En,
            title: '',
            description: '',
            requirements: ''
          }
        ]
      }
    ] as JobTranslationsJobIdFkeyInverseInput[],
    tags: [],
    owners: [],
    fields: [],
    jobQuestionnaires: [],
    workExperienceCondition: null,
    ageCondition: [25, 75],
    gradeConditions: null,
    knowledges: [],
    skills: [],
    competencies: [],
    genders: null,
  };


  const handleEducationChange = (
    setFieldValue: (field: string, value: any) => void,
    newEducation: JobEducation | null
  ) => {
    setFieldValue('education', newEducation);
  };

  const setSelectedEducationWrapper = (
    setFieldValue: (field: string, value: any) => void,
    formikValues: { education: JobEducation | null },
    value: React.SetStateAction<JobEducation | null>
  ) => {
    if (typeof value === 'function') {
      const getValue = value as (prevState: JobEducation | null) => JobEducation | null;
      handleEducationChange(setFieldValue, getValue(formikValues.education));
    } else {
      handleEducationChange(setFieldValue, value);
    }
  };
  const handleAgeRangeChange = (
    setFieldValue: (field: string, value: any) => void,
    newRange: [number, number]
  ) => {
    setFieldValue('ageRange', newRange);
  };

  const handleGenderChange = (setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void, newGenders: Gender[]) => {
    setFieldValue("genders", newGenders);
  };


  return (
    <>
      <Formik

        initialValues={initialValues}

        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createJobMutation({
              variables: {
                input: {
                  job: {

                    city: values.city,
                    languages: values.languages,
                    position: values.position,
                    status: values.status,

                  },
                  clientMutationId: 'unique-id',
                },
              },
            });

            console.log('Response:', response);
            if (response && response.data) {
              alert('Connection to API is successful!');
            } else {
              alert('API connection failed!');
            }
          } catch (e) {
            console.error('Error connecting to API:', e);
            alert('API connection failed!');
          } finally {
            actions.setSubmitting(false);
          }
        }}

      >
        {props => (
          <form className="m-1 p-1 text-right" onSubmit={props.handleSubmit}>
            <h1 className="text-xl mx-4 my-2 text-right">موقعیت شغلی جدید</h1>

            <div className="border shadow-sm m-2 p-2 bg-slate-50 rounded-lg">
              <Field
                type="text"
                name="title"
                className="shadow-sm border-2 border-gray1 rounded-lg p-2 outline-none focus:border-gray2"
                onChange={props.handleChange}
                value={props.values.translations}
              />
            </div>
            <label htmlFor="description">توضیحات</label>
            <Field
              className="w-full border mx-auto mt-1 rounded-sm p-1"
              id="address"
              name="address"
              onChange={props.handleChange}
              value={props.values.address}
            />

            <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
              <h2 className="my-3 font-medium text-lg">شرایط احراز</h2>
              <div className="my-3">
                <label className="" htmlFor="title">
                  رشته
                </label>
                <Field
                  className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm p-0.5"
                  type="text"
                  id="field"
                  name="fields"
                  onChange={props.handleChange}
                  value={props.values.fields}
                />
              </div>
              <Education
                selectedEducation={props.values.education}
                setSelectedEducation={(value) =>
                  setSelectedEducationWrapper(props.setFieldValue, props.values, value)
                }
              />

              <div className="my-3">
                <label className="" htmlFor="Orientation">
                  گرایش
                </label>
                <input
                  className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm p-0.5"
                  type="text"
                  id="knowledges"
                  name="knowledges"
                  onChange={props.handleChange}
                  value={props.values.knowledges}
                />
              </div>
            </div>

            <div className="border shadow px-2 m-2 py-3 bg-slate-50 rounded-lg">
              <label className="my-auto" htmlFor="age">
                بازه سنی
              </label>

              <RangeSlider
                className="w-full mt-3 h-9"
                defaultValue={props.values.ageCondition || [25, 75]} // مقدار پیش‌فرض
                onChange={(newAgeCondition) =>
                  handleAgeRangeChange(props.setFieldValue, newAgeCondition as [number, number])
                }
              />
            </div>

            <GenderComponent
              gender={(props.values.genders || []).filter(gender => gender !== null) as Gender[]}
              onChange={(newGenders) => handleGenderChange(props.setFieldValue, newGenders)}
            />

            <div className="border shadow m-2 px-2 py-3 bg-slate-50 rounded-lg">
              <label className="" htmlFor="experience">
                سابقه کاری
              </label>
              <Field
                className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
                type="number"
                id="education"
                name="education"
                onChange={props.handleChange}
                value={props.values.education}
              />
            </div>
            <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
              <h2 className="font-medium my-2 text-lg">تخصص</h2>
              <div>
                <label className="" htmlFor="knowledge">
                  دانش
                </label>
                <input
                  className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
                  type="text"
                  id="knowledge"
                  name="knowledge"
                  onChange={props.handleChange}
                  value={props.values.knowledges}
                />
              </div>
              <br />
              <div>
                <label className="" htmlFor="skill">
                  مهارت
                </label>
                <input
                  className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
                  type="text"
                  id="skills"
                  name="skills"
                  onChange={props.handleChange}
                  value={props.values.skills}
                />
              </div>
              <br />
              <div>
                <label className="" htmlFor="competency">
                  شایستگی
                </label>
                <input
                  className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
                  type="text"
                  id="competencies"
                  name="competencies"
                  onChange={props.handleChange}
                  value={props.values.competencies}
                />
              </div>
            </div>
            <div className="px-2 py-3 m-2 border shadow bg-slate-50 rounded-lg">
              <label className="" htmlFor="tag">
                برچسب ها
              </label>
              <input
                className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
                type="text"
                id="tags"
                name="tags"
                placeholder="باریستا, صندوقدار, آشپز"
                onChange={props.handleChange}
                value={props.values.tags}
              />
            </div>
            <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
              <AddressComponent />
            </div>
            <FieldComponent
              fieldKeys={fieldsToShow}
              setFieldValue={props.setFieldValue}
            />
            <div className="px-2 py-3 m-2 border shadow bg-slate-50 rounded-lg">
              <h1 className="font-medium text-lg">فرم های ورودی</h1>
              <EntryForm />
            </div>
            <div className="px-2 py-3 m-2 border shadow bg-slate-50 rounded-lg">
              <label className="font-medium my-2 text-lg" htmlFor="step">
                مراحل استخدام
              </label>
              <input
                className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5 text-slate-700"
                type="text"
                id="step"
                value={"پیش فرض"}
                name=""
                disabled
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="w-[46%] bg-primary text-white text-lg font-medium py-2 border shadow m-auto rounded-lg"
              >
                ذخیره
              </button>
              <button className="w-[46%] bg-gray1 text-white text-lg font-medium py-2 border shadow m-auto rounded-lg">
                لغو
              </button>
            </div>

            {loading && <p>Submitting...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
          </form>
        )}


      </Formik>
    </>
  );
};

export default JobForm;
