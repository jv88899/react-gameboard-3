import React, { Component } from "react";
import TransactionForm from "./TransactionForm";
import classNames from "classnames";

const TransactionMenu = ({
  closeMenu,
  transactionMenuVisible,
  handleSubmitTransaction,
  incomeStatement,
  balanceSheetAssets,
  balanceSheetLiabilities,
  activeCustomerID,
  activeCustomerTotal,
  updateIncomeStatementTotals,
  updateBalanceSheetAssetsTotal,
  updateBalanceSheetLiabilitiesTotal
}) => {
  return (
    <div
      className={classNames({
        "transaction-menu-full-screen": true,
        visible: transactionMenuVisible,
      })}
    >
      <div className="transaction-full-screen-inner">
      <div>
        <h5>Transaction List</h5>
        <p>Enter the amount of your transaction and click the Submit button.</p>
      </div>
      <div className="transaction-menu-inner">
        <h3>Income Statment</h3>
        {incomeStatement.map((item) => (
          <TransactionForm
            key={item.id}
            handleSubmitTransaction={handleSubmitTransaction}
            id={item.id}
            inputID={item.inputID}
            name={item.name}
            total={item.total}
            activeCustomerID={activeCustomerID}
            activeCustomerTotal={activeCustomerTotal}
            updateIncomeStatementTotals={updateIncomeStatementTotals}
          />
        ))}        
        <hr />
        <h3>Balance Sheet Assets</h3>
        {balanceSheetAssets.map((item) => (
          <TransactionForm
            key={item.id}
            handleSubmitTransaction={handleSubmitTransaction}
            id={item.id}
            inputID={item.inputID}
            name={item.name}
            total={item.total}
            activeCustomerID={activeCustomerID}
            activeCustomerTotal={activeCustomerTotal}
            updateBalanceSheetAssetsTotal={updateBalanceSheetAssetsTotal}
          />
        ))}
        <hr />
        <h3>Balance Sheet Liabilities</h3>
        {balanceSheetLiabilities.map((item) => (
          <TransactionForm
            key={item.id}
            handleSubmitTransaction={handleSubmitTransaction}
            id={item.id}
            inputID={item.inputID}
            name={item.name}
            total={item.total}
            activeCustomerID={activeCustomerID}
            activeCustomerTotal={activeCustomerTotal}
            updateBalanceSheetLiabilitiesTotal={updateBalanceSheetLiabilitiesTotal}
          />
        ))}
      </div>
      <div className="transaction-menu-button-done-holder">
        <button
          className="transaction-menu-button-done"
          onClick={closeMenu}
        >
          Done
        </button>
      </div>
      </div>
    </div>
  );
};

export default TransactionMenu;