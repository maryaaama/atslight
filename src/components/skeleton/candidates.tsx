import CandidateCardSkeleton from "./candidateCard";
import NavBar from "../navBar/navBar";
const CandidatesSkeleton = () => {
  const cardCount = Array.from({ length: 6 });

  return (
    <main className="md:h-screen">
      <NavBar name={"مدیر فروش"} />
      <div className="sm:h-11/12 md:p-4 md:h-[85%] md:overflow-auto max-w-xl mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center">
        <div className="w-2/3 h-10 mx-auto my-2 py-1.5 border rounded-lg bg-gray-300 animate-pulse flex items-center">
          <div className="h-3 mx-auto bg-gray-100 rounded w-3/4"></div>
        </div>

        {cardCount.map((_, index) => (
          <CandidateCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
};

export default CandidatesSkeleton;
