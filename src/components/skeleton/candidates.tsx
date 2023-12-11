import CandidateCardSkeleton from "./candidateCard";
const CandidatesSkeleton = () => {
  const cardCount = Array.from({ length: 6 });
  
  return (
    <main>
      <div className="w-full border-b">
        <div className="w-1/2 h-10 mx-auto my-2 py-1.5 border rounded-lg bg-gray-300 animate-pulse flex items-center">
          <div className="h-3 mx-auto bg-gray-100 rounded w-3/4"></div>
        </div>
      </div>
      {cardCount.map((_, index) => (
        <CandidateCardSkeleton key={index} />
      ))}
    </main>
  );
};

export default CandidatesSkeleton;
