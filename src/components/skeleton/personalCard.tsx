const PersonalCardSkeleton = () => {
  return (
    <div className="sm:h-11/12 max-sm:w-screen max-w-lg mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center">
      <div className="mt-10 mb-3 mr-2 animate-pulse">
        <div className=" h-4 w-1/2 bg-gray-300 rounded"></div>
        <div className=" h-2 w-1/2 bg-gray-300 rounded my-3"></div>
      </div>
      <div className="w-full flex flex-row-2 justify-between items-center gap-10 animate-pulse">
        <div className="w-1/2 h-36 rounded-2xl mx-6 bg-gray-300"></div>
        <div className="flex flex-col h-36 w-1/2 mx-6 rounded-2xl bg-gray-300 justify-between items-center">
          <div className="animate-pulse h-5 w-1/2 bg-gray-100 rounded mt-5"></div>
          <div className="animate-pulse h-5 w-1/2 bg-gray-100 rounded mb-5"></div>
        </div>
      </div>
      <div className="w-full flex border-b py-4 gap-10 animate-pulse">
        <div className="w-1/2 flex items-center h-10 mx-6 rounded-md py-2  bg-gray-300">
          <div className="h-3 w-1/2 bg-gray-100 rounded mx-auto"></div>
        </div>
        <div className="w-1/2 flex items-center h-10 mx-6 text-center border-slate-300 rounded-md py-2  bg-gray-300">
          <div className="animate-pulse h-3 w-1/2 bg-gray-100 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCardSkeleton;
