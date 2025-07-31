import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: '',
  // });
  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: e.target.value,
    // });
    // setUserInput((prev) => {
    //   return {
    //     ...prev,
    //     name: e.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputName.trim() || !inputAmount.trim() || !inputDate.trim()) return;

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveCostData(costData);
    setInputName('');
    setInputAmount('');
    setInputDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control ">
          <label htmlFor="">Название</label>
          <input value={inputName} onChange={nameChangeHandler} type="text" />
        </div>

        <div className="new-cost__control ">
          <label htmlFor="">Сумма</label>
          <input
            value={inputAmount}
            onChange={amountChangeHandler}
            type="number"
            min={'0.01'}
            step={'0.01'}
          />
        </div>

        <div className="new-cost__control ">
          <label htmlFor="">Дата</label>
          <input
            value={inputDate}
            onChange={dateChangeHandler}
            type="date"
            min={'2019-01-01'}
            step={'2025-12-31'}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button onClick={() => props.setIsFormVisible(false)}>Отмена</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
