import React, { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentModal from "./components/AddStudentModal";
import Footer from "./components/Footer";
import { data as initialData } from "./data";

export default function App() {
  const [students, setStudents] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveStudent = (newStudent) => {
    const nextId = students.length
      ? Math.max(...students.map((s) => s.id)) + 1
      : 1;
    setStudents([...students, { ...newStudent, id: nextId }]);

    setShowModal(false);
    setToast({ visible: true, message: "Thêm sinh viên thành công!" });
    setTimeout(() => setToast({ visible: false, message: "" }), 3000);
  };

  const handleDeleteStudent = (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa sinh viên này?")) return;
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="app-root">
      <Header />
      <div className="container my-4">
        <StudentTable
          students={students}
          onAddClick={handleAddClick}
          onDelete={handleDeleteStudent}
        />
      </div>

      {showModal && (
        <AddStudentModal
          onClose={handleCloseModal}
          onSave={handleSaveStudent}
        />
      )}

      <Footer />

      <div className={`toast-custom ${toast.visible ? "show" : ""}`}>
        {toast.message}
      </div>
    </div>
  );
}
