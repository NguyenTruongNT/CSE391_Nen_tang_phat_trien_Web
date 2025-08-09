import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EmployeeFormModal = ({
  show,
  onClose,
  onAdd,
  onUpdate,
  selectedEmployee,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    } else {
      setFormData({ name: "", email: "", address: "", phone: "" });
    }
    setErrors({});
  }, [selectedEmployee, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Xoá lỗi khi người dùng sửa
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Tên không được để trống";
    if (!formData.email.trim()) newErrors.email = "Email không được để trống";
    if (!formData.address.trim())
      newErrors.address = "Địa chỉ không được để trống";

    const phoneRegex = /^0\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại không được để trống";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    selectedEmployee ? onUpdate(formData) : onAdd(formData);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedEmployee ? "Update Employee" : "Add Employee"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              value={formData.address}
              onChange={handleChange}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          {selectedEmployee ? "Update" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeFormModal;
