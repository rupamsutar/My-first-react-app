import "./ExpenseItem.css";

function ExpenseItem() {
    return  <div className="expense-item">
                <div>August 20th 2022</div>
                <div className="expense-item__description">
                    <h2>Twinkle's Birthday</h2>
                    <div className="expense-item__price">4000/-</div>
                </div>                
            </div>
}

export default ExpenseItem;