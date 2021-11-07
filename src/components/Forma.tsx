import React from 'react';

const Forma = (props) => {
   const { task, setTask, addNewCard, filtering, filterValue } = props
   const addCard = (task, setTask, filterValue) => {
      addNewCard(task, setTask);
      filtering(filterValue);
   }
   return (
      <div>
         <input type="text" placeholder="Введите задачу" onChange={(e) => { setTask(e.target.value) }} value={task} />
         <button onClick={() => { addCard(task, setTask, filterValue) }}>Добавить задачу</button>
      </div>
   );
}

export default Forma;
