//alert("Gfh");

function gameGuess() {
    var guessNum = 5;
    var ourNum = prompt("Введите число");
    if (ourNum > guessNum) {
        alert("Число должно быть меньше");
        return gameGuess();
    } else if (ourNum < guessNum) {
        alert("Число должно быть больше");
        return gameGuess();
    } else {
        return alert("Вы угадали");
    }
}
//gameGuess();



function rewinder() {
    alert("Слишком долго");
    window.close();
}

//setTimeout(reminder, 5000);



function valide() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    var reg_name = /^[a-zа-я]+$/i;
    var pass_name = /^[a-z0-9]{5-100}$/i;

    if (reg_name.test(name) == false) {
        alert("Неверное ФИО");
    }
    if (pass_name.test(password) == false) {
        alert("Неверный пароль");
    }

}



document.querySelector(".button").addEventListener("click", valide);
