import ExpenseItem from "./components/ExpenseItem"

function App() {
  return (
   <div>
    <h1>Expense Tracker</h1>
    <h2>Expenses</h2>
    <ExpenseItem
      title="Insurance"
      price={10000}
      date={new Date(2022, 5, 29)}
      location = "Bangalore"
    />
     <ExpenseItem
      title="Book"
      price={120}
      date={new Date(2022, 1, 10)}
      location = "Bangalore"
    />
     <ExpenseItem
      title="Shopping"
      price={29467}
      date={new Date(2024, 8, 11)}
      location = "Kerala"
    />
     <ExpenseItem
      title="Laptop"
      price={50000}
      date={new Date(2023, 9, 17)}
      location = "Delhi"
    />
   </div>
  )
}

export default App
