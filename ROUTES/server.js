const express = require('express'); 
const app = express();

const port = 1812;

app.get('/', (req, res) => {
    res.send('Server created....');
});

app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact page.');
});

app.listen(port, () => {
    console.log('Server is running');
});