 let x = prompt("Здравствуйте! Как вас Зовут?")
 alert(`Привет, ${x}!`)

 function app(){
    var message = document.getElementById("text").value;
    document.getElementById("message1").innerText = message;
    document.getElementById("text").value = ''; //очистить сообщение
    //let arr = [function(app) {alert(`${x}`)}];
    //console.log(message)  //вывод в консоль
 }

 