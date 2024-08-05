import JobCardSkeleton from "./JobCard";
const JobsSkeleton = () => {
  console.log('JobsSkeleton');
  const cardCount = Array.from({ length: 12 });

  return (
    <main className="md:h-screen">
      <div className="sm:h-11/12 md:p-4 md:h-[85%] md:overflow-auto max-w-xl mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center">
        {cardCount.map((_, index) => (
          <JobCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
};

export default JobsSkeleton;
