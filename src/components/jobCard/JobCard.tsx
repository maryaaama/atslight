import React, { useState } from "react";
import Modal from "../modal/modal";
import JobForm from "../../components/jobForm/jobForm"; // Import the JobForm component
import { Language } from "../../graphql/generated/graphql";

interface JobData {
  // Other properties...
  translations: {
    nodes: {
      lang: string | Language; // Use Language if it's an enum you have defined
      nodeId: string;
      title: string;
      __typename?: "JobTranslation";
    }[];
  };
  // Include any other properties from your actual job object that are missing from JobData
}
const JobCard: React.FC<{ job: JobData }> = ({ job }) => {
  const [open, setOpen] = useState(false);
  const jobTitle = job?.translations?.nodes[0]?.title;

  return (
    <div
      onClick={() => setOpen(true)}
      className="cursor-pointer flex w-auto m-1 border rounded-md bg-back shadow-sm hover:bg-gray-100 hover:shadow-lg items-center justify-between py-2"
      role="button"
      tabIndex={0}
    >
      <div className="text">
        <h2 className="pr-2 font-medium text-lg">{jobTitle}</h2>
      </div>
      <Modal open={open} setOpen={setOpen} request={undefined}>
        <JobForm />
      </Modal>
    </div>
  );
};

export default JobCard;
