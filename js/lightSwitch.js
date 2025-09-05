const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const lightSwitchSound = new Audio("../assets/sounds/light-switch.mp3");
  lightSwitchSound.play();
  body.classList.toggle("on");
});
