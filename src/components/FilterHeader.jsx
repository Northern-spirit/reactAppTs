import React from 'react';
import './../styles/FilterHeader.css';

const FilterHeader = () => {
   return (
      <div>
         <div className="titleTask">Выполненные</div>
         <div className="titleTask">Невыполненные</div>
         <div className="titleTask">Все</div>
      </div>
   );
}

export default FilterHeader; 