document.addEventListener("DOMContentLoaded", function () {
  const h1Elements = document.querySelectorAll(".home h1");
  h1Elements.forEach((h1Element) => {
    h1Element.classList.add("animate");
  });
});

const helloText = document.getElementById("helloText");
const languages = [
  "Halo!",
  "Hello!",
  "¡Hola!",
  "Bonjour!",
  "Ciao!",
  "Hallo!",
  "你好!",
  "こんにちは!",
  "안녕하세요!",
  "Olá!",
];
let index = 0;

function changeHelloText() {
  helloText.textContent = languages[index];
  index = (index + 1) % languages.length;
}

setInterval(changeHelloText, 1500);

const aboutSection = document.getElementById("about");

function checkScroll() {
  let triggerBottom = window.innerHeight * 0.9;
  let aboutTop = aboutSection.getBoundingClientRect().top;

  if (aboutTop < triggerBottom) {
    aboutSection.classList.add("show");
  } else {
    aboutSection.classList.remove("show");
  }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);

checkScroll();

const portfolioSection = document.getElementById("portfolio");

function checkScrollPortfolio() {
  let triggerBottom = window.innerHeight * 0.9;
  let portfolioTop = portfolioSection.getBoundingClientRect().top;

  if (portfolioTop < triggerBottom) {
    portfolioSection.classList.add("show");
  } else {
    portfolioSection.classList.remove("show");
  }
}

window.addEventListener("scroll", checkScrollPortfolio);
window.addEventListener("resize", checkScrollPortfolio);

checkScrollPortfolio();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cvLink").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("overlay").style.display = "flex";
  });

  document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none";
  });

  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("emailInput").value;

      console.log("Email yang diinput: " + email);
      document.getElementById("overlay").style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cvLink").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("overlay").style.display = "flex";
  });

  document
    .getElementById("cvLinkFooter")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("overlay").style.display = "flex";
    });
});

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah perilaku default dari form

    // Ambil nilai email dari input
    const email = document.getElementById("emailInput").value;

    // Kirim data ke Formspree
    fetch("https://formspree.io/f/xoqgakoo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        // Tambahkan kode untuk menampilkan pesan sukses atau apa pun yang Anda inginkan di sini
        console.log("Formulir terkirim!");
        // Menutup popup setelah formulir terkirim
        document.getElementById("overlay").style.display = "none";
      })
      .catch((error) => console.error("Error:", error));
  });
