import { useState, useEffect } from "react";

export default function AddStudentModal({
  onClose,
  onSave,
  existingCodes = [],
}) {
  const [form, setForm] = useState({
    code: "",
    fullName: "",
    email: "",
    gender: "Nam",
    dob: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.code.trim()) {
      newErrors.code = "Mã sinh viên không được để trống";
    } else if (existingCodes.includes(form.code.trim())) {
      newErrors.code = "Mã sinh viên đã tồn tại";
    }

    if (!form.fullName.trim()) {
      newErrors.fullName = "Họ tên không được để trống";
    } else if (form.fullName.trim().length > 50) {
      newErrors.fullName = "Họ tên không quá 50 ký tự";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!form.dob) {
      newErrors.dob = "Ngày sinh không được để trống";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave(form);
    setForm({
      code: "",
      fullName: "",
      email: "",
      gender: "Nam",
      dob: "",
      notes: "",
    });
    onClose();
  };

  // Đóng modal khi nhấn ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit} noValidate>
              <div className="modal-header">
                <h5 className="modal-title">Thêm sinh viên</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>

              <div className="modal-body">
                {/* Mã SV */}
                <div className="mb-3">
                  <label className="form-label">Mã sinh viên *</label>
                  <input
                    type="text"
                    name="code"
                    className={`form-control ${
                      errors.code ? "is-invalid" : ""
                    }`}
                    value={form.code}
                    onChange={handleChange}
                  />
                  {errors.code && (
                    <div className="invalid-feedback">{errors.code}</div>
                  )}
                </div>

                {/* Họ tên */}
                <div className="mb-3">
                  <label className="form-label">Họ tên *</label>
                  <input
                    type="text"
                    name="fullName"
                    className={`form-control ${
                      errors.fullName ? "is-invalid" : ""
                    }`}
                    value={form.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Giới tính */}
                <div className="mb-3">
                  <label className="form-label">Giới tính *</label>
                  <select
                    name="gender"
                    className="form-select"
                    value={form.gender}
                    onChange={handleChange}
                  >
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>

                {/* Ngày sinh */}
                <div className="mb-3">
                  <label className="form-label">Ngày sinh *</label>
                  <input
                    type="date"
                    name="dob"
                    className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                    value={form.dob}
                    onChange={handleChange}
                  />
                  {errors.dob && (
                    <div className="invalid-feedback">{errors.dob}</div>
                  )}
                </div>

                {/* Ghi chú */}
                <div className="mb-3">
                  <label className="form-label">Ghi chú</label>
                  <textarea
                    name="notes"
                    className="form-control"
                    value={form.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer bg-secondary">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Hủy
                </button>
                <button type="submit" className="btn btn-primary">
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className="modal-backdrop fade show"
        onClick={onClose}
        style={{ cursor: "pointer" }}
      ></div>
    </>
  );
}
