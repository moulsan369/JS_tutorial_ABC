const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');

const regiterBtn = document.getElementById('register-btn');
const inputRegis = document.querySelectorAll('.input-reg');

regiterBtn.addEventListener('click', function () {
    let isValid = checkValidate();

    if (isValid === true) {
        alert('Gửi đăng ký thành công');
    } else {
        alert('Vui lòng điền đầy đủ thông tin');
    }
});

function checkValidate() {
    let usernameValue = userName.value;
    let emailValue = userEmail.value;
    let phoneValue = userPhone.value;

    if (usernameValue === '') {
        alert("Nhập tên");
        return false;
    }

    if (emailValue === '') {
        alert("Nhập email");
        return false;
    }

    if (phoneValue === '') {
        alert("Nhập Phone");
        return false;
    }

    return true;
}
