import React from 'react';
import './TransactionHistory.css';
import Transaction from './../Transaction/Transaction';

function TransactionHistory() {
    return (
        <div className="historyContainer">
            <h3>Transaction History</h3>
            <hr/>
            <div className="historyBox">
                <Transaction/>
            </div>
        </div>
    );
}

export default TransactionHistory;