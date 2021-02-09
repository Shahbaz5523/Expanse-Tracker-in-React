import "./App.css";
import React from "react";
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import BalanceDetail from './components/BalanceDetail/BalanceDetail';
import TransactionHistory from "./components/Transaction History/TransactionHistory";
import NewTransaction from './components/newTransaction/newTransaction';

function App() {


  return (
    <div className="App">
      <Header/>
      <Balance/>
      <BalanceDetail/>
      <TransactionHistory/>
      <NewTransaction/>
    </div>
  );
}

export default App;
