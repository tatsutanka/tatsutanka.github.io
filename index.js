let secondHand = document.querySelector("#sec");
let minuteHand = document.querySelector("#min");
let hourHand = document.querySelector("#hr");

let info_box1 = document.querySelector("#box1 p");
let info_box2 = document.querySelector("#box2 p");

function ClockRotating() {
  var date = new Date();
  var getSeconds = date.getSeconds() / 60;
  var getMinutes = date.getMinutes() / 60;
  var getHours = date.getHours() / 12;

  secondHand.style.transform = "rotate(" + getSeconds * -360 + "deg)";
  minuteHand.style.transform = "rotate(" + getMinutes * -360 + "deg)";
  hourHand.style.transform = "rotate(" + getHours * -360 + "deg)";
  console.log("chegou clock");
}

function InfoBox() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var hours = date.getHours();
  var getAmPm =
    hours >= 12 ? "🌙 PM : Passamos de 12:00" : "☀️ AM: Passamos de 00:00";

  info_box1.textContent = day + "/" + month + "/" + year;
  info_box2.textContent = getAmPm;
  console.log("Chegou Info_box");
}

setInterval(ClockRotating, 1000);
setInterval(InfoBox, 1000);
