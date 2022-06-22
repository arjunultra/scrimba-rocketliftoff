const countdownDisplay = document.getElementById("countdown-display");
const rocket = document.getElementById("rocket");
let timeRemaining = 60;
let coundownDisplay = document.getElementById("countdown-display");
setInterval(updateCounter, 100);
function updateCounter() {
  timeRemaining--;
  coundownDisplay.textContent = timeRemaining;
  if (timeRemaining < 0) {
    coundownDisplay.textContent = "Lift-Off !";
    rocket.classList.add("rocket-animate");
  }
}

updateCounter();

// Task:
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation

// Stretch goals:
// 1) Add fire under the rocket.
// 2) Randomly don’t launch the rocket when the timer reaches 0.
