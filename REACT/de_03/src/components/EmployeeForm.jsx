import React from "react";
import { Form, Button } from "react-bootstrap";

export default function EmployeeForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Họ đệm</Form.Label>
        <Form.Control type="text" placeholder="Nhập họ đệm" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Tên</Form.Label>
        <Form.Control type="text" placeholder="Nhập tên" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control type="text" placeholder="Nhập địa chỉ" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Lưu
      </Button>
    </Form>
  );
}
