import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header({ search, setSearch }) {
  return (
    <header className="bg-dark text-white py-4 px-3 d-flex justify-content-between align-items-center">
      {/* Bên trái */}
      <div className="fw-bold">
        <h4>Trường Đại học Thủy lợi</h4>
      </div>

      {/* Bên phải */}
      <div className="d-flex align-items-center">
        <nav className="me-3">
          <a href="#" className="text-white me-3 text-decoration-none fw-bold">
            Trang chủ
          </a>
          <a href="#" className="text-white me-3 text-decoration-none">
            Quản lý cửa hàng
          </a>
        </nav>
        <input
          type="text"
          className="form-control form-control-sm me-2"
          placeholder="Nhập nội dung tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "200px" }}
        />
        <button className="btn btn-outline-success btn-sm">TÌM KIẾM</button>
      </div>
    </header>
  );
}
