/* eslint-disable react/prop-types */
import { useState } from "react"; 
import { MainList } from "./List/List";
import ch from "classnames";
import "./Main.scss";
import roboti from "./roboti.json";

const SORT_FIELD_NUMBER = 'number';
const SORT_FIELD_NAME = 'name';
const SORT_FIELD_PROGRESS = 'progress';

export const Main = () => {
  const [visibleRobots, setVisibleRobots] = useState(roboti);
  const [sortField, setSortField] = useState('');
  const [query, setQuery] = useState('');

  const reset = () => {
    setVisibleRobots(roboti);
    setSortField('');
    setQuery('');
  }
  
  const sortByNumber = () => {
    if (sortField === SORT_FIELD_NUMBER) {
      reset(); 
    } else {
      setVisibleRobots(
        [...visibleRobots].sort((a, b) => a.nomer - b.nomer)
      );
      setSortField(SORT_FIELD_NUMBER); 
    }
  };

  const sortByName = () => {
    if (sortField === SORT_FIELD_NAME) {
      reset(); 
    } else {
      setVisibleRobots(
        [...visibleRobots].sort((a, b) => a.nazwa.localeCompare(b.nazwa))
      );
      setSortField(SORT_FIELD_NAME); 
    }
  };

  const sortByProgress = () => {
    if (sortField === SORT_FIELD_PROGRESS) {
      reset(); 
    } else {
      setVisibleRobots(
        [...visibleRobots].sort((a, b) => a.progress - b.progress)
      );
      setSortField(SORT_FIELD_PROGRESS); 
    }
  };

  const handleFilterChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery); // Обновляем состояние строки запроса
    const filteredRobots = roboti.filter((robot) =>
      robot.nazwa.toLowerCase().includes(newQuery.toLowerCase())
    );
    setVisibleRobots(filteredRobots); // Обновляем отображаемый список
  };

  return (
    <main className="main">
      <div className="main-header">
        <span>Відсортувати:</span>
        <button onClick={sortByName} className={ch({ 'main-header-button': true, 'main-header-button-active': sortField === SORT_FIELD_NAME })}>По назві</button>
        <button onClick={sortByNumber} className={ch({ 'main-header-button': true, 'main-header-button-active': sortField === SORT_FIELD_NUMBER })}>
          По номеру СР
        </button>
        <button onClick={sortByProgress} className={ch({ 'main-header-button': true, 'main-header-button-active': sortField === SORT_FIELD_PROGRESS })}>По кількості робіт</button>
        <input
          value={query} 
          onChange={handleFilterChange} 
          autoFocus
          className="main-header-pole"
          type="text"
          placeholder="Назва самостійної роботи"
        />
        <button onClick={reset} className="main-header-button">Скинути</button>
      </div>
      <MainList roboti={visibleRobots} />
    </main>
  );
};
