import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateTest } from "./components/CreateTest/CreateTest";
import { Golovna } from "./components/golovna/Golovna";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Golovna />} />
        <Route path="/create-test" element={<CreateTest />} />
      </Routes>
    </Router>
  );
};
