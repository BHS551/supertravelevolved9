import React, { useState } from 'react';

const BudgetSlider = ({parentHandleBudgetChange}) => {
  const [budget, setBudget] = useState(2000);

  const handleBudgetChange = (e) => {
    const newBudget = parseInt(e.target.value);
    setBudget(newBudget);
    parentHandleBudgetChange(newBudget);
  }

  return (
    <div className="budget-selector">
      <h6>Select your budget</h6>
      <input
        type="range"
        min={0}
        max={20000}
        value={budget}
        onChange={handleBudgetChange}
      />
      <p>Budget: ${budget}</p>
    </div>
  );
}

export default BudgetSlider;