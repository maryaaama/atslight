import React, { useState } from "react";
import Modal from "../modal/modal";
import JobForm from "../../components/jobForm/jobForm";
import { JobStatus, Language } from "../../graphql/generated/graphql";

export interface JobData {
  __typename?: "Job";
  nodeId: string;
  id: number;
  status: JobStatus;
  canManageCandidates?: boolean | null;
  education?: string;
  isRemote?: boolean;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  hoursPerWeek?: {
    start: { value: number };
    end: { value: number };
  };
  languages?: string[];
  translations: {
    nodes: {
      title: string;
      description?: string;
      lang: Language;
    }[];
  };
}

const JobCard: React.FC<{ job: JobData }> = ({ job }) => {
  const [open, setOpen] = useState(false);

  const jobTitle = job?.translations?.nodes[0]?.title || "";

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer flex w-auto m-1 border rounded-md bg-back shadow-sm hover:bg-gray-100 hover:shadow-lg items-center justify-between py-2"
        role="button"
        tabIndex={0}
      >
        <div className="text">
          <h2 className="pr-2 font-medium text-lg">{jobTitle}</h2>
        </div>
      </div>
      {open && (
        <Modal open={open} setOpen={setOpen} request={undefined}>
          <JobForm job={job} />
        </Modal>
      )}
    </>
  );
};

export default JobCard;
