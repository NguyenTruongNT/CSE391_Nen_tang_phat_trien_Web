import React from "react";
import EmployeeRow from "./EmployeeRow";
import { FaPlus, FaMinusCircle } from "react-icons/fa";

const EmployeeTable = ({
  employees,
  onAddClick,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
        <h5 className="mb-0">
          Manage <strong>Employees</strong>
        </h5>
        <div>
          <button className="btn btn-danger me-2">
            <FaMinusCircle /> Delete
          </button>
          <button className="btn btn-success" onClick={onAddClick}>
            <FaPlus /> Add New Employee
          </button>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <EmployeeRow
                key={emp.id}
                employee={emp}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
