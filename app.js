const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})

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