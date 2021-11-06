import React from 'react';
import './../styles/Card.css';

const Card = (props) => {
   const { problem, id, changeCheck, completed, removeCard, filterLet, filtering } = props
   const CheckChange = () => {
      changeCheck(id)
      filtering(filterLet)
   }
   return (
      <div name="checkbox" >
         {completed}
         {problem} <input type="checkbox" checked={completed} onChange={CheckChange} /> <button onClick={() => { removeCard(id) }}>delete</button>
      </div>
   );
}

export default Card;
