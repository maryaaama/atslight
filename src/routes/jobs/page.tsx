import NavBar from "../../components/navBar/navBar";
import JobsList from "../../components/jobsList/jobsList";

export default function Jobs() {
  return (
    <main>
      <NavBar name="چارت سازمانی" />
      <JobsList />
    </main>
  );
}
