import NavBar from "../../components/navBar/navBar";
import Button from "../../components/button/button";
import CandidateCard from "../../components/candidateCard/candidateCard";
// import { useCandidatesQuery } from "../../graphql/generated/graphql";
import { useEffect, useState } from "react";
import CandidatesSkeleton from "../../components/skeleton/candidates";
//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Candidates() {
  const cardCount = Array.from({ length: 6 });
  const [loading, setLoading] = useState(true);

  const notify = () => toast.info("you clicked on button");
  const clickHandler =()=>{
    notify()
  }

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
    <main className="md:h-screen">
    <NavBar name={"مدیر فروش"} />
    <div className="sm:h-11/12 md:p-4 md:h-[85%] md:overflow-auto  max-sm:w-screen max-w-xl mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg"
     >
    <div className="w-full">
      <div className="w-2/3 mx-auto my-2 py-1.5 text-center border rounded-lg bg-gray-100 hover:bg-opacity-80 shadow-sm hover:shadow">
        {/* <Button name="ویرایش آگهی استخدام" className={""} /> */}
        <button onClick={clickHandler}>ویرایش آگهی استخدام</button>
      </div>
      </div>
    {cardCount.map((_, index) => (
      <CandidateCard key={index} />
      ))}
      </div>
  </main>
);
}

