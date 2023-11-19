import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
interface data {
  name: string;
}
export default function NavBar({ name }: data) {
  const router = useRouter();
  return (
    <nav className="flex justify-start p-2 bg-white border-b">
      <div className="flex">
        <button type="button" onClick={() => router.back()}>
          <FaArrowRight />
        </button>
        <p className="mr-4">{name}</p>
      </div>
    </nav>
  );
}
