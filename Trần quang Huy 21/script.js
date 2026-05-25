const form = document.getElementById("habitForm");
const tableBody = document.getElementById("tableBody");

let totalDays = 0;

// Hàm kiểm tra email
function checkEmail(email){

    email = email.trim();

    if(!email.endsWith("@dhcd.edu.vn")){

        alert("Email không hợp lệ");

        return false;
    }

    return true;
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    // Lấy dữ liệu
    const mssv = document.getElementById("mssv").value;
    const email = document.getElementById("email").value;
    const habit = document.getElementById("habit").value;
    const time = document.getElementById("time").value;
    const duration = parseInt(document.getElementById("duration").value);
    const note = document.getElementById("note").value;

    // Kiểm tra email
    if(!checkEmail(email)){
        return;
    }

    // Tổng số ngày
    totalDays += duration;

    // Tạo dòng dữ liệu
    const row = `
        <tr>
            <td>${mssv}</td>
            <td>${email}</td>
            <td>${habit}</td>
            <td>${time}</td>
            <td>${duration}</td>
            <td>${note}</td>
        </tr>
    `;

    // Lấy số cuối MSSV
    let lastNumber = parseInt(mssv[mssv.length - 1]);

    // MSSV lẻ -> thêm đầu bảng
    if(lastNumber % 2 != 0){

        tableBody.innerHTML = row + tableBody.innerHTML;

    }

    // MSSV chẵn -> thêm cuối bảng
    else{

        tableBody.innerHTML += row;
    }

    // Bonus
    if(totalDays > 15){

        alert("Kỷ luật tạo nên sức mạnh");
    }

    // Reset form
    form.reset();

});