$(document).ready(function () {
  const $form = $("#addEmployeeForm");
  const $tableBody = $("#employeeTableBody");
  const $nameInput = $("#name");
  const $emailInput = $("#email");
  const $addressInput = $("#address");
  const $phoneInput = $("#phone");

  // Thêm span hiển thị lỗi sau mỗi input
  $([$nameInput, $emailInput, $addressInput, $phoneInput]).each(function () {
    const $input = $(this);
    const $errorSpan = $("<div></div>")
      .addClass("text-danger mt-1 error-message")
      .css("font-size", "0.9rem");
    $input.after($errorSpan);
  });

  // Hàm render bảng nhân viên
  function renderTable() {
    $tableBody.empty();
    $.each(data, function (index, employee) {
      const row = `
        <tr>
          <td><input type="checkbox" name="employeeCheckbox" id="checkbox-${index}" /></td>
          <td>${employee.name}</td>
          <td>${employee.email}</td>
          <td>${employee.address}</td>
          <td>${employee.phone}</td>
          <td>
              <button class="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-pencil-square text-warning"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </button>
              <button
                class="btn"
                onclick="return confirm('Bạn có chắc chắn muốn xóa nhân viên này?')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-trash text-danger"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                  />
                  <path
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                  />
                </svg>
              </button>
            </td>
        </tr>
      `;
      $tableBody.append(row);
    });
  }

  renderTable();

  // Validate email
  function isValidEmail(email) {
    return /^[^@]+@[^@]+\.[^@]+$/.test(email);
  }

  // Validate SĐT
  function isValidPhone(phone) {
    return /^0\d{9}$/.test(phone);
  }

  // Hiển thị lỗi
  function setError($input, message) {
    $input.next(".error-message").text(message);
  }

  // Xử lý thêm nhân viên
  $form.on("submit", function (e) {
    e.preventDefault();

    const name = $nameInput.val().trim();
    const email = $emailInput.val().trim();
    const address = $addressInput.val().trim();
    const phone = $phoneInput.val().trim();

    let isValid = true;

    if (!name) {
      setError($nameInput, "Tên không được để trống.");
      isValid = false;
    } else {
      setError($nameInput, "");
    }

    if (!email) {
      setError($emailInput, "Email không được để trống.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setError($emailInput, "Email không hợp lệ.");
      isValid = false;
    } else {
      setError($emailInput, "");
    }

    if (!address) {
      setError($addressInput, "Địa chỉ không được để trống.");
      isValid = false;
    } else {
      setError($addressInput, "");
    }

    if (!phone) {
      setError($phoneInput, "Số điện thoại không được để trống.");
      isValid = false;
    } else if (!isValidPhone(phone)) {
      setError($phoneInput, "Số điện thoại phải 10 số và bắt đầu bằng 0.");
      isValid = false;
    } else {
      setError($phoneInput, "");
    }

    if (!isValid) return;

    // Thêm vào mảng
    const newEmployee = { name, email, address, phone };
    data.push(newEmployee);
    renderTable();
    $form[0].reset();

    // Reset lỗi
    $([$nameInput, $emailInput, $addressInput, $phoneInput]).each(function () {
      setError($(this), "");
    });

    // Đóng modal
    const modal = bootstrap.Modal.getInstance($("#addEmployeeModal")[0]);
    modal.hide();
  });

  // Xử lý xóa nhân viên
  $tableBody.on("click", ".btn-delete", function () {
    const index = $(this).data("index");
    if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
      data.splice(index, 1);
      renderTable();
    }
  });
});
