import React, { useState } from 'react';
import Button from '../button/button';
import Modal from '../../components/modal/modal';
import PersonalCardList from '../personalCardList/personalCardList';

interface PersonalCardProps {
  photo: string;
  name: string;
  job: string;
  resumeUrl?: string; 
}

const PersonalCard: React.FC<PersonalCardProps> = ({ photo, name, job, resumeUrl }) => {
  const [open, setOpen] = useState(false);

  const downloadResume = () => {
    if (!resumeUrl) {
      alert('کاندید مورد نظر فاقد رزومه می باشد');
      return;
    }
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', `${name}-Resume`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col mx-auto">
      <div className="m-4">
        <h1 className="text-xl font-bold mx-2">{name}</h1>
        <p className="text-lg font-normal text-gray2 mx-2 my-1">{job}</p>
      </div>

      <div className="w-full flex flex-row-2 justify-between items-center gap-10">
        <div className="w-1/2 h-32 sm:h-40 rounded-2xl shadow-md shadow-slate-200 mx-6 border">
          <img
            alt="person"
            src={photo}
            className="rounded-2xl w-full h-full m-auto p-0"
          />
        </div>
        <div
          onClick={() => setOpen(true)}
          className="flex h-32 sm:h-40 w-1/2 flex-col mx-6 border rounded-2xl justify-between shadow-sm shadow-slate-200 cursor-pointer"
        >
          <h1 className="text-lg my-auto text-gray2 justify-center text-center leading-7 font-bold">
            {name}
            <br />
            {job}
          </h1>
        </div>
      </div>
      <div className="w-full flex border-b py-4 gap-10">
          <button name="رزومه" className={"w-1/2 mx-6 border text-center border-slate-300 rounded-md shadow py-3 font-semibold bg-gray-100"} onClick={downloadResume} >رزومه</button>
        <div className="w-1/2 mx-6 border text-center border-slate-300 rounded-md shadow py-3 font-semibold bg-gray-100">
          <Button name="مدارک" className={""} />
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} request={undefined}>
        <PersonalCardList />
      </Modal>
    </div>
  );
};

export default PersonalCard;
