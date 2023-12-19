import NavBar from "../../components/navBar/navBar"
import JobCard from "../../components/jobCard/JobCard";
import { useEffect, useState } from "react";
import JobSkeleton from "../../components/skeleton/Job";


export default function Jobs() {
const cardCount = Array.from({ length: 12 });
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 2000); 
 
    return () => clearTimeout(timerId);
  }, []);

  return (
    loading ? <JobSkeleton/>:
    <main className="md:h-screen">
    <NavBar name={"آگهی های شغلی"} />
    <div className="sm:h-11/12 md:p-4 md:h-[85%] md:overflow-auto  max-sm:w-screen max-w-xl mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg"
     >
    {cardCount.map((_, index) => (
      <JobCard key={index} />
      ))}
      </div>
  </main>
);
}
