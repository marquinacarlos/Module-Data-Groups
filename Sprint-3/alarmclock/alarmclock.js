function setAlarm() {
  let timeRemaining = parseInt(document.getElementById("alarmSet").value);
  const heading = document.getElementById("timeRemaining");

  function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, "0");
    const seconds = (timeRemaining % 60).toString().padStart(2, "0");
    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
  }

  updateDisplay();

  const timer = setInterval(function () {
    timeRemaining--;
    updateDisplay();
    if (timeRemaining === 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
