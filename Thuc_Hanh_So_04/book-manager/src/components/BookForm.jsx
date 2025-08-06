import React, { useState, useEffect } from "react";

function BookForm({ onAdd, onUpdate, editingBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  // Mỗi khi editingBook thay đổi, nạp dữ liệu vào form
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
    } else {
      setTitle("");
      setAuthor("");
      setYear("");
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !year) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (editingBook) {
      // Update
      onUpdate({
        ...editingBook,
        title,
        author,
        year: parseInt(year, 10),
      });
    } else {
      // Add
      const newBook = {
        id: Date.now(),
        title,
        author,
        year: parseInt(year, 10),
      };
      onAdd(newBook);
    }
    // Xóa trắng form
    setTitle("");
    setAuthor("");
    setYear("");
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="mb-3">{editingBook ? "Sửa Sách" : "Thêm Sách"}</h2>

      <div className="mb-3">
        <label className="form-label">Tiêu đề:</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tác giả:</label>
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Năm XB:</label>
        <input
          type="number"
          className="form-control"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {editingBook ? "Cập nhật" : "Thêm"}
      </button>
    </form>
  );
}

export default BookForm;
