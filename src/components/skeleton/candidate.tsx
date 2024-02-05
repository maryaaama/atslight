import NavBar from "../navBar/navBar";
import PersonalCardSkeleton from "./personalCard";
const CandidateSkeleton = () => {
  return (
    <main>
      <NavBar name={"مدیر فروش"} />
      <div className="animate-pulse">
        <PersonalCardSkeleton />
        <div className="sm:h-11/12 max-sm:w-screen max-w-lg mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center animate-pulse my-3">
          <div className="flex justify-between mx-6 my-2 lg:gap-x-96 gap-x-12 mt-3">
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          </div>
          <div className="flex justify-between mx-6 my-2 lg:gap-x-96 gap-x-12 mt-3">
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          </div>
          <div className="flex justify-between mx-6 my-2 lg:gap-x-96 gap-x-12 mt-3">
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          </div>
          <div className="flex justify-between mx-6 my-2 lg:gap-x-96 gap-x-12 mt-3">
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          </div>

          <div className="w-full flex border-t py-5">
            <div className="w-1/2 h-10 rounded-md  mx-6 py-2 bg-gray-300">
              <div className="animate-pulse h-3 w-1/2 bg-gray-100 rounded mx-auto"></div>
            </div>
            <div className="w-1/2 h-10 rounded-md  mx-6 py-2 bg-gray-300">
              <div className="animate-pulse h-3 w-1/2 bg-gray-100 rounded mx-auto"></div>
            </div>
          </div>

          <div className="flex flex-row py-4 px-3 justify-between border-t">
            <div className="m-auto p-2 rounded-md bg-gray-300">
              <div className="h-2 w-14 bg-gray-100 rounded"></div>
            </div>
            <div className="m-auto p-2 rounded-md bg-gray-300">
              <div className="h-2 w-14 bg-gray-100 rounded"></div>
            </div>
            <div className="m-auto p-2 rounded-md bg-gray-300">
              <div className="h-2 w-14 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CandidateSkeleton;
