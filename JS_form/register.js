const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');

const regiterBtn= document.getElementById('register-btn');
const inputRegis= document.querySelectorAll('.input-reg');


btnRegister.addEventListener('click', function () {
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
});

function checkValidate() {
    let usernameValue = userName.value;
    let emailValue = userEmail.value;
    let phoneValue = userPhone.value;

    let isCheck = true;

    if (usernameValue == '') {
        setError(userName, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(userName);
    }

    if (emailValue == '') {
        setError(userEmail, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(userEmail, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(userEmail);
    }

    if (phoneValue == '') {
        setError(userPhone, 'Số điện thoại không được để trống');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(userPhone, 'Số điện thoại không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(userPhone);
    }

    return isCheck;
}
