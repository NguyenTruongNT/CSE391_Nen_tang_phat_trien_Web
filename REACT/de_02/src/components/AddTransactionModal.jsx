import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddTransactionModal({ show, onClose, onAdd }) {
  const [form, setForm] = useState({ khachHang: "", nhanVien: "", soTien: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.khachHang || !form.nhanVien || !form.soTien) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    onAdd(form);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm giao dịch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Khách hàng</Form.Label>
            <Form.Control
              type="text"
              name="khachHang"
              value={form.khachHang}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nhân viên</Form.Label>
            <Form.Control
              type="text"
              name="nhanVien"
              value={form.nhanVien}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Số tiền</Form.Label>
            <Form.Control
              type="number"
              name="soTien"
              value={form.soTien}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Hủy
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Thêm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
