import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaPlus, FaUpload, FaSearch, FaChevronRight } from "react-icons/fa";

const TransactionTable = ({ transactions = [] }) => {
  return (
    <div className="table-responsive mt-3">
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

      <table className="table table-hover">
        <thead className="table-secondary">
          <tr>
            <th>x</th>
            <th>Hành Động</th>
            <th>ID</th>
            <th>Khách Hàng</th>
            <th>Nhân Viên</th>
            <th>Số Tiền</th>
            <th>Ngày Mua</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="6">Không có dữ liệu</td>
            </tr>
          ) : (
            transactions.map((item) => (
              <tr key={item.id}>
                <td>x</td>
                <td>
                  <Button variant="info" size="sm" className="me-1">
                    👁
                  </Button>
                  <Button variant="warning" size="sm" className="me-1">
                    ✏
                  </Button>
                  <Button variant="danger" size="sm">
                    ❌
                  </Button>
                </td>
                <td>{item.id}</td>
                <td>{item.khachHang}</td>
                <td>{item.nhanVien}</td>
                <td>{Number(item.soTien).toLocaleString()} ₫</td>
                <td>{item.ngayMua}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
