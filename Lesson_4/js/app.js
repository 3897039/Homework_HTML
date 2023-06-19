 function name_input() {
   var user_name = document.getElementById("name").value;
   console.log(user_name);
   document.getElementById("user_name").innerText = "Привет, " + user_name + ")))";
   document.getElementById("name").value = "";
 }
//let x = prompt("Здравствуйте! Как вас Зовут?")
 //alert(`Привет, ${x}!`)

 function send(){
    var message = document.getElementById("message").value;
    var chat_name = document.getElementById("chat_name").value;
    console.log(message);
    document.getElementById("message1").innerText = chat_name + ": " + message;
    document.getElementById("message").value = ""; //очистить сообщение
   //let arr = [function(app) {alert(`${x}`)}];
    //console.log(message)  //вывод в консоль
 }

 