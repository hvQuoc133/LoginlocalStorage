
function loGin() {
    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;

    var savedUserName = localStorage.getItem('userName');
    var savedPassWord = localStorage.getItem('passWord');

    if (userName === savedUserName && passWord === savedPassWord) {
        alert('Login success');
        window.location.href = 'https://www.facebook.com';
    } else {
        alert('Login failed');
    }
}