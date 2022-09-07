const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.listen (3000, () => console.log("Servidor en puerto 3000"));

app.get ('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'home.html'));
});
app.get ('/home.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'home.html'));
});
app.get ('/singin.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/singin.html'));
});
app.get ('/login.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});