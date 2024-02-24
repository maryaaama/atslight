import RangeSlider from "../rangeSlider/rangeSlider";
import AddressComponent from "../jobFields/address";
import GenderComponent from "../jobFields/gender";
import FieldComponent from "../jobFields/fields";
import {
  JobField,
  Language,
  useUpdateJobAlternativeMutation,
} from "../../graphql/generated/graphql";
import { EntryForm } from "../jobFields/entryForm";
import { useState, useEffect } from "react";
import { JobData } from "../jobCard/JobCard";
import Education from "../jobFields/education";

interface JobFormProps {
  job: JobData;
}

const JobForm: React.FC<JobFormProps> = ({ job }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [education, setEducation] = useState("");
  // const [isRemote, setIsRemote] = useState(false);
  // const [country, setCountry] = useState("");
  const [updateJob] = useUpdateJobAlternativeMutation();

  useEffect(() => {
    if (job && job.translations.nodes.length > 0) {
      const firstTranslation = job.translations.nodes[0];
      setTitle(firstTranslation.title || "");
      setDescription(firstTranslation?.description || "");
      // Log the description safely
      console.log(firstTranslation?.description || "");
      // setEducation(job.education);
      // setIsRemote(job.isRemote);
      // setCountry(job.country);
    }
  }, [job]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await updateJob({
        variables: {
          input: {
            id: job.id,
            patch: {
              departmentId: undefined,
              genders: undefined,
              gradeConditions: undefined,
              jobQuestionnairesIds: undefined,
              maxAgeCondition: undefined,
              minAgeCondition: undefined,
              ownerIds: undefined,
              translations: job.translations.nodes.map((node) => ({
                lang: node.lang as Language,
                title: node.title,
                description: node.description || "",
              })),
              workExperienceCondition: undefined,
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const fieldsToShow: JobField[] = [
    JobField.Gender,
    JobField.MilitaryStatus,
    JobField.Resume,
    JobField.Address,
    JobField.Birthday,
    JobField.CoverLetter,
  ];

  return (
    <>
      <h1 className="text-xl mx-4 my-2 text-right">موقعیت شغلی جدید</h1>
      <form className="m-1 p-1 text-right" onSubmit={handleSubmit}>
        <div className="border shadow-sm m-2 p-2 bg-slate-50 rounded-lg">
          <label htmlFor="title">عنوان</label>
          <input
            className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm p-0.5"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">توضیحات</label>
          <textarea
            className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm p-0.5"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            {description}
          </textarea>
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
              id="title"
            />
          </div>
          <Education />
          <div className="my-3">
            <label className="" htmlFor="Orientation">
              گرایش
            </label>
            <input
              className="w-[100%] border shadow-sm mx-auto mt-1 rounded-sm p-0.5"
              type="text"
              id="Orientation"
            />
          </div>
        </div>

        <div className="border shadow px-2 m-2 py-3 bg-slate-50 rounded-lg">
          <label className="my-auto" htmlFor="age">
            بازه سنی
          </label>
          <RangeSlider className="w-full mt-3 h-9 " defaultValue={[25, 75]} />
        </div>
        <GenderComponent />
        <div className="border shadow m-2 px-2 py-3 bg-slate-50 rounded-lg">
          <label className="" htmlFor="experience">
            سابقه کاری
          </label>
          <input
            className="w-[100%] border shadow-sm m-auto mt-1 rounded-sm p-0.5"
            type="number"
            id="experience"
            name=""
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
              name=""
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
              name=""
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
              name=""
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
            name=""
            placeholder="باریستا, صندوقدار, آشپز"
          />
        </div>
        <div className="border shadow m-2 p-2 bg-slate-50 rounded-lg">
          <AddressComponent />
        </div>
        <FieldComponent fieldKeys={fieldsToShow} />
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
            onSubmit={handleSubmit}
            type="submit"
            className="w-[46%] bg-primary text-white text-lg font-medium py-2 border shadow m-auto rounded-lg"
          >
            ذخیره
          </button>
          <button className="w-[46%] bg-gray1 text-white text-lg font-medium py-2 border shadow m-auto rounded-lg">
            لغو
          </button>
        </div>
      </form>
    </>
  );
};
export default JobForm;
