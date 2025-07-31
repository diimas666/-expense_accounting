import React, { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };
  return (
    <div className="new-cost">
      {isFormVisible ? (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          setIsFormVisible={setIsFormVisible}
        />
      ) : (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
    </div>
  );
};

export default NewCost;
