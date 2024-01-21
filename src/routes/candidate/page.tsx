import React from 'react';
import NavBar from '../../components/navBar/navBar';
import PersonalCard from '../../components/personalCard/personalCard';
import { useCandidatesQuery } from '../../graphql/generated/graphql';
import CandidateSkeleton from '../../components/skeleton/candidate';
import EvaluateModal from '../../components/evaluateModal/evaluateModal';
import { useParams } from 'react-router-dom';
import person from "../../image/person.png";
import Button from '../../components/button/button';
import EmptyPage from '../../components/emptyPage/page';

export default function Candidate() {
  const { data, loading, error } = useCandidatesQuery();
  const { id } = useParams();

  if (error) {
    return <p>Error fetching data</p>;
  }

  const candidate = data?.candidates?.nodes.find(candidate => String(candidate.id) === id);

  if (!candidate) {
    return <EmptyPage/>;
  }

  const candidatePhoto = candidate?.photoUrl;
  const candidateTranslations = candidate?.translations?.nodes[0]?.name;
  const candidateJobs = candidate?.jobs.nodes[0]?.translations?.nodes[0]?.title;

  return (
    <main>
      <NavBar name={"مدیر فروش"} />
      {loading ? (
        <CandidateSkeleton />
      ) : (
        <div className="sm:h-11/12 max-sm:w-screen max-w-lg mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg">
          <PersonalCard
            key={candidate.id}
            name={candidateTranslations}
            job={candidateJobs}
            photo={candidatePhoto||person}
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
            <Button
              className="m-auto text-center border border-slate-300 p-3 text-sm rounded-md shadow font-semibold bg-[#b23226] text-white"
              name={"تماس تلفنی"}
            />
            <Button
              className="m-auto text-center border border-slate-300 p-3 text-sm rounded-md shadow font-semibold bg-gray-100"
              name={"تماس ویدیویی"}
            />
            <Button
              className="m-auto text-center border border-slate-300 p-3 text-sm rounded-md shadow font-semibold bg-gray-100"
              name={"قرار روی تقویم"}
            />
          </div>
        </div>
      )}
    </main>
  );
}
