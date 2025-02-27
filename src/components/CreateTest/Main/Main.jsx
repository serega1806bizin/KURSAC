import { useState } from "react";
import { Section1 } from "./Section-1/Section-1";
import { QESTION } from "./Section-qestions/QESTION";
import { Footer } from "../Footer/Footer";

export const Main = () => {
  const [questions, setQuestions] = useState([{ id: 0, points: 0 }]); // Хранение объектов с id и баллами
  const [testName, setTestName] = useState(""); // Название теста
  const [testNumber, setTestNumber] = useState(0); // Номер теста
  const [additionalText, setAdditionalText] = useState(""); // Дополнительный текст

  const totalPoints = questions.reduce(
    (sum, question) => sum + question.points,
    0
  ); // Сумма баллов

  const addQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { id: prevQuestions.length, points: 0 }, // Новый вопрос с id и начальным количеством баллов
    ]);
  };

  const updatePoints = (id, newPoints) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, points: newPoints } : q))
    );
  };

  const removeQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  };

  return (
    <>
      <main className="main">
        {/* Передаем функции для установки названия, номера и дополнительного текста */}
        <Section1
          setTestName={setTestName}
          setTestNumber={setTestNumber}
          setAdditionalText={setAdditionalText}
        />
        <p className="WORNING">
          УВАГА! Питання: “З якої ви групи?”, “Хто ви?”, “Ваш варіант?”
          створюється АВТОМАТИЧНО
        </p>
        {questions.map((question) => (
          <QESTION
            key={question.id}
            id={question.id}
            points={question.points}
            onDelete={() => removeQuestion(question.id)}
            onPointsChange={(points) => updatePoints(question.id, points)}
            onUpdate={(id, updatedData) => {
              setQuestions((prevQuestions) =>
                prevQuestions.map((q) =>
                  q.id === id ? { ...q, ...updatedData } : q
                )
              );
            }}
          />
        ))}
      </main>
      {/* Передаем новые данные в Footer */}
      <Footer
        addQuestion={addQuestion}
        totalPoints={totalPoints}
        testName={testName}
        testNumber={testNumber}
        additionalText={additionalText}
        questions={questions}
      />
    </>
  );
};
