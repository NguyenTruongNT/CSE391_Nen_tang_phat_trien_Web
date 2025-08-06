import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "React Cơ Bản", author: "Nguyễn Văn A", year: 2023 },
    { id: 2, title: "JavaScript Nâng Cao", author: "Trần Thị B", year: 2022 },
  ]);

  // const [books, setBooks] = useState([]);
  // Load từ localStorage khi component mount
  useEffect(() => {
    const stored = localStorage.getItem("books");
    if (stored) {
      setBooks(JSON.parse(stored));
    }
  }, []);

  // Lưu mỗi khi books thay đổi
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const [editingBook, setEditingBook] = useState(null);
  // Hàm thêm
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Hàm cập nhật
  const handleUpdateBook = (updatedBook) => {
    const newList = books.map((b) =>
      b.id === updatedBook.id ? updatedBook : b
    );
    setBooks(newList);
    setEditingBook(null); // Thoát chế độ sửa
  };

  // Khi bấm nút "Sửa" trong BookList
  const handleEditClick = (book) => {
    setEditingBook(book);
  };
  const handleDeleteBook = (id) => {
    const newList = books.filter((b) => b.id !== id);
    setBooks(newList);
  };
  return (
    <div className="container mt-2">
      <div className="bg-white p-1 rounded shadow-sm">
        <h1 className="text-center mb-4 text-primary">📚 Quản Lý Sách</h1>
        <hr className="my-4" />
        <BookForm
          onAdd={handleAddBook}
          onUpdate={handleUpdateBook}
          editingBook={editingBook}
        />

        <hr className="my-4" />

        <BookList
          books={books}
          onEdit={handleEditClick}
          onDelete={handleDeleteBook}
        />
      </div>
    </div>
  );
}

export default App;
