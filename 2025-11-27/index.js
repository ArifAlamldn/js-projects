// script.js
let count = 0;

const counterDisplay = document.getElementById("counter");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");

incrementBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterDisplay.textContent = count;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});
