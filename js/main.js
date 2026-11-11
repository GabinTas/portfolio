// ROUTEUR qui traite les changements d'url.
const route= (event)=>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

// Objet contenant les différentes routes
const routes = {
    404: "/page/404.html",
    "/home": "/page/home.html",
    "/about": "/page/about.html",
    "/background": "/page/background.html",
    "/project": "/page/project.html",
};

// Fonction qui gère les différentes location des pages HTML en fonction des URL
const handleLocation = async () =>{
     if (window.location.hash === "") {
        window.location.replace("#/home");
        return;
    }
    const path = window.location.hash.replace("#","");      
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data)=>data.text());
    document.getElementById("main-page").innerHTML= html;
}

window.onpopstate = handleLocation;
window.route = route;

window.addEventListener("hashchange", handleLocation);
handleLocation();