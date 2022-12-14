import React, { useState } from "react"
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020");
  const expensesList = props.items.filter(x => x.date.toLocaleString("en-US", {year: "numeric"}) === filteredYear.toString());
  
  const filterChangeHandler = (dateChange) => {
    setFilteredYear(dateChange);
    // setToFilterYear(props.items.filter(x => x.date.toLocaleString("en-US", {year: "numeric"}) === dateChange.toString()))
  };

  return <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler} />
      <ExpenseChart expenses={expensesList} />
      <ExpensesList items={expensesList} />
      
{/*       
      <ExpenseItem 
      title={props.items[0].title} 
      amount={props.items[0].amount} 
      date={props.items[0].date}
      />        
      
      <ExpenseItem
        title={props.items[1].title} 
        amount={props.items[1].amount} 
        date={props.items[1].date}
      />        
      
      <ExpenseItem
        title={props.items[2].title} 
        amount={props.items[2].amount} 
        date={props.items[2].date}
      />
      
      <ExpenseItem
        title={props.items[3].title} 
        amount={props.items[3].amount} 
        date={props.items[3].date}
      />        
       */}
  </Card>
}

export default Expenses;