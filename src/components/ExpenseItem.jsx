
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
function ExpenseItem (props){ 
  const month = months[props.date.getMonth()];
  
  return (
    <div className="expense-item">
      <div>{month} {props.date.getDate()}, {props.date.getFullYear()}</div>
      <div className='expense-item__location'>{props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;