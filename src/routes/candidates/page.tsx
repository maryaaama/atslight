import NavBar from "../../components/navBar/navBar";
import Button from "../../components/button/button";
import CandidateCard from "../../components/candidateCard/candidateCard";
// import { useCandidatesQuery } from "../../graphql/generated/graphql";
import { useEffect, useState } from "react";
import CandidatesSkeleton from "../../components/skeleton/candidates";
export default function Candidates() {
  const cardCount = Array.from({ length: 6 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 2000); 
 
    return () => clearTimeout(timerId);
  }, []);
  // const { data, loading, error } = useCandidatesQuery({
  //   variables: {
  
  //  },
  //  });

  return (
    loading ? <CandidatesSkeleton/>:
    <main>
    <NavBar name={"مدیر فروش"} />
    <div className="w-full border-b">
      <div className="w-2/3 mx-auto my-2 py-1.5 text-center border rounded-lg bg-gray-100 hover:bg-opacity-80 shadow-sm hover:shadow">
        <Button name="ویرایش آگهی استخدام" className={""} />
      </div>
    </div>
    {cardCount.map((_, index) => (
      <CandidateCard key={index} />
      ))}

         {/* {data.map(candidate=> (
      //     <CandidateCard key={} />
      //   ))} */}
  </main>
);
}

