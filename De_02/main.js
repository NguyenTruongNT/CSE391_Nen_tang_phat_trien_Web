$(document).ready(function () {
  const $tableBody = $("#tableBody");
  const $form = $(".modal-content");
  const $khachHangInput = $("#khachHang");
  const $nhanVienInput = $("#nhanVien");
  const $soTienInput = $("#soTien");

  function renderTable(data) {
    $tableBody.empty();
    data.forEach((gd) => {
      const row = `
        <tr>
          <td>×</td>
          <td>
            <button class="btn btn-sm btn-primary"><i class="bi bi-eye"></i></button>
            <button class="btn btn-sm btn-warning"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-sm btn-danger">X</button>
          </td>
          <td>${gd.id}</td>
          <td>${gd.khachHang}</td>
          <td>${gd.nhanVien}</td>
          <td>${gd.soTien.toLocaleString("vi-VN")}</td>
          <td>${gd.ngayMua}</td>
        </tr>
      `;
      $tableBody.append(row);
    });
  }

  function getCurrentVietnameseDatetime() {
    const now = new Date();
    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return now.toLocaleString("vi-VN", options);
  }

  function validateForm(khachHang, nhanVien, soTien) {
    const errors = [];

    if (!khachHang.trim()) {
      errors.push("Vui lòng nhập tên khách hàng.");
    } else if (khachHang.length > 30) {
      errors.push("Tên khách hàng không được vượt quá 30 ký tự.");
    }

    if (!nhanVien.trim()) {
      errors.push("Vui lòng nhập tên nhân viên.");
    } else if (nhanVien.length > 30) {
      errors.push("Tên nhân viên không được vượt quá 30 ký tự.");
    }

    if (!soTien.trim()) {
      errors.push("Vui lòng nhập số tiền.");
    } else if (isNaN(Number(soTien)) || Number(soTien) <= 0) {
      errors.push("Số tiền phải là một số lớn hơn 0.");
    }

    return errors;
  }

  $form.on("submit", function (e) {
    e.preventDefault();

    const khachHang = $khachHangInput.val();
    const nhanVien = $nhanVienInput.val();
    const soTien = $soTienInput.val();

    const errors = validateForm(khachHang, nhanVien, soTien);

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const newGiaoDich = {
      id: Math.floor(Math.random() * 10000),
      khachHang,
      nhanVien,
      soTien: Number(soTien),
      ngayMua: getCurrentVietnameseDatetime(),
    };

    giaoDichData.push(newGiaoDich);
    renderTable(giaoDichData);

    $khachHangInput.val("");
    $nhanVienInput.val("");
    $soTienInput.val("");

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("addModal")
    );
    modal.hide();
  });

  renderTable(giaoDichData);
});
