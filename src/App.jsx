import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./Layout";

import { Home } from "./pages/Home";
import { ElectionAppeals } from "./pages/ElectionAppeals";
import { FamilyMediation } from "./pages/FamilyMediation";
import { EmploymentMediation } from "./pages/EmploymentMediation";
import { EstateServices } from "./pages/EstateServices";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ElectionAppeals" element={<ElectionAppeals />} />
            <Route path="/FamilyMediation" element={<FamilyMediation />} />
            <Route
              path="/EmploymentMediation"
              element={<EmploymentMediation />}
            />
            <Route path="/EstateServices" element={<EstateServices />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
