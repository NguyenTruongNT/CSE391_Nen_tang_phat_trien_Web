const form = document.querySelector("form");
const tableBody = document.querySelector("table tbody");
let selectedRow = null;

function showAlert(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast align-items-center text-bg-${type} border-0 show mb-2`;
  toast.role = "alert";
  toast.ariaLive = "assertive";
  toast.ariaAtomic = "true";
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
    toast.addEventListener("transitionend", () => toast.remove());
  }, 3000);
}

function validateForm(inputs) {
  const [maSV, hoTen, email] = inputs;
  if (!maSV.value || !hoTen.value || !email.value) {
    showAlert("Vui lòng điền đầy đủ thông tin!", "danger");
    return false;
  }

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email.value)) {
    showAlert("Email không hợp lệ!", "danger");
    return false;
  }

  if (hoTen.value.trim().length < 5) {
    showAlert("Họ tên quá ngắn!", "danger");
    return false;
  }

  return true;
}

function resetForm() {
  form.reset();
  selectedRow = null;
  form.querySelector("button").textContent = "Thêm sinh viên";
}

function renderRow(index, data) {
  return `
    <tr>
      <td>${index}</td>
      <td>${data.maSV}</td>
      <td>${data.hoTen}</td>
      <td>${data.email}</td>
      <td>${data.gioiTinh}</td>
      <td>${data.ngaySinh}</td>
      <td class="text-center">
        <a href="#" class="btn btn-outline-primary btn-sm me-1 btn-edit" title="Sửa">
          <i class="fas fa-edit"></i>
        </a>
        <a href="#" class="btn btn-outline-danger btn-sm btn-delete" title="Xóa">
          <i class="fas fa-trash-alt"></i>
        </a>
      </td>
    </tr>`;
}

function updateTableIndex() {
  [...tableBody.rows].forEach((row, i) => {
    row.cells[0].textContent = i + 1;
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  const maSV = inputs[0];
  const hoTen = inputs[1];
  const email = inputs[2];
  const ngaySinh = inputs[3];
  const gioiTinh = form.querySelector('input[name="gender"]:checked')
    .nextElementSibling.textContent;
  const ghiChu = inputs[5];

  if (!validateForm([maSV, hoTen, email])) return;

  const data = {
    maSV: maSV.value,
    hoTen: hoTen.value,
    email: email.value,
    ngaySinh: ngaySinh.value,
    gioiTinh,
    ghiChu: ghiChu.value,
  };

  if (selectedRow) {
    selectedRow.cells[1].textContent = data.maSV;
    selectedRow.cells[2].textContent = data.hoTen;
    selectedRow.cells[3].textContent = data.email;
    selectedRow.cells[4].textContent = data.gioiTinh;
    selectedRow.cells[5].textContent = data.ngaySinh;
    showAlert("Cập nhật sinh viên thành công!");
  } else {
    const newRow = tableBody.insertRow();
    newRow.innerHTML = renderRow(tableBody.rows.length + 1, data);
    showAlert("Thêm sinh viên thành công!");
  }

  resetForm();
  updateTableIndex();
});

tableBody.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target.closest("a");
  if (!target) return;

  const row = target.closest("tr");

  if (target.classList.contains("btn-delete")) {
    if (confirm("Bạn có chắc muốn xóa sinh viên này?")) {
      row.remove();
      showAlert("Xóa sinh viên thành công!", "warning");
      updateTableIndex();
    }
  }

  if (target.classList.contains("btn-edit")) {
    selectedRow = row;
    const cells = row.cells;

    form.querySelectorAll("input, textarea")[0].value = cells[1].textContent;
    form.querySelectorAll("input, textarea")[1].value = cells[2].textContent;
    form.querySelectorAll("input, textarea")[2].value = cells[3].textContent;
    form.querySelectorAll("input, textarea")[3].value = cells[5].textContent;
    form.querySelectorAll("textarea")[0].value = ""; // Ghi chú không lưu

    const genderValue = cells[4].textContent;
    form.querySelectorAll('input[name="gender"]').forEach((radio) => {
      const label = radio.nextElementSibling.textContent;
      radio.checked = label === genderValue;
    });

    form.querySelector("button").textContent = "Cập nhật sinh viên";
    showAlert("Tải dữ liệu sinh viên lên form thành công", "info");
  }
});
