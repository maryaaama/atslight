import { Routes, Route } from "react-router-dom";
import "./App.css";
import Candidate from "./routes/candidate/page";
import Candidates from "./routes/candidates/page";
import Company from "./routes/company/page";
import Organization from "./routes/organization/page";
import Signin from "./routes/signin/page";
import Verify from "./routes/verify/page";
import Slider from "./components/slider/slider";
import PrivacyPolicy from "./routes/privacy-policy/page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Slider />} />
      <Route path="/candidate/:id" Component={Candidate} />
      <Route path="Candidates" element={<Candidates />} />
      <Route path="Company" element={<Company />} />
      <Route path="Organization" element={<Organization />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="Verify" element={<Verify />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
