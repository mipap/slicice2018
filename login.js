document.getElementById("newAccount").addEventListener("click", function () {
    document.getElementById("signup").style.display = 'block';
    document.getElementById("login").style.display = 'none';
});

document.getElementById("oldAccount").addEventListener("click", function () {
    document.getElementById("login").style.display = 'block';
    document.getElementById("signup").style.display = 'none';
});