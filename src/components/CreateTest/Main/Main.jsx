import { useState } from "react";
import { Section1 } from "./Section-1/Section-1";
import { QESTION } from "./Section-qestions/QESTION";
import { Footer } from "../Footer/Footer";

export const Main = () => {
  const [questions, setQuestions] = useState([{ id: 0 }]); // Хранение объектов с уникальными id

  const addQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { id: prevQuestions.length }, // Добавляем новый вопрос с уникальным id
    ]);
  };

  const removeQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id) // Удаляем по id
    );
  };

  return (
    <>
      <main className="main">
        <Section1 />
        <p className="WORNING">
          УВАГА! Питання: “З якої ви групи?”, “Хто ви?”, “Ваш варіант?”
          створюється АВТОМАТИЧНО
        </p>
        {questions.map((question) => (
          <QESTION
            key={question.id}
            id={question.id}
            onDelete={() => removeQuestion(question.id)} // Передаем функцию удаления
          />
        ))}
      </main>
      <Footer addQuestion={addQuestion} />
    </>
  );
};
