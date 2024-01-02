import "../../index.css";
import Button from "../../components/button/button";
import NavBar from "../../components/navBar/navBar";
import PersonalCard from "../../components/personalCard/personalCard";
import { useEffect, useState } from "react";
// import { GET_CANDIDATE } from "../../graphql/queries";
// import { useCandidateQuery } from "../../graphql/generated/graphql";
import CandidateSkeleton from "../../components/skeleton/candidate";
import EvaluateModal from "../../components/evaluateModal/evaluateModal";

export default function Candidate() {
  // const { data, loading, error } = useCandidateQuery({
  //     variables: {
  //        id: 1},
  //    });
  //  console.log("candidate" ,data);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);


  return loading ? (
    <CandidateSkeleton />
  ) : (
    <main>
      <NavBar name={"مدیر فروش"} />
      <div className="sm:h-11/12 max-sm:w-screen max-w-lg mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg">
        <PersonalCard />
        <div className="w-full">
          <div className="flex justify-between mx-6 my-3">
            <div className="text-base text-gray2 font-bold">
              ارزیابی رزومه
            </div>
            <div className="text-2xl">
            <EvaluateModal/>
            </div>
          </div>
          <div className="flex justify-between mx-6 my-3">
            <div className="text-base text-gray2 font-bold">تماس تلفنی</div>
            <div className="text-2xl">
             <EvaluateModal/>
            </div>
          </div>
          <div className="flex justify-between mx-6 my-3">
            <div className="text-base text-gray2 font-bold">مصاحبه حضوری</div>
            <div className="text-2xl">
            <EvaluateModal/>
            </div>
          </div>
          <div className="flex justify-between mx-6 mt-3">
            <div className="text-base text-gray2 font-bold">آزمون تخصصی</div>
            <div className="text-2xl">
            <EvaluateModal/>
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
    </main>
  );
}

