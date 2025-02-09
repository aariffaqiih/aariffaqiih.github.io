function toggleHamburger() {
  document.querySelector(".nav-links").classList.toggle("active");
}
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
window.onload = function () {
  createRain();
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
  setTimeout(() => {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, 2000);
};
function createRain() {
  const rain = document.getElementById("rain");
  const numberOfDrops = 100;
  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = Math.random() * 2 + 2 + "s";
    drop.style.animationDelay = Math.random() * 2 + "s";
    rain.appendChild(drop);
  }
}
