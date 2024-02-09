import React, { useState } from "react";
import Modal from "../../components/modal/modal";
import PersonalCardList from "../personalCardList/personalCardList";
import { useCandidateWithApplicationsQuery } from "../../graphql/generated/graphql";

interface PersonalCardProps {
  photo: string;
  name: string;
  job: string;
  resumeUrl?: string;
  id: number;
}

const PersonalCard: React.FC<PersonalCardProps> = ({
  photo,
  name,
  job,
  resumeUrl,
  id,
}) => {
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useCandidateWithApplicationsQuery({
    variables: { id },
  });

  const downloadResume = () => {
    if (!resumeUrl) {
      alert("کاندید مورد نظر فاقد رزومه می باشد");
      return;
    }
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", `${name}-Resume`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const questionnaires =
    data?.candidate?.questionnaires.nodes.map((questionnaire) => ({
      title: questionnaire.translations.nodes[0]?.title || "",
      questions: questionnaire.candidateQuestions.nodes.map((question) => ({
        id: question.id,
        questionValue: question.question?.translations.nodes[0]?.title || "",
        answer: question.textValue || "",
      })),
    })) || [];

  return (
    <div className="flex flex-col mx-auto">
      <div className="m-4">
        <h1 className="text-xl font-bold mx-2">{name}</h1>
        <p className="text-lg font-normal text-gray2 mx-2 my-1">{job}</p>
      </div>

      <div className="w-full flex flex-row-2 justify-between items-center gap-10">
        <div className="w-1/2 h-32 sm:h-40 rounded-2xl shadow-md shadow-slate-200 mx-6 border">
          <img
            alt="Candidate"
            src={photo}
            className="rounded-2xl w-full h-full m-auto p-0"
          />
        </div>
        <div
          onClick={() => setOpen(true)}
          className="flex h-32 sm:h-40 w-1/2 flex-col mx-6 border rounded-2xl justify-between shadow-sm shadow-slate-200 cursor-pointer"
        >
          <h1 className="text-lg my-auto text-gray2 justify-center text-center leading-7 font-bold">
            سایر توضیحات
          </h1>
        </div>
      </div>

      <div className="w-full flex border-b py-4 gap-10">
        <button
          className="w-1/2 mx-6 border text-center border-slate-300 rounded-md shadow py-3 font-semibold bg-gray-100"
          onClick={downloadResume}
        >
          رزومه
        </button>
        <button
          disabled
          className="w-1/2 mx-6 border text-center border-slate-300 rounded-md shadow py-3 font-semibold bg-gray-100"
        >
          مدارک
        </button>
      </div>

      <Modal open={open} setOpen={setOpen} request={undefined}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : !data || !data.candidate || questionnaires.length === 0 ? (
          <div className="border shadow-sm rounded-lg mt-4">
            <p className="text-lg text-gray2 font-medium text-center my-4">
              اطلاعاتی برای نمایش وجود ندارد!
            </p>
          </div>
        ) : (
          <PersonalCardList questionnaires={questionnaires} />
        )}
      </Modal>
    </div>
  );
};

export default PersonalCard;
