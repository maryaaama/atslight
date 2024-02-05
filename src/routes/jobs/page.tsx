import React from "react";
import { useJobsQuery } from "../../graphql/generated/graphql";
import NavBar from "../../components/navBar/navBar";
import JobSkeleton from "../../components/skeleton/Job";
import JobCard from "../../components/jobCard/JobCard";

export default function Jobs() {
  const { data, loading, error } = useJobsQuery();

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <main className="md:h-screen">
      <NavBar name={"آگهی های شغلی"} />
      <div className="sm:h-11/12 md:p-4 md:h-[85%] md:overflow-auto max-sm:w-screen max-w-xl mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg">
        {loading ? (
          <JobSkeleton />
        ) : (
          data?.jobs?.nodes.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </main>
  );
}
