import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TransactionTable from "./components/TransactionTable";
import AddTransactionModal from "./components/AddTransactionModal";
import { data as initialData } from "./data";

export default function App() {
  const [transactions, setTransactions] = useState(initialData);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (newData) => {
    const newId = Math.max(...transactions.map((t) => t.id)) + 1;
    setTransactions([
      ...transactions,
      {
        id: newId,
        ...newData,
        ngayMua: new Date().toLocaleString("vi-VN"),
      },
    ]);
  };

  return (
    <>
      <Header onShowModal={() => setShowModal(true)} />
      <div className="container">
        <TransactionTable transactions={transactions} />
      </div>
      <Footer />

      <AddTransactionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAdd}
      />
    </>
  );
}
