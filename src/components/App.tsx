import React from 'react';
import Forma from './Forma';
import { observer } from 'mobx-react';
import store from '../store';
import Card from './Card';
import './../styles/App.scss'; //исправь card на cards везде

export type Todos = Todo[];
export type Todo = {
  id: number;
  problem: string;
  completed: boolean;
};
const App = () => {
  const { addNewCard, cards, changeCheck, removeCard, filtering, filterArray, filterValue, changefilterValue } = store//извлекаем из стора все элементы 
  const [task, setTask] = React.useState('')//юз стейт//хуки
  const filterChange = (filterValue) => {
    changefilterValue(filterValue)
    filtering()
  }
  let getCardArray
  if (cards) {
    getCardArray = filterArray.map((c, i) => <Card key={i} {...c} changeCheck={changeCheck} removeCard={removeCard} filtering={filtering} filterValue={filterValue} />)
  }
  return (
    <div className="wrapper">
      <div className="wpapperPadding">
        <Forma className="wrapperForm" task={task} setTask={setTask} addNewCard={addNewCard} filtering={filtering} filterValue={filterValue} />
        <div>
          <h1 className="titleProblem wrapper">Список задач:</h1>
          <div onClick={() => filterChange(0)}>Выполненные</div>
          <div onClick={() => filterChange(1)}>Невыполненные</div>
          <div onClick={() => filterChange(2)}>Все задачи</div>
        </div>
        {getCardArray}
      </div>
    </div>
  );
}

export default observer(App);