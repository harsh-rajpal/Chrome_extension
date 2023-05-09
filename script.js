var date= new Date();
var hour = date.getHours();

// var name = prompt("Enter your name");
// document.getElementById("name").innerHTML = "Hello " + name + "!";
// chrome.storage.local.get(["userName"], function (result) {
//   const userName = result.userName;
  
// });

if (hour < 12) {
    document.getElementById("greet").innerHTML = "Good Morning";
}
else if (hour < 18) {
    document.getElementById("greet").innerHTML = "Good Afternoon";
}
else {
    document.getElementById("greet").innerHTML = "Good Evening";
}
