function formatDate(dateStr) {
  if (!dateStr) return "";
  return dateStr;
}

export default function StudentTable({ students, onAddClick, onDelete }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">Danh Sách Sinh Viên</h5>
          <button className="btn btn-success" onClick={onAddClick}>
            <i className="bi bi-plus-lg me-1" /> Thêm sinh viên
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-secondary">
              <tr>
                <th>STT</th>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Giới tính</th>
                <th>Ngày sinh</th>
                <th>Ghi chú</th>
                <th className="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={8}>Chưa có dữ liệu</td>
                </tr>
              ) : (
                students.map((s, idx) => (
                  <tr key={s.id}>
                    <td>{idx + 1}</td>
                    <td>{s.code}</td>
                    <td className="text-start">{s.fullName.toUpperCase()}</td>
                    <td className="text-start">{s.email}</td>
                    <td>{s.gender}</td>
                    <td>{formatDate(s.dob)}</td>
                    <td className="text-start">{s.notes}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-outline-primary btn-sm me-1"
                        disabled
                      >
                        <i className="bi bi-pencil" />
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm me-1"
                        onClick={() => onDelete(s.id)}
                      >
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
