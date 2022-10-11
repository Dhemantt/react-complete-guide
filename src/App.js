import logo from "./logo.svg";
import "./App.css";
import Expenseitem from "./components/Expenseitem";
function App() {
  const Expenses = [
    { id:1, title: "petrol", amount: 100, date: new Date(2022, 10, 31) },
    { id:2, title: "petrol", amount: 100, date: new Date(2022, 10, 30) },
    { id:3, title: "petrol", amount: 100, date: new Date(2022, 10, 29) },
    { id:4, title: "petrol", amount: 100, date: new Date(2022, 11, 31) },
  ];
  return (
    <div>
      <Expenseitem title={Expenses[0].title} amount={Expenses[0].amount} date={Expenses[0].date}></Expenseitem>
      <Expenseitem title={Expenses[1].title} amount={Expenses[1].amount} date={Expenses[1].date}></Expenseitem>
      <Expenseitem title={Expenses[2].title} amount={Expenses[2].amount} date={Expenses[2].date}></Expenseitem>
      <Expenseitem title={Expenses[3].title} amount={Expenses[3].amount} date={Expenses[3].date}></Expenseitem>
    </div>
  );
}

export default App;
