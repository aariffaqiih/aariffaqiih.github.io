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
const greetings = [
  "Halo",
  "Bonjour",
  "こんにちは",
  "Helló",
  "مرحبًا",
  "Olá",
  "здравей",
  "Hej",
  "你好",
  "Tere",
  "नमस्ते",
  "Hei",
  "Aloha",
  "안녕하세요",
  "Halló",
  "สวัสดี",
  "Ciao",
  "မင်္ဂလာပါ",
  "Cześć",
  "Привет",
  "Hola",
  "Салом",
  "Xin chào",
  "Hello",
];

let index = 0;
const helloWorld = document.getElementById("hello-world");

function changeGreeting() {
  helloWorld.classList.add("hidden"); // Hide current text

  setTimeout(() => {
    helloWorld.textContent = greetings[index];
    helloWorld.classList.remove("hidden");
    index = (index + 1) % greetings.length;
  }, 400);
}

setInterval(changeGreeting, 2000);

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
window.addEventListener("keydown", function (e) {
  if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
    e.preventDefault();
  }
});
