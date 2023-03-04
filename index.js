let stopButton = document.getElementById("stopButton");
let redLight = document.getElementById("stopLight");
stopButton.addEventListener("click", function () {
  redLight.classList.toggle("stop");
});

let slowButton = document.getElementById("slowButton");
let yellowLight = document.getElementById("slowLight");
slowButton.addEventListener("click", function () {
  yellowLight.classList.toggle("slow");
});

let goButton = document.getElementById("goButton");
let greenLight = document.getElementById("goLight");
goButton.addEventListener("click", function () {
  greenLight.classList.toggle("go");
});

let buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseenter", function (event) {
    buttonLog(event.target.innerText);
  });
}

goButton.addEventListener("mouseenter", function () {
  goLight.classList.toggle("go");
});
goButton.addEventListener("mouseleave", function () {
  goLight.classList.toggle("go");
});

slowButton.addEventListener("mouseenter", function () {
  slowLight.classList.toggle("slow");
});
slowButton.addEventListener("mouseleave", function () {
  slowLight.classList.toggle("slow");
});

stopButton.addEventListener("mouseenter", function () {
  stopLight.classList.toggle("stop");
});
stopButton.addEventListener("mouseleave", function () {
  stopLight.classList.toggle("stop");
});

let leftButton = buttons.forEach((button) => {
  button.addEventListener("mouseleave", (event) => {
    buttonLogOut(event.target.textContent);
  });
});

function buttonLog(buttonName) {
  console.log(`Enter ${buttonName} button`);
}

function buttonLogOut(buttonName) {
  console.log(`Left ${buttonName} button`);
}
