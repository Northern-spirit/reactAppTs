import React from 'react';
import './../styles/App.css';
import Forma from './Forma';
import { observer } from 'mobx-react';
import store from './../store';
import Card from './Card';

const App = () => {
  const { addNewCard, card, changeCheck, removeCard, filtering, filterArray, filterLet, changeFilterLet } = store//извлекаем из стора все элементы 
  const [task, setTask] = React.useState('')//юз стейт//хуки
  const filterChange = (filterLet) => {
    changeFilterLet(filterLet)
    filtering(filterLet)
  }
  let getCardArray = undefined
  if (card) {
    getCardArray = filterArray.map((c, i) => <Card key={i} {...c} changeCheck={changeCheck} removeCard={removeCard} filtering={filtering} filterLet={filterLet} />)
  }
  return (
    <div className="wrapper">
      <div className="wpapperPadding">
        <Forma className="wrapperForm" task={task} setTask={setTask} addNewCard={addNewCard} filtering={filtering} filterLet={filterLet} />
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