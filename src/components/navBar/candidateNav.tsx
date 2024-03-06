import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
interface data {
  name: string | undefined;
}
export default function CandidateNav({ name }: data) {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-start p-2 bg-white border-b">
      <div className="flex">
        <button type="button" onClick={() => navigate(-2)}>
          <div className="flex">
            <div className="my-auto">
              <FaArrowRight />
            </div>
            <p className="mr-2 text-sm">{name}</p>
          </div>
        </button>
      </div>
    </nav>
  );
}