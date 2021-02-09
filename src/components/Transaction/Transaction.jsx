import React, { useState } from "react";
import "./Transaction.css";

function Transaction(props) {
  const checkvalue = () => {
    if (props.amount > 0) {
      return <span>{"+$" + props.amount}</span>;
    } else {
      return <span>{"-$" + props.amount}</span>;
    }
  };
  const setClass = () => {
    if (props.amount > 0) {
      return 'transactionBox sum';
    } else {
      return 'transactionBox mins';
    }
  };

  return (
    <div className={props.amount>0 ? 'transactionBox sum' : 'transactionBox mins'}>
      <div className="close">X</div>
      <div className="transiction sum">
        <p>{props.des}</p>
        <p>{checkvalue()}</p>
      </div>
    </div>
  );
}

export default Transaction;
