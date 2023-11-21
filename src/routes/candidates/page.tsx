import NavBar from "../../components/navBar/navBar";
import Button from "../../components/button/button";
import CandidateCard from "../../components/candidateCard/candidateCard";
export default function candidates() {
  const cardCount = Array.from({ length: 6 });

  return (
    <main>
      <NavBar name={"مدیر فروش"} />
      <div className="w-full border-b">
        <div className="w-2/3 mx-auto my-2 py-1.5 text-center border rounded-lg bg-gray-100 hover:bg-opacity-80 shadow-sm hover:shadow">
          <Button name="ویرایش آگهی استخدام" />
        </div>
      </div>
      {cardCount.map((_, index) => (
        <CandidateCard key={index} />
      ))}
    </main>
  );
}
