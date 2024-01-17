import { useState } from "react";

interface JobData {
  id: number;
  translations: {
    nodes: {
      lang: string;
      nodeId: string;
      title: string;
    }[];
  };
  status: string;
}

const JobCard: React.FC<{ job: JobData }> = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <span
      onClick={() => setOpen(true)}
      className="flex w-auto m-1 border rounded-md bg-back shadow-sm hover:bg-gray-100 hover:shadow-lg items-center justify-between py-2"
    >
      <div className="text">
        <h2 className="pr-2 font-medium text-lg">{job.translations.nodes[0].title}</h2>
        {/* Additional job details can be displayed here */}
      </div>
      {/* Assuming your Modal component expects props like open, setOpen, request, children */}
      {/* <Modal open={open} setOpen={setOpen} request={undefined} children={undefined} /> */}
    </span>
  );
};

export default JobCard;
    