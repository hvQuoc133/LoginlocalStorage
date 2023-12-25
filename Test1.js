
function siGin() {
    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;

    if (userName !== '' && passWord !== '') {
        localStorage.setItem('userName', userName);
        localStorage.setItem('passWord', passWord);
        alert('Sigin successful');
        window.location.href = "Test.html";
    }else{
        alert('Sigin failed');
    }
}