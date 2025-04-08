// Import required modules
const express = require('express');
const app = express();
const port = 8080;

// Home Route
app.get('/', (req, res) => {
    res.send(`Welcome to the Home Page!!!
        routes: /about /contact /services`);
});

// About Route
app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send('This is the Contact Page.');
});

// Services Route
app.get('/services', (req, res) => {
    res.send('Our Services Page. ${req.url}');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at port ${port}/`);
});
