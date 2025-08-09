import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaPlus, FaUpload, FaChevronRight, FaSearch } from "react-icons/fa";

export default function ActionBar() {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      {/* Nút bên trái */}
      <div>
        <Button variant="primary" className="me-2 px-3">
          <FaPlus className="me-1" /> THÊM MỚI
        </Button>
        <Button variant="secondary" className="px-3">
          <FaUpload className="me-1" /> XUẤT RA FILE
        </Button>
      </div>

      {/* Ô tìm kiếm */}
      <div className="d-flex">
        <InputGroup
          style={{ backgroundColor: "#878686ff", borderRadius: "4px" }}
        >
          <InputGroup.Text
            style={{
              backgroundColor: "#f0f0f0",
              border: "none",
              color: "#555",
            }}
          >
            <FaChevronRight />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Tìm kiếm theo Tên"
            style={{
              backgroundColor: "#f0f0f0",
              border: "none",
              boxShadow: "none",
            }}
          />
          <InputGroup.Text
            style={{
              backgroundColor: "#f0f0f0",
              border: "none",
              cursor: "pointer",
              color: "#000",
            }}
          >
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </div>

      {/* Dropdown kết quả */}
      <div className="d-flex align-items-center">
        <span className="me-2">
          <strong>Kết quả</strong>
        </span>
        <Form.Select size="sm" style={{ width: "80px" }}>
          <option>20</option>
          <option>10</option>
          <option>50</option>
        </Form.Select>
      </div>
    </div>
  );
}
