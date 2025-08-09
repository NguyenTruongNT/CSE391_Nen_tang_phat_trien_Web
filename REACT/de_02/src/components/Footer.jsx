import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-white py-3"
      style={{
        backgroundColor: "#001a72",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="fw-bold">TRƯỜNG ĐẠI HỌC THỦY LỢI</div>
        <div>Địa chỉ: 175 Tây Sơn, Đống Đa, Hà Nội</div>
        <div>Điện thoại: (024) 38522201 - Fax: (024) 35633351</div>
        <div>
          Email:{" "}
          <a href="mailto:phonghcth@tlu.edu.vn" className="text-blue">
            phonghcth@tlu.edu.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
