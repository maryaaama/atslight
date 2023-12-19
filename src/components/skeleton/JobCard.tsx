const JobCardSkeleton = () => {
    return (
      <span
      className="animate-pulse flex w-auto m-1 border rounded-md bg-gray-200 shadow-sm  items-center justify-between py-2"
      >


          <div className="h-4 mr-2 bg-gray-300 rounded w-20"></div>



          <div className="flex gap-x-7 md:gap-14 items-center">

             <div className="h-4 bg-gray-300 rounded w-16"></div>

            <div className="flex items-center justify-center bg-gray-300 rounded-2xl w-24 h-11">
             <div className=" flex  h-4 bg-gray-200 rounded w-16"></div>
            </div>

          </div>
     
      </span>
    );
  };
  
  export default JobCardSkeleton;
