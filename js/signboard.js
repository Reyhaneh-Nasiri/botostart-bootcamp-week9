const signboard = document.querySelector(".signboard");

signboard.addEventListener("click", (e) => {
  if (e.target.className === "week9") {
    location.href='./randomColor.html';
  }
});
