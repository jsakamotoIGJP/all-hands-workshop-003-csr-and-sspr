import { HomePage } from './public/home.js';
import { AboutPage } from './public/about.js';

import express from 'express';
const app = express();
app.use(express.static('public'));

const routes = {
    '/': HomePage,
    '/about': AboutPage,
};

app.get('*', (req, res) => {
    const currentPage = routes[req.url];
    const preRendered = currentPage?.render() ?? `<h1>404 Not Found</h1>`;

    res.status(currentPage ? 200 : 404)
    res.send(`
        <html>
        <head>
            <link rel="stylesheet" href="css/water.css">
        </head>
        <body>
            <div id="app">
                ${preRendered}
            </div>
            <script src="client.js" type="module"></script>
        </body>
        </html>`);
});

app.listen(3003, () => {
    console.log(`Server is running on http://localhost:3003/`);
});