import React from 'react';

const Card = (props) => {
   const { problem, id, changeCheck, completed, removeCard, filtering } = props
   const CheckChange = () => {
      changeCheck(id)
      filtering()
   }
   return (
      <div className="checkbox" >
         {completed}
         {problem} <input type="checkbox" checked={completed} onChange={CheckChange} /> <button onClick={() => { removeCard(id) }}>delete</button>
      </div>
   );
}

export default Card;
