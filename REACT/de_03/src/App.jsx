import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ActionBar from "./components/ActionBar";
import EmployeeTable from "./components/EmployeeTable";
import data from "./data";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <ActionBar />
        <EmployeeTable data={data} />
      </div>
      <Footer />
    </div>
  );
}
