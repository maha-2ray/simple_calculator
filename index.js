let canType = true;
let buttons = document.querySelectorAll(".button");

for (let button of buttons) {
  button.addEventListener("click", () => {
    num(button.innerHTML);
  });
}
function num(num) {
  if (canType) {
    document.querySelector("input").value += num;
  }
}
function cancel() {
  if (canType) {
    document.querySelector("input").value = "";
  }
}
function removeVal() {
  if (canType) {
    let rem = document.querySelector("input").value;
    let removed = rem.slice(0, -1);
    document.querySelector("input").value = removed;
  }
}
function getVal() {
  if (canType) {
    let val = document.querySelector("input").value;
    let result = eval(val);
    document.querySelector("input").value = result;
  }
}
let switchButton = document.getElementById("switch");
setOn();
switchButton.addEventListener("click", function (e) {
  if (switchButton.innerHTML === "OFF") {
    setOn();
  } else {
    setOff();
  }
  switchState();
});
function setOn() {
  switchButton.innerHTML = "ON";
  switchButton.style.backgroundColor = "green";
}
function setOff() {
  switchButton.innerHTML = "OFF";
  switchButton.style.backgroundColor = "red";
}
function switchState() {
  canType = !canType;
}
document.querySelector("input").addEventListener("keydown", (event) => {
  addListeners(event);
});

// Listening to the keys in the computer keyboard
function addListeners(event) {
  if (event.key === "Enter") {
    getVal();
  } else if (event.key === "Backspace") {
    removeVal();
  } else if (Number(event.key)) {
    console.log("Hello, ", event.key);
    num(Number(event.key));
  }
}
