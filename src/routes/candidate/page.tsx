import React from "react";
import { useParams } from "react-router-dom";
import { useCandidateWithApplicationsQuery,useCandidatesQuery } from "../../graphql/generated/graphql";
import NavBar from "../../components/navBar/navBar";
import PersonalCard from "../../components/personalCard/personalCard";
import CandidateSkeleton from "../../components/skeleton/candidate";
import EvaluateModal from "../../components/evaluateModal/evaluateModal";
import person from "../../image/person.png";
import Button from "../../components/button/button";
import EmptyPage from "../../components/emptyPage/page";

export default function Candidate() {
  const { id } = useParams<{ id: string }>();
  const candidateId = parseInt(id!);
  const { data:candidatedata } = useCandidatesQuery();


  const { data, loading, error } = useCandidateWithApplicationsQuery({
    variables: { id: candidateId },
    skip: !candidateId,
  });

  if (loading) return <CandidateSkeleton />;
  if (error) return <p>Error fetching data</p>;
  if (!data || !data.candidate) return <EmptyPage />;

  const { candidate } = data;

  const candidatePhoto = candidate.photoUrl || person;
  const candidateName = candidate.translations?.nodes[0]?.name || "";
  const candidateJobs =
    candidate.jobsApplications?.nodes[0]?.job?.translations?.nodes[0]?.title ||
    "";
  const candidateResumeUrl = candidate.resumeUrl;

  const handlePhoneCall = () => {
    const candidatePhoneNumber = candidate.phones?.[0];
    if (candidatePhoneNumber) {
      window.open(`tel:${candidatePhoneNumber}`);
    }
  };

  return (
    <main>
      <NavBar name={candidatedata?.candidates?.nodes[0].jobs.nodes[0].translations.nodes[0].title} />
      {loading ? (
        <CandidateSkeleton />
      ) : (
        <div className="sm:h-11/12 max-sm:w-screen max-w-lg mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg">
          <PersonalCard
            key={candidate.id}
            name={candidateName}
            job={candidateJobs}
            photo={candidatePhoto || person}
            resumeUrl={candidateResumeUrl || undefined}
            id={candidate.id}
          />
          <div className="w-full">
            <div className="flex justify-between mx-6 my-3">
              <div className="text-base text-gray2 font-bold">
                ارزیابی رزومه
              </div>
              <div className="text-2xl">
                <EvaluateModal />
              </div>
            </div>
            <div className="flex justify-between mx-6 my-3">
              <div className="text-base text-gray2 font-bold">تماس تلفنی</div>
              <div className="text-2xl">
                <EvaluateModal />
              </div>
            </div>
            <div className="flex justify-between mx-6 my-3">
              <div className="text-base text-gray2 font-bold">مصاحبه حضوری</div>
              <div className="text-2xl">
                <EvaluateModal />
              </div>
            </div>
            <div className="flex justify-between mx-6 mt-3">
              <div className="text-base text-gray2 font-bold">آزمون تخصصی</div>
              <div className="text-2xl">
                <EvaluateModal />
              </div>
            </div>
          </div>
          <div className="w-full flex border-t py-5 flex-row-2 justify-between items-center gap-10">
            <div className="w-1/2 text-center border border-slate-300 rounded-md shadow mx-6 py-3 font-semibold bg-gray-100">
              <Button name="رد صلاحیت" className={""} />
            </div>
            <div className="w-1/2 text-center border border-slate-300 rounded-md shadow mx-6 py-3 font-semibold bg-primary text-white">
              <Button name="استخدام" className={""} />
            </div>
          </div>
          <div className="flex flex-row py-5 px-3 justify-between border-t">
            <button
              onClick={handlePhoneCall}
              className="m-auto text-center border border-slate-300 p-3 text-sm rounded-md shadow font-semibold bg-[#b23226] text-white"
            >
              تماس تلفنی
            </button>
            <button
              disabled
              className="m-auto text-center border border-slate-300 p-3 text-sm rounded-md shadow font-semibold bg-gray-100"
            >
              تماس ویدیویی
            </button>
            <button
              disabled
              className="m-auto text-center border border-slate-300 p-3 text-sm rounded-md shadow font-semibold bg-gray-100"
            >
              قرار روی تقویم
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
