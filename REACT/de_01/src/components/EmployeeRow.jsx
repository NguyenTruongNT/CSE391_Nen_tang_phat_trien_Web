import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EmployeeRow = ({ employee, onEditClick, onDeleteClick }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <FaEdit
          className="text-warning me-2 cursor-pointer"
          onClick={() => onEditClick(employee)}
        />
        <FaTrash
          className="text-danger cursor-pointer"
          onClick={() => onDeleteClick(employee.id)}
        />
      </td>
    </tr>
  );
};

export default EmployeeRow;
