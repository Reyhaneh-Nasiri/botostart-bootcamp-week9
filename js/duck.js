const duck = document.querySelector(".duck");

duck.addEventListener("click", () => {
  const duckSqueakSound = new Audio("../assets/sounds/duck-squeak-toy.mp3");
  duckSqueakSound.play();
});

floor.addEventListener("click", (e) => {
  if (body.classList.contains("on")) {
    if (e.clientX < duck.offsetLeft) {
      duck.style.transform = "scaleX(1)";
    } else {
      duck.style.transform = "scaleX(-1)";
    }
    duck.style.left = e.clientX - 20 + "px";
    duck.classList.remove("walkAnimation");
    requestAnimationFrame(() => {
      duck.classList.add("walkAnimation");
    });
  }
});
