function validation() {
    var username = getElementbyId('username');
    var password = getElementbyId('password');
    var phone = getElementbyId('phone');
    var email = getElementbyId('email');

    var userReg = /^[a-z]{5,9}$/;
    var passReg = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[#])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]{8,24})$/;
    var phoneReg = /^\+62?([0-9]{3})[-]?([0-9]{3,4})[-]?([0-9]{4,6})$/;
    var emailReg = /^[A-Za-z]{2,10})?\@?([a-z]{2,7})?\.([a-z]{2,4}$/;
    
    if (userReg.test(username)) {
        document.getElementbyId('invaliduser').innerHTML = " ";
    } else {
        document.getElementById('invaliduser').innerHTML = "Username is Invalid";

        return false;
    }
    if (passReg.test(password)) {
        document.getElementbyId('invalidpass').innerHTML = " ";
    } else {
        document.getElementById('invalidpass').innerHTML = "Password is Invalid";

        return false;
    }
    if (phoneReg.test(phone)) {
        document.getElementbyId('invaliphone').innerHTML = " ";
    } else {
        document.getElementById('invalidphone').innerHTML = "Phone Number is Invalid";

        return false;
    }
    if (emailReg.test(email)) {
        document.getElementbyId('invalidemail').innerHTML = " ";
    } else {
        document.getElementById('invalidpemail').innerHTML = "Email is Invalid";

        return false;
    }
}