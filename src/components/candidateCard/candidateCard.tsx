import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from '../starRating/starRating';

interface CandidateCardProps {
  id: number;
  name: string;
  job: string;
  photo: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ id, name, job, photo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/candidate/${id}`);
  };

  return (
    <span
      onClick={handleClick}
      className="flex w-auto items-center m-1 border rounded-md bg-back shadow-sm hover:bg-gray-100 hover:shadow-lg justify-between"
    >
      <img
        src={photo}
        alt="person"
        className="rounded-xl m-1.5 border shadow-sm w-[90px] h-[90px]"
      />
      <div className="w-[46%] m-1 pb-4">
        <h2 className="pb-4 font-semibold text-lg">{name} </h2>
        <p className="text-sm text-gray2 font-normal">{job}</p>
      </div>
      <div className="w-[26%] h-[90px] md:w-[20%] m-1 py-2 border rounded-xl shadow-sm bg-white">
        <h1 className="w-full text-center m-auto text-xl py-2 font-medium">70%</h1>
        <div className="w-full md:text-xl text-center m-auto p-0.5">
          <StarRating starClick={undefined} />
        </div>
      </div>
    </span>
  );
};

export default CandidateCard;
