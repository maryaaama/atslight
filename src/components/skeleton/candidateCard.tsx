const CandidateCardSkeleton = () => {
  return (
    <span
      className="flex w-full m-1 rounded-md items-center animate-pulse bg-gray-200"
    >
      <div className="rounded-xl m-1.5 border w-[90px] h-[90px] bg-gray-300"></div>
      <div className="w-[46%] m-1 pb-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-2 bg-gray-300 rounded w-5/6 mt-3"></div>
      </div>
      <div className="w-[28%] h-24 flex flex-col justify-between mx-1 my-0 py-2 rounded-xl bg-gray-300">
        <div className="h-4 w-1/2 bg-gray-200 rounded text-center m-auto py-2"></div>
        <div className="h-2 w-1/2 bg-gray-200 rounded text-center m-auto p-0.5"></div>
      </div>
    </span>
  );
};

export default CandidateCardSkeleton;
