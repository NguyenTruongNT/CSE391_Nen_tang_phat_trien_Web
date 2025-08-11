import React from "react";

export default function Header() {
  return (
    <header
      className="border-bottom"
      style={{
        padding: "40px 0",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="mb-0">Quản Lý Danh Bạ</h2>
        <div className="d-flex align-items-center gap-3">
          <select
            className="form-select form-select-sm"
            style={{ width: "auto" }}
          >
            <option>Tiếng Việt</option>
            <option>English</option>
          </select>
          <button className="btn btn-dark btn-sm">Thêm Liên Hệ</button>
        </div>
      </div>
    </header>
  );
}
