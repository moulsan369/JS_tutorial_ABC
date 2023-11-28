const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');

const regiterBtn= document.getElementById('register-btn');
const inputRegis= document.querySelectorAll('.input-reg');


regiterBtn.addEventListener('click', function () {
    let isValid = checkValidate();

    if (isValid == true) {
        alert('Gửi đăng ký thành công');
    } return false;
});

function checkValidate() {
    let usernameValue = userName.value;
    let emailValue = userEmail.value;
    let phoneValue = userPhone.value;

    if (usernameValue == ''){
        alert("Nhận tên");
        return false;
    }
    

    if (emailValue == ''){
        alert("Nhận email");
        return false;
    }
    

    if (phoneValue == ''){
        alert("Nhập Phone");
        return false;    
    }
    
}
