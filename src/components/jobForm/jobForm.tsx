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
import { useLang } from '../../contexts/languageContext';
import { getTranslation } from '../../utils/translate';
import { prepareLanguagesForFormik } from '../../utils/languages';
import { safeParseInt } from '../../utils/safeParseInt';
import { PipelineSelect } from './PipelineSelect';

const translations = prepareLanguagesForFormik({
  title: '',
  description: '',
  requirements: ''
}).map((translation) => ({
  create: [{
    lang: translation.lang || [Language.Fa, Language.En],
    title: translation.title || 'Default Title',
    description: translation.description || 'Default Description',
    requirements: translation.requirements || 'Default Requirements'
  }]
})) as JobTranslationsJobIdFkeyInverseInput[];


const JobForm: React.FC = () => {
  const [createJobMutation, { loading, error }] = useCreateJobMutation();
  const [fieldsToShow, setFieldsToShow] = useState<JobField[]>([]);
  const lang = useLang();
  const selectedTranslation = translations.length > 0 ? translations[0] : null;



  const initialValues: FormValues = {
    status: JobStatus.Draft,
    departmentId: null,
    isRemote: false,
    address: '',
    country: null,
    state: null,
    city: 'Tehran',
    education: null,
    position: 0,
    pipelineId: 2254,
    languages: [Language.Fa, Language.En],
    translations,
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
                    city: values.city || null,
                    languages: values.languages,
                    position: values.position,
                    status: values.status,
                    translations: {
                      create: [
                        {
                          lang: Language.Fa,
                          title: 'Default Title',
                          description: 'Default Description',
                          requirements: 'Default Requirements',
                        }
                      ],
                    },
                    pipelineId: values.pipelineId, // استفاده از مقدار pipelineId از فرم
                    departmentId: values.departmentId || null, // اضافه کردن فیلد departmentId
                    competencies: values.competencies || [],
                    isRemote: values.isRemote, // اضافه کردن فیلد isRemote
                    address: values.address, // اضافه کردن فیلد address
                    country: values.country, // اضافه کردن فیلد country
                    state: values.state, // اضافه کردن فیلد state
                    education: values.education, // اضافه کردن فیلد education
                    tags: values.tags, // اضافه کردن فیلد tags
                    owners: null, // اضافه کردن فیلد owners
                    fields: null, // اضافه کردن فیلد fields
                    jobQuestionnaires: null, // اضافه کردن فیلد jobQuestionnaires
                    workExperienceCondition: values.workExperienceCondition, // اضافه کردن فیلد workExperienceCondition
                    maxAgeCondition: values.ageCondition ? values.ageCondition[1] : null, // بیشترین سن
                    minAgeCondition: values.ageCondition ? values.ageCondition[0] : null, // اضافه کردن فیلد ageCondition
                    gradeConditions: values.gradeConditions, // اضافه کردن فیلد gradeConditions
                    knowledges: values.knowledges, // اضافه کردن فیلد knowledges
                    skills: values.skills, // اضافه کردن فیلد skills
                    genders: values.genders, // اضافه کردن فیلد genders
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
            if (e instanceof Error) {
              console.error('GraphQL Error:', e.message);
              console.error('Full error:', e);
              alert('Network Error: Could not connect to the API. Please try again.');
            } else {
              console.error('An unknown error occurred:', e);
              alert('An unknown error occurred. Please try again.');
            }
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
              <PipelineSelect />
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
