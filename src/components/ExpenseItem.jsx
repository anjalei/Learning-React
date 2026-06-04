
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
 function ExpenseItem (props){ 
  function buttonClickHandler(event){
    console.log("Title Changed");
  }
  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date} ></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        </div>
        <button onClick={buttonClickHandler}>Change Title</button>
        </Card>
  );
}

export default ExpenseItem;