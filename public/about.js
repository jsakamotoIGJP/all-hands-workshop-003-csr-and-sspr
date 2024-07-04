export const AboutPage = {
    render: () => `
        <h1>About</h1>
        <p>Welcome to the about page</p>
        <p>Go back to the <a href="/">home page</a></p>
        <p>Current date time is <span id="date-time">${new Date().toLocaleString()}</span></p>`,

    _timerId: null,

    attach: () => {
        const dateTimeDOM = document.getElementById('date-time');
        const updateDateTime = () => {
            dateTimeDOM.textContent = new Date().toLocaleString();
        };
        AboutPage._timerId = setInterval(updateDateTime, 1000);
    },

    detach: () => {
        clearInterval(AboutPage._timerId);
    },
}