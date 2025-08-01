document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form.modal-content");
  const inputTen = document.getElementById("ten");
  const inputHoDem = document.getElementById("hoDem");
  const inputDiaChi = document.getElementById("diaChi");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const ten = inputTen.value.trim();
    const hoDem = inputHoDem.value.trim();
    const diaChi = inputDiaChi.value.trim();

    // Kiểm tra điều kiện ràng buộc
    if (!ten || !hoDem || !diaChi) {
      alert("Vui lòng không để trống bất kỳ trường nào.");
      return;
    }
    if (ten.length > 15) {
      alert("Tên không được vượt quá 15 ký tự.");
      return;
    }
    if (hoDem.length > 20) {
      alert("Họ đệm không được vượt quá 20 ký tự.");
      return;
    }
    if (diaChi.length > 50) {
      alert("Địa chỉ không được vượt quá 50 ký tự.");
      return;
    }

    // Nếu hợp lệ => thêm vào mảng và cập nhật bảng
    const nguoiDungMoi = {
      ten,
      hoDem,
      diaChi,
      hoatDong: true,
    };

    danhSachNguoiDung.push(nguoiDungMoi);
    renderTable();

    // Reset form
    form.reset();
    bootstrap.Modal.getInstance(document.getElementById("addModal")).hide();
  });

  // Hàm hiển thị dữ liệu ra bảng
  function renderTable() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    danhSachNguoiDung.forEach((nguoi, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          <button class="btn btn-outline-dark btn-sm rounded-1 px-2 py-1 me-3">
            <i class="bi bi-caret-down-fill"></i>
          </button>
        </td>
        <td>
          <button class="btn btn-sm btn-primary"><i class="bi bi-eye-fill"></i></button>
          <button class="btn btn-sm btn-warning"><i class="bi bi-pencil-fill"></i></button>
          <button class="btn btn-sm btn-danger"><i class="bi bi-trash-fill"></i></button>
        </td>
        <td>${index + 1}</td>
        <td>${nguoi.ten}</td>
        <td>${nguoi.hoDem}</td>
        <td>${nguoi.diaChi}</td>
        <td>
          <div class="border border-1 border-secondary border-dashed rounded py-1">
            ${
              nguoi.hoatDong
                ? '<i class="bi bi-check-lg text-success fs-5"></i>'
                : '<i class="bi bi-x-lg text-danger fs-5"></i>'
            }
          </div>
        </td>
      `;
      tbody.appendChild(row);
    });
  }

  renderTable(); // hiển thị lần đầu
});
