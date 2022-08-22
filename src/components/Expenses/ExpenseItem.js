import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import "./ExpenseItem.css";



const ExpenseItem = (props) => {
  const ClickHandler = () => {
   let  titleNew = "second click me";
   let count =0;
    console.log(titleNew, ++count);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
