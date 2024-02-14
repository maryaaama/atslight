import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCurrentSessionQuery,
  useJobsQuery,
} from "../../graphql/generated/graphql";
import Modal from "../modal/modal";
import Logo from "../../image/logo.png";
import JobSkeleton from "../../components/skeleton/Job";
import JobCard from "../../components/jobCard/JobCard";
import EmptyState from "../emptyState/emptyState";
import { JobStatus } from "../../graphql/generated/graphql";

export default function OrganizationChart() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const { data: sessionData } = useCurrentSessionQuery();
  const {
    data: jobsData,
    loading: jobsLoading,
    error: jobsError,
  } = useJobsQuery();

  const currentUser = sessionData?.currentUser?.translations.nodes[0].fullname;

  const currentCompany =
    sessionData?.currentCompany?.translations.nodes[0].name;

  const companyLogo = sessionData?.currentCompany?.logoUrl;

  const publicJobs = jobsData?.jobs?.nodes.filter(
    (job) => job.status === JobStatus.Published
  );

  const handleManagerChange = (event: { target: { value: string } }) => {
    const newValue = event.target.value;
    setUser(newValue);
  };
  if (jobsLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500  "></div>
      </div>
    );
  return (
    <div className="relative z-0 px-2 m-auto lg:max-w-[30%] max-w-[90%] my-10">
      <img
        src={companyLogo || Logo}
        alt="Logo"
        className="h-40 w-auto m-auto"
      />
      <h1 className="text-center font-bold text-xl mt-2">{currentCompany}</h1>

      <div className="relative mt-8 bg-white rounded-lg shadow-md">
        <label htmlFor="name" className="mb-6 pr-2 text-base h-1/2">
          مدیریت
        </label>
        <input
          onChange={handleManagerChange}
          type="text"
          name={currentUser || "مدیر"}
          value={currentUser || Logo}
          id="name"
          disabled={user !== ""}
          className="w-full px-4 peer outline-none font-medium border-2 border-gray2 rounded-lg py-3 text-center text-base text-gray-700"
        />
      </div>
      <div className="h-14 w-[0.1rem] bg-gray-200 m-auto"></div>
      {jobsError ? (
        <>error</>
      ) : jobsLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500 "></div>
        </div>
      ) : publicJobs && publicJobs.length > 0 ? (
        publicJobs?.map((job) => (
          <>
            <button
              key={job.id}
              className="mb-2 w-full border-2 border-gray2 rounded-lg p-2 h-11 text-gray2 flex items-center justify-center hover:bg-opacity-80"
              onClick={() =>
                navigate(
                  `/candidates/?title=${encodeURIComponent(
                    job.translations.nodes[0].title
                  )}`
                )
              }
            >
              {job?.translations.nodes[0].title}
            </button>
            <div className="h-14 w-[0.1rem] bg-gray-200 m-auto"></div>
          </>
        ))
      ) : (
        "n/a"
      )}
      <button
        onClick={() => setModalOpen(true)}
        className="w-full border-2 border-gray2 rounded-lg p-6 h-11 bg-opacity-80 text-gray2 flex items-center justify-center"
      >
        افزودن شغل جدید +
      </button>
      <Modal open={isModalOpen} setOpen={setModalOpen} request={undefined}>
        <div className="w-full mb-5 border-b">
          <h3 className="text-center text-xl font-bold mb-2">آگهی های شغلی</h3>
        </div>
        {jobsLoading ? (
          <JobSkeleton />
        ) : !jobsData || !jobsData.jobs || jobsData?.jobs.nodes[0]?.id === 0 ? (
          <EmptyState />
        ) : (
          jobsData?.jobs?.nodes?.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </Modal>
    </div>
  );
}
