const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

const links = document.querySelectorAll("#nav a");

const btnArriba = document.querySelector(".btn-arriba");

// Menú para dispositivos móviles
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});

// Scroll suave para enlaces de navegación
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});

// Botón para subir al inicio
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) btnArriba.style.display = "block";
  else btnArriba.style.display = "none";
});

btnArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
