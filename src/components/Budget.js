import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const currentBudget = event.target.value
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if (currentBudget > 20_000){
            alert('The value cannot exceed budget limit ('+currency+'20,000)')
            setNewBudget(20_000);
            return;
        }
        else if (currentBudget < totalExpenses) {
            alert('The value cannot be lower than current spending')
            setNewBudget(newBudget);
            return;
        }
        else {
            setNewBudget(currentBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: currentBudget
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;