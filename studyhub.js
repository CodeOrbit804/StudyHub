fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

let button = document.getElementById("btnmenu");
let menu = document.getElementById("menu");

button.addEventListener("click", function() {
  menu.classList.toggle("open");
  if(menu.classList.contains("open")) {
    button.innerHTML = "✕" ;}
    else{
    button.innerHTML = "☰";
  }
}); 
document.addEventListener("click",function(event) {
  if(!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("open");
    button.innerHTML =  "☰";
  }
}); 

  });

