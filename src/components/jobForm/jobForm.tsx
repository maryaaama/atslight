// JobForm.tsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RangeSlider from "../rangeSlider/rangeSlider";
import AddressComponent from "../jobFields/address";
import GenderComponent from "../jobFields/gender";
import FieldComponent from "../jobFields/fields";
import Education from "../jobFields/education";
import { EntryForm } from "../jobFields/entryForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Gender,
  JobEducation,
  JobField,
  useUpdateJobMutation,
  Language,
  useCreateJobMutation,
  CreateJobInput,
  JobStatus,
  JobFieldsJobIdFkeyInverseInput
} from "../../graphql/generated/graphql";
interface FormValues {
  title: string;
  description: string;
  field: string[];
  gender: Gender | null;
  ageRange: [number, number],
  education: JobEducation | null;
  experience: string;
  knowledge: string;
  skill: string;
  competency: string;
  tag: string;
  address: string;
  city: string;
  country: undefined;
  isRemote: false;
  pipelineId: undefined;
  state: undefined;
  status: JobStatus;
  languages: string[];
}

//import { JobData } from "../jobCard/JobCard";

const JobForm: React.FC = () => {
  const [createJobMutation, { data, loading, error }] = useCreateJobMutation();
  const navigate = useNavigate();
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [gender, setGender] = useState<Gender | null>(null);
  const [ageRange, setAgeRange] = useState({ minAge: 18, maxAge: 65 });
  const [education, setEducation] = useState<JobEducation | null>(null);
  const [titleError, setTitleError] = useState("");
  const [fieldsToShow, setFieldsToShow] = useState<JobField[]>([]);
  const [updateJob] = useUpdateJobMutation({});


  const initialValues: FormValues = {
    title: '',
    description: '',
    field: [],
    gender: '' as Gender | null,
    ageRange: [25, 75] as [number, number],
    education: null as JobEducation | null,
    experience: '',
    knowledge: '',
    skill: '',
    competency: '',
    tag: '',
    address: '',
    city: '',
    country: undefined,
    isRemote: false,
    pipelineId: undefined,
    state: undefined,
    status: 'Draft' as JobStatus,
    languages: [],
  };
  // console.log('JobForm')



  /*const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      field: [],
      gender: '' as Gender | null,
      ageRange: [25, 75] as [number, number],
      education: null as JobEducation | null,
      experience: '',
      knowledge: '',
      skill: '',
      competency: '',
      tag: '',
      address: '',
      city: '',
      country: undefined,
      isRemote: false,
      pipelineId: undefined,
      state: undefined,
      status: 'DRAFT' as JobStatus,
      languages: [],
    },
    onSubmit: async (values) => {
       try {
         const jobInput: CreateJobInput = {
           clientMutationId: "some-unique-id", // Optional
           job: {
             address: values.address,
             city: values.city,
             country: values.country,
             isRemote: values.isRemote,
             pipelineId: values.pipelineId,
             state: values.state,
             status: values.status,
             languages: values.languages,
             position: 1, // Required but not included in the formik values; you should adjust accordingly
             title: values.title,
             description: values.description,
             education: values.education,
             competencies: values.competency ? [values.competency] : [],
             tags: values.tag ? [values.tag] : [],
             fields: {
               
               fieldName: values.field.join(', '), // Adjust if necessary
             } as JobFieldsJobIdFkeyInverseInput,
             genders: values.gender ? [values.gender] : [],
             // Include other fields as needed, based on your schema
           },
         };
 
         const response = await createJobMutation({
           variables: { input: jobInput },
         });
 
         if (response.data?.createJob?.job) {
           navigate("/jobs");
         }
       } catch (error) {
         console.error("Failed to create job:", error);
       }

      if (loading) return "Loading...";
      if (error) return <pre>{error.message}</pre>
    },

  });*/




  /* useEffect(() => {
   if (jobLoc) {
  setTitle(jobLoc.translations.nodes[0]?.title || "");
   setDescription(jobLoc.translations.nodes[0]?.description || "");
  setGender(jobLoc.gender as Gender);
   setSelectedEducation(jobLoc.education as JobEducation);
  setAgeRange({ minAge: jobLoc.minAge || 18, maxAge: jobLoc.maxAge || 65 });
  }
  }, [jobLoc]);


  const handleEducationChange = (newEducation: JobEducation | null) => {
    formik.setFieldValue('education', newEducation);
  };
  
  const handleAgeRangeChange = (newRange: [number, number]) => {
    formik.setFieldValue("ageRange", newRange);
  };
  const handleGenderChange = (gender: Gender) => {
    formik.setFieldValue("gender", gender);
    setGender(gender);
  };
  const validateTitle = () => {
    if (!title.trim()) {
      setTitleError("Title is required.");
      return false;
    }
    setTitleError("");
    return true;
  };
  const setSelectedEducationWrapper: React.Dispatch<React.SetStateAction<JobEducation | null>> = (value) => {
    if (typeof value === 'function') {
      const getValue = value as (prevState: JobEducation | null) => JobEducation | null;
      handleEducationChange(getValue(props.values.education));
    } else {
      handleEducationChange(value);
    }
  };
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isTitleValid = validateTitle();
    console.log(e);
    if (!isTitleValid) return;

    const gendersArray = gender ? [gender] : null;
    const translationsInput = {
      create: jobLoc.translations.nodes.map((translation) => ({
        lang: translation.lang,
        title: translation.title,
        description: translation.description,
      })),
    };
 
    try {
      await updateJob({
        variables: {
          input: {
            id:  "default-id",
            patch: {
              translations: translationsInput,
              genders: gendersArray,
              education: selectedEducation,
              minAgeCondition: ageRange.minAge,
              maxAgeCondition: ageRange.maxAge,
            },
          },
        },
      });
      navigate("/jobs");
    } catch (error) {
      console.error("Failed to update job:", error);
    }
  };

  const fieldsToShow: JobField[] = [
    JobField.Gender,
    JobField.MilitaryStatus,
    JobField.Resume,
    JobField.Address,
    JobField.Birthday,
    JobField.CoverLetter,
  ];*/
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

  const handleGenderChange = (
    setFieldValue: (field: string, value: any) => void,
    gender: Gender
  ) => {
    setFieldValue('gender', gender);
  };

  return (
    <>
      <Formik

        initialValues={initialValues}

        onSubmit={async (_, actions) => {
          try {
            const response = await createJobMutation({
              variables: {
                input: {
                  job: {
                    address: '',
                    city: 'Tehran',
                    languages: [],
                    position: 1,
                    status: JobStatus.Draft,

                  },
                  clientMutationId: 'unique-id',
                },
              },
            });

            console.log('Response:', response);

            if (response.data) {
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
              <label htmlFor="title">عنوان</label>
              <input
                className="w-full border mx-auto mt-1 rounded-sm p-1"
                id="title"
                name="title"
                type="text"
                onChange={props.handleChange}
                value={props.values.title}
              />
              {titleError && <div className="text-red-500">{titleError}</div>}
              <label htmlFor="description">توضیحات</label>
              <textarea
                className="w-full border mx-auto mt-1 rounded-sm p-1"
                id="description"
                name="description"
                onChange={props.handleChange}
                value={props.values.description}
              />
            </div>
            <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
              <h2 className="my-3 font-medium text-lg">شرایط احراز</h2>
              <div className="my-3">
                <label className="" htmlFor="title">
                  رشته
                </label>
                <input
                  className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm p-0.5"
                  type="text"
                  id="field"
                  onChange={props.handleChange}
                  value={props.values.field}
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
                  id="Orientation"
                  name="Orientation"
                  onChange={props.handleChange}

                />
              </div>
            </div>

            <div className="border shadow px-2 m-2 py-3 bg-slate-50 rounded-lg">
              <label className="my-auto" htmlFor="age">
                بازه سنی
              </label>
              <RangeSlider
                className="w-full mt-3 h-9"
                defaultValue={props.values.ageRange}
                onChange={(newRange) =>
                  handleAgeRangeChange(props.setFieldValue, newRange)
                }
              />
            </div>
            <GenderComponent
              gender={props.values.gender}
              onChange={(gender) =>
                handleGenderChange(props.setFieldValue, gender)
              }
            />
            <div className="border shadow m-2 px-2 py-3 bg-slate-50 rounded-lg">
              <label className="" htmlFor="experience">
                سابقه کاری
              </label>
              <input
                className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
                type="number"
                id="experience"
                name="experience"
                onChange={props.handleChange}
                value={props.values.experience}
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
                  value={props.values.knowledge}
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
                  id="skill"
                  name="skill"
                  onChange={props.handleChange}
                  value={props.values.skill}
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
                  id="competency"
                  name="competency"
                  onChange={props.handleChange}
                  value={props.values.competency}
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
                id="tag"
                name="tag"
                placeholder="باریستا, صندوقدار, آشپز"
                onChange={props.handleChange}
                value={props.values.tag}
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
