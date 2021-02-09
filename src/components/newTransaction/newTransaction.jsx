import React from "react";
import "./newTransaction.css";

function NewTransaction() {
  return (
    <div className="newTranaction">
      <h3>Add New Transaction</h3>
      <hr />
      <form onSubmit={(e)=>{
          e.preventDefault();
      }}>
        <label>
          Description <br/>
          <input type="text" placeholder="Detail of Transaction" />
        </label>
        <label>
          Transaction Amount <br/>
          <input type="number" placeholder="Dollar Value of Transaction" />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default NewTransaction;
