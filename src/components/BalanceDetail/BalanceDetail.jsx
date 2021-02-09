import React from "react";
import './BalanceDetail.css';

function BalanceDetail() {
  return (
    <div className="balanceDetail">
      <div className="income">
        <h4>INCOME</h4>
        <p>0.00</p>
      </div>
      <div className="expense">
        <h4>EXPENSE</h4>
        <p>0.00</p>
      </div>
    </div>
  );
}

export default BalanceDetail;
