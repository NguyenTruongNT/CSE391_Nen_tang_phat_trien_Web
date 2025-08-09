import React, { useState } from "react";
import { employeeData } from "./data/data";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeFormModal from "./components/EmployeeFormModal";

function App() {
  const [employees, setEmployees] = useState(employeeData);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = (newEmp) => {
    setEmployees([...employees, { ...newEmp, id: Date.now() }]);
  };

  const updateEmployee = (updatedEmp) => {
    const updatedList = employees.map((emp) =>
      emp.id === updatedEmp.id ? updatedEmp : emp
    );
    setEmployees(updatedList);
  };

  const deleteEmployee = (id) => {
    const filtered = employees.filter((emp) => emp.id !== id);
    setEmployees(filtered);
  };

  const handleEditClick = (emp) => {
    setSelectedEmployee(emp);
    setShowModal(true);
  };

  const handleAddClick = () => {
    setSelectedEmployee(null);
    setShowModal(true);
  };

  return (
    <>
      {/* Header */}
      <header
        className="p-2 mb-2 border-bottom"
        style={{ borderBottom: "9px solid black", backgroundColor: "#e7e7e7" }}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3 p-3">
              <h2 className="fw-bold m-0" style={{ fontSize: "2rem" }}>
                TLU
              </h2>
              <span className="text-muted" style={{ fontSize: "1rem" }}>
                Home
              </span>
              <span style={{ fontSize: "1rem" }}>Employees</span>
            </div>

            <form className="d-flex" role="search">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success ms-2">Search</button>
            </form>
          </div>
        </div>
      </header>

      {/* Other components */}
      <div className="container">
        <EmployeeTable
          employees={employees}
          onAddClick={handleAddClick}
          onEditClick={handleEditClick}
          onDeleteClick={deleteEmployee}
        />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <p id="recordCount">
            Showing <strong>5</strong> out of <strong>25</strong> entries
          </p>
          <nav>
            <ul className="pagination mb-0">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <EmployeeFormModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onAdd={addEmployee}
          onUpdate={updateEmployee}
          selectedEmployee={selectedEmployee}
        />
      </div>
    </>
  );
}

export default App;
