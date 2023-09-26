let secondHand = document.querySelector("#sec");
let minuteHand = document.querySelector("#min");
let hourHand = document.querySelector("#hr");

function ClockRotating() {
  var date = new Date();
  var getSeconds = date.getSeconds() / 60;
  var getMinutes = date.getMinutes() / 60;
  var getHours = date.getHours() / 12;

  secondHand.style.transform = "rotate(" + getSeconds * -360 + "deg)";
  minuteHand.style.transform = "rotate(" + getMinutes * -360 + "deg)";
  hourHand.style.transform = "rotate(" + getHours * -360 + "deg)";
}

setInterval(ClockRotating, 1000);
