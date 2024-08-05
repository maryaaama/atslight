// JobForm.tsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import RangeSlider from "../rangeSlider/rangeSlider";
import AddressComponent from "../jobFields/address";
import GenderComponent from "../jobFields/gender";
import FieldComponent from "../jobFields/fields";
import Education from "../jobFields/education";
import { EntryForm } from "../jobFields/entryForm";
import {
  Gender,
  JobEducation,
  JobField,
  useUpdateJobMutation,
} from "../../graphql/generated/graphql";
import { JobData } from "../jobCard/JobCard";

const JobForm: React.FC = () => {
  console.log('JobForm')
  // const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const jobLoc = location.state?.job as JobData;
  const [title, setTitle] = useState(jobLoc?.translations.nodes[0]?.title || "");
  const [description, setDescription] = useState(
    jobLoc?.translations.nodes[0]?.description || ""
  );
  const [gender, setGender] = useState<Gender | null>(
    (jobLoc?.gender as Gender) || null
  );
  const [ageRange, setAgeRange] = useState({
    minAge: jobLoc?.minAge || 18,
    maxAge: jobLoc?.maxAge || 65,
  });
  const [selectedEducation, setSelectedEducation] =
    useState<JobEducation | null>((jobLoc?.education as JobEducation) || null);
  const [titleError, setTitleError] = useState("");
  const [updateJob] = useUpdateJobMutation({});

  useEffect(() => {
    if (jobLoc) {
      setTitle(jobLoc.translations.nodes[0]?.title || "");
      setDescription(jobLoc.translations.nodes[0]?.description || "");
      setGender(jobLoc.gender as Gender);
      setSelectedEducation(jobLoc.education as JobEducation);
      setAgeRange({ minAge: jobLoc.minAge || 18, maxAge: jobLoc.maxAge || 65 });
    }
  }, [jobLoc]);

  const handleAgeRangeChange = (newRange: [number, number]) => {
    setAgeRange({ minAge: newRange[0], maxAge: newRange[1] });
  };

  const validateTitle = () => {
    if (!title.trim()) {
      setTitleError("Title is required.");
      return false;
    }
    setTitleError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isTitleValid = validateTitle();

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
            id: jobLoc.id,
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
  ];

  return (
    <>
      <h1 className="text-xl mx-4 my-2 text-right">موقعیت شغلی جدید</h1>
      <form className="m-1 p-1 text-right" onSubmit={handleSubmit}>
        <div className="border shadow-sm m-2 p-2 bg-slate-50 rounded-lg">
          <label htmlFor="title">عنوان</label>
          <input
            className="w-full border mx-auto mt-1 rounded-sm p-1"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <div className="text-red-500">{titleError}</div>}
          <label htmlFor="description">توضیحات</label>
          <textarea
            className="w-full border mx-auto mt-1 rounded-sm p-1"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
              id="title"
            />
          </div>
          <Education
            selectedEducation={selectedEducation}
            setSelectedEducation={setSelectedEducation}
          />

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
          <RangeSlider
            className="w-full mt-3 h-9"
            defaultValue={[25, 75]}
            onChange={handleAgeRangeChange}
          />
        </div>
        <GenderComponent
          selectedGender={gender}
          setSelectedGender={setGender}
        />
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
