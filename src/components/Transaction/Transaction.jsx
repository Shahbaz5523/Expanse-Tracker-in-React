import React from 'react';
import './Transaction.css';

function Transaction() {
    return (
        <div className="transactionBox">
            <div className="close">X</div>
            <div className="transiction sum">
                <p>Some Text</p>
                <p>+$20.0</p>
            </div>
        </div>
    );
}

export default Transaction;