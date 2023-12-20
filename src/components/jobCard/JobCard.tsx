import { useNavigate } from 'react-router-dom';


export const JobCard = () => {
  const navigate = useNavigate();

  return (
    <span
      className="flex w-auto m-1 border rounded-md bg-back shadow-sm hover:bg-gray-100 hover:shadow-lg items-center justify-between py-2"
    >
      <div className="w-[46%]">
        <h2 className="pr-2">مدیر فروش</h2>
      </div>

      <div className="flex gap-7 md:gap-14">
      <button className="text-primary text-sm">ویرایش</button>
      <button
      onClick={()=>navigate("/candidates")}
      className="bg-primary text-white text-sm px-6 py-3 rounded-2xl">کاندیدا</button>
      </div>
    </span>
  );
};

export default JobCard;
