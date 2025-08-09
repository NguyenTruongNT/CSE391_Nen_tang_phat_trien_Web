import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash, FaCaretDown } from "react-icons/fa";

export default function EmployeeTable({ data }) {
  return (
    <Table hover>
      <thead className="table-dark align-middle">
        <tr>
          <th></th>
          <th>Hành động</th>
          <th>STT</th>
          <th>Tên</th>
          <th>Họ đệm</th>
          <th>Địa chỉ</th>
          <th>Hoạt động</th>
        </tr>
      </thead>
      <tbody>
        {data.map((emp, index) => (
          <tr key={emp.id} className="align-middle ">
            <td>
              <FaCaretDown />
            </td>
            <td>
              <Button variant="primary" size="sm" className="me-1">
                <FaEye />
              </Button>
              <Button variant="warning" size="sm" className="me-1">
                <FaEdit />
              </Button>
              <Button variant="danger" size="sm">
                <FaTrash />
              </Button>
            </td>
            <td>{index + 1}</td>
            <td>{emp.ten}</td>
            <td>{emp.hodem}</td>
            <td className="text-start">{emp.diachi}</td>
            <td>{emp.hoatdong ? "✔" : "❌"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
