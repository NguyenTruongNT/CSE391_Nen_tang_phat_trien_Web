import React, { useState } from "react";

export default function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    company: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Vui lòng nhập tên";
    if (!form.lastName.trim()) newErrors.lastName = "Vui lòng nhập họ";
    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Số điện thoại phải có 10 chữ số";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email không hợp lệ";
    if (!form.address.trim()) newErrors.address = "Vui lòng nhập địa chỉ";
    if (!form.company.trim()) newErrors.company = "Vui lòng nhập công ty";
    if (!form.category) newErrors.category = "Vui lòng chọn danh mục";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAdd({ ...form, id: Date.now() });
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      company: "",
      category: "",
    });
  };

  return (
    <div className="border p-4 rounded">
      <h5 className="fw-bold mb-3 border-bottom pb-2">Thêm Liên Hệ Mới</h5>
      <form onSubmit={handleSubmit}>
        <div className="row g-2 mb-3">
          <div className="col">
            <label className="form-label mb-1">Tên</label>
            <input
              type="text"
              className="form-control"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            {errors.firstName && (
              <small className="text-danger">{errors.firstName}</small>
            )}
          </div>
          <div className="col">
            <label className="form-label mb-1">Họ</label>
            <input
              type="text"
              className="form-control"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
            {errors.lastName && (
              <small className="text-danger">{errors.lastName}</small>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label mb-1">Số Điện Thoại</label>
          <input
            type="text"
            className="form-control"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label mb-1">Email</label>
          <input
            type="email"
            className="form-control"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label mb-1">Địa Chỉ</label>
          <input
            type="text"
            className="form-control"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          {errors.address && (
            <small className="text-danger">{errors.address}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label mb-1">Công Ty</label>
          <input
            type="text"
            className="form-control"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          {errors.company && (
            <small className="text-danger">{errors.company}</small>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label mb-1">Danh Mục</label>
          <select
            className="form-select"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="">Chọn danh mục</option>
            <option>Công Việc</option>
            <option>Gia Đình</option>
            <option>Bạn Bè</option>
          </select>
          {errors.category && (
            <small className="text-danger">{errors.category}</small>
          )}
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-dark flex-fill">
            Thêm Liên Hệ
          </button>
          <button
            type="reset"
            className="btn btn-outline-dark flex-fill"
            onClick={() =>
              setForm({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                address: "",
                company: "",
                category: "",
              })
            }
          >
            Hủy Bỏ
          </button>
        </div>
      </form>
    </div>
  );
}
