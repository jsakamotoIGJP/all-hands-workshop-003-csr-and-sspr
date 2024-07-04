import { HomePage } from "./home.js";
import { AboutPage } from "./about.js";
//await new Promise(resolve => setTimeout(resolve, 2000));

const routes = {
    '/': HomePage,
    '/about': AboutPage,
};

let currentPage = null;

const render = (option) => {
    if (currentPage) currentPage.detach?.apply(currentPage);

    const path = window.location.pathname;
    currentPage = routes[path];

    const rootDOM = document.getElementById('app');
    if (currentPage) {
        if (!option?.hydration) rootDOM.innerHTML = currentPage.render();
        currentPage.attach?.apply(currentPage);
    }
    else rootDOM.innerHTML = `<h1>404 Not Found</h1>`;
}

document.addEventListener('click', (e) => {
    if (e.target.href && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        window.history.pushState(null, null, e.target.href);
        render();
    }
});

render();





