import Image1 from "../../image/image1.png";
import StarRating from "../starRating/starRating";
import { useNavigate } from 'react-router-dom';


export const CandidateCard = () => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate("/candidate")}
      className="flex w-full m-1 border rounded-md bg-back shadow-sm hover:bg-gray-100 hover:shadow-lg items-center"
    >
      {/* <Image
        className="rounded-xl m-1.5 border shadow w-[26%]"
        height={90}
        width={90}
        src={Image1}
        alt={"person"}
      /> */}
      <img
        src={Image1}
        alt="person"
        style={{ height: "90px", width: "90px" }}
        className="rounded-xl m-1.5 border shadow w-[26%]"
      />
      <div className="w-[46%] m-1 pb-4">
        <h2 className="pb-4">محمد علیپور</h2>
        <p className="text-xs text-gray2">طراح و اجرای برنامه فروش</p>
      </div>
      <div className="w-[28%] mx-1 my-0 py-2 rounded-xl shadow bg-white">
        <h1 className="w-full text-center m-auto text-lg py-2">70%</h1>
        <div className="w-full text-center m-auto p-0.5">
          <StarRating />
        </div>
      </div>
    </span>
  );
};

export default CandidateCard;
