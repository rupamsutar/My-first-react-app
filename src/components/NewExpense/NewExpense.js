import React, { useState } from "react"; 
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const editingHandler = () => {
        setIsEditing(true);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(ExpenseData);
    };

    const submittingCancelHandler = () => {
        setIsEditing(false);
    }


    return <div className="new-expense">
        {!isEditing && <button onClick={editingHandler} >Add New Expense</button>}
        {isEditing 
            && 
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancel={submittingCancelHandler} 
                />
        }
    </div>

}

export default NewExpense;