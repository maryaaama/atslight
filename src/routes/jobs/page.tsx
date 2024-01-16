import {
  useJobsQuery,
} from "../../graphql/generated/graphql";
import NavBar from "../../components/navBar/navBar";
import JobSkeleton from "../../components/skeleton/Job";

export default function Jobs() {
  const { data, loading, error } = useJobsQuery();

  if (error) {
    return <div>Error fetching data</div>;
  }

  const jobs = data?.jobs?.nodes || [];
  console.log(data);
  return (
    loading ? <JobSkeleton/>:
    <main className="md:h-screen">
      <NavBar name={"آگهی های شغلی"} />
      <div className="sm:h-11/12 md:p-4 md:h-[85%] md:overflow-auto max-sm:w-screen max-w-xl mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg">
        <div>
          {jobs.map((job) => (
            <div key={job.id}>
              {job.translations.nodes.length > 0 ? job.translations.nodes[0].title : ""}
            </div>
          ))}
        </div>
      </div>
    </main>
    
  );
}