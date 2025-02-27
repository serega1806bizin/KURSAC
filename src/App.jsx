import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateTest } from "./components/CreateTest/CreateTest";
import { Golovna } from "./components/golovna/Golovna";
import { TestForm } from "./components/TestForm/TestForm";
import { TestItem } from "./components/TestItem/TestItem";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Golovna />} />
        <Route path="/create-test" element={<CreateTest />} />
        <Route path="/test/:testId" element={<TestForm />} />
        <Route path="/testAnswers/:id" element={<TestItem />} />
      </Routes>
    </Router>
  );
};
