import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
interface data {
  name: string;
}
export default function NavBar({ name }: data) {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-start p-2 bg-white border-b">
      <div className="flex">
        <button type="button" onClick={() => navigate(-1)}>
          <FaArrowRight />
        </button>
        <p className="mr-4">{name}</p>
      </div>
    </nav>
  );
}
