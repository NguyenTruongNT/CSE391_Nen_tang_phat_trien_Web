$(document).ready(function () {
  const $form = $("form.modal-content");
  const $inputTen = $("#ten");
  const $inputHoDem = $("#hoDem");
  const $inputDiaChi = $("#diaChi");
  const $tbody = $("tbody");

  // Hiển thị dữ liệu từ data.js
  renderTable();

  $form.on("submit", function (e) {
    e.preventDefault();

    const ten = $inputTen.val().trim();
    const hoDem = $inputHoDem.val().trim();
    const diaChi = $inputDiaChi.val().trim();

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

    const nguoiDungMoi = {
      ten,
      hoDem,
      diaChi,
      hoatDong: true,
    };

    danhSachNguoiDung.push(nguoiDungMoi);
    renderTable();

    // Hiển thị thông báo thành công
    alert("Thêm người dùng thành công!");

    $form[0].reset();
    bootstrap.Modal.getInstance(document.getElementById("addModal")).hide();
  });

  function renderTable() {
    $tbody.empty();

    $.each(danhSachNguoiDung, function (index, nguoi) {
      const hoatDongIcon = nguoi.hoatDong
        ? '<i class="bi bi-check-lg text-success fs-5"></i>'
        : '<i class="bi bi-x-lg text-danger fs-5"></i>';

      const row = `
        <tr>
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
              ${hoatDongIcon}
            </div>
          </td>
        </tr>
      `;
      $tbody.append(row);
    });
  }
});
