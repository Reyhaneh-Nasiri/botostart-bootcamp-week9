const duck = document.querySelector(".duck");

duck.addEventListener("click", () => {
  const duckSqueakSound = new Audio("../assets/sounds/duck-squeak-toy.mp3");
  duckSqueakSound.play();
});

floor.addEventListener("click", (e) => {
  if (body.classList.contains("on")) {
    if (e.clientX < duck.offsetLeft) {
      duck.classList.remove(("moveRight"))
      duck.classList.add(("moveLeft"))
    } else {
      duck.classList.remove(("moveLeft"))
      duck.classList.add(("moveRight"))
    }
    duck.style.left = e.clientX - 20 + "px";
    duck.classList.remove("walkAnimation");
    requestAnimationFrame(() => {
      duck.classList.add("walkAnimation");
    });
  }
});
