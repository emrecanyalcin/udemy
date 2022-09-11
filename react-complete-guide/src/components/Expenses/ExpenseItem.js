import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import '../UI/Card.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log(title)
    setTitle(title.toUpperCase());
  };

  return (
    <Card className="expense-item"> 
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          {props.amount}
        </div>
        <button className="" onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  )
}

export default ExpenseItem;