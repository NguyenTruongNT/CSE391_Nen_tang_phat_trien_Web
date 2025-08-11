import React from "react";

export default function ContactCard({ contact, onEdit, onDelete }) {
  const fullName =
    ((contact?.firstName || "") + " " + (contact?.lastName || "")).trim() ||
    contact?.name ||
    "Không rõ tên";

  return (
    <div
      className="card shadow-sm p-3 position-relative"
      style={{ borderRadius: "10px" }}
    >
      <div
        className="position-absolute"
        style={{ top: "10px", right: "10px", display: "flex", gap: "8px" }}
      >
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => onEdit(contact)}
        >
          Sửa
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDelete(contact.id)}
        >
          Xóa
        </button>
      </div>

      <div>
        <h4 className="fw-bold mb-2">{fullName}</h4>
        <div className="row mb-1">
          <div className="col-3 fw-bold">SDT:</div>
          <div className="col-8">{contact.phone}</div>
        </div>
        <div className="row mb-1">
          <div className="col-3 fw-bold">Email:</div>
          <div className="col-8">{contact.email}</div>
        </div>
        <div className="row mb-1">
          <div className="col-3 fw-bold">Địa chỉ:</div>
          <div className="col-8">{contact.address}</div>
        </div>
        <div className="row mb-1">
          <div className="col-3 fw-bold">Công ty:</div>
          <div className="col-8">{contact.company}</div>
        </div>
        <div className="row mb-1">
          <div className="col-3 fw-bold">Category:</div>
          <div className="col-8">
            <span className="badge bg-dark">{contact.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
