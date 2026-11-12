// Objet contenant les différentes routes
const routes = {
  404: "/page/404.html",
  "/home": "/page/home.html",
  "/about": "/page/about.html",
  "/background": "/page/background.html",
  "/project": "/page/project.html",
};

// Fonction qui gère les différentes location des pages HTML en fonction des URL
const handleLocation = async () => {
  if (window.location.hash === "") {
    window.location.replace("#/home");
    return;
  }
  const path = window.location.hash.replace("#", "");
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.addEventListener("hashchange", handleLocation);
handleLocation();

// Lien CONTACT : on défile jusqu'au footer sans toucher au hash,
// pour que le routeur ne le prenne pas pour une page.
document.querySelector('a[href="#contact"]').addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
