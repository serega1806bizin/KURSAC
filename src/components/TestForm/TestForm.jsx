import "./TestForm.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TEXT_Q } from "./TYPES-BLOCK/TEXT-Q";
import { ELONE_NUMBER } from "./TYPES-BLOCK/ELONE-NUMBER";
import { LIST_NUMBER } from "./TYPES-BLOCK/LIST-NUMBER";
import { MATRIX } from "./TYPES-BLOCK/MATRIX";
import { VARIANT_Q } from "./TYPES-BLOCK/VARIANT-Q";
import { LIST_PARS } from "./TYPES-BLOCK/LIST-PARS";
import { LIST_REBR_Q } from "./TYPES-BLOCK/LIST-REBR-Q";
import {BAZISSILIK} from "../../../var"

export const TestForm = () => {
  const { testId } = useParams();
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); // Индикатор отправки
  const [formData, setFormData] = useState({
    studentName: "",
    group: "",
    studentNumber: "",
    answers: {},
  });

  // Обновление ответов
  const updateAnswer = (questionId, answer) => {
    setFormData((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer,
      },
    }));
  };

  // Загрузка теста
  useEffect(() => {
    fetch(BAZISSILIK.api+"api/tests/"+testId)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Тест не найден");
        }
        return response.json();
      })
      .then((data) => {
        setTest(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки теста:", error);
        setLoading(false);
      });
  }, [testId]);

  // Отправка данных
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Проверяем, что все ответы заполнены
    if (Object.keys(formData.answers).length !== test.questions.length) {
      alert("Дайте відповідь на всі запитання.");
      return;
    }
  
    const submissionData = {
      "id-test": test.id, // ID теста
      "id-answer": Date.now(), // Уникальный ID ответа
      student: formData.studentName, // Имя студента
      group: formData.group, // Группа студента
      studentNumber: formData.studentNumber, // Номер в журнале
      dueTime: new Date().toISOString(), // Время отправки
      answers: Object.entries(formData.answers).map(([questionId, answer]) => ({
        "question-id": questionId,
        answer,
      })),
    };
  
    setIsSubmitting(true); // Показываем индикатор загрузки
  
    // Отправляем запрос на сервер
    fetch(BAZISSILIK.api+"submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка отправки данных");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Прогресс обновлён и данные сохранены:", data);
        alert("Ответ успешно отправлен!");
        window.close();
        // Дополнительно: Обновить состояние или перейти на другую страницу
      })
      .catch((error) => {
        console.error("Ошибка отправки:", error);
        alert("Произошла ошибка при отправке!");
      })
      .finally(() => {
        setIsSubmitting(false); // Скрываем индикатор загрузки
      });
  };
  

  if (loading) {
    return <p>Загрузка теста...</p>;
  }

  if (!test) {
    return <p>Тест не найден.</p>;
  }

  const renderQuestion = (question) => {
    switch (question.type) {
      case "text-answer":
        return (
          <TEXT_Q
            question={question}
            onChange={(answer) => updateAnswer(question.id, answer)}
          />
        );
      case "number-answer":
        return (
          <ELONE_NUMBER
            question={question}
            onChange={(answer) => updateAnswer(question.id, answer)}
          />
        );
      case "number-list":
        return (
          <LIST_NUMBER
            question={question}
            onChange={(answer) => updateAnswer(question.id, answer)}
          />
        );
      case "matrix":
        return (
          <MATRIX
            question={question}
            onChange={(answer) => updateAnswer(question.id, answer)}
          />
        );
      case "variant-list":
        return (
          <VARIANT_Q
            question={question}
            onChange={(answer) => updateAnswer(question.id, answer)}
          />
        );
      case "mumber-paries":
        return (
          <LIST_PARS
            question={question}
            onChange={(answer) => updateAnswer(question.id, answer)}
          />
        );
      case "edge-list":
        return (
          <LIST_REBR_Q
            question={question}
            onChange={(answer) => updateAnswer(question.id, answer)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="test">
      <header className="header2" style={{ position: "static" }}>
        <img
          src="../../public/free-icon-physics-2286340.png"
          alt="значек атома"
          className="header2-icon"
        />
        <div className="header2-info">
          <div className="header2-info-top">
            <b>Самостійна робота № {test.nomer}</b>
          </div>
          <div className="header2-info-bottom">
            <b>{test.nazwa}</b>
            <p>{test.additional}</p>
          </div>
        </div>
      </header>
      <main className="main">
        <form onSubmit={handleSubmit} className="form">
          <section className="section-1">
            <div className="form-container">
              <label className="form-label">
                Прізвище, ім’я, по-батькові:<span className="red">*</span>
              </label>
              <input
                required
                type="text"
                className="form-input"
                placeholder="Петренко Петро Петрович"
                value={formData.studentName}
                onChange={(e) =>
                  setFormData({ ...formData, studentName: e.target.value })
                }
              />
            </div>
            <div className="form-container">
              <label className="form-label">
                Група:<span className="red">*</span>
              </label>
              <input
                required
                type="text"
                className="form-input"
                placeholder="ПЗ-221"
                value={formData.group}
                onChange={(e) =>
                  setFormData({ ...formData, group: e.target.value })
                }
              />
            </div>
            <div className="form-container">
              <label className="form-label">
                Номер по списку в журналі:<span className="red">*</span>
              </label>
              <input
                required
                type="number"
                className="form-input"
                placeholder="10"
                value={formData.studentNumber}
                onChange={(e) =>
                  setFormData({ ...formData, studentNumber: e.target.value })
                }
              />
            </div>
          </section>
          <section className="section-qestions">
            {test.questions.map((question) => renderQuestion(question))}
          </section>
          <button type="submit" className="submit" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "НАДІСЛАТИ"}
          </button>
        </form>
      </main>
    </div>
  );
};