const express = require('express');
const app = express();


const inicio = (req,res) => {
    res.end('<h1>Express inicio</h1>');
}
const saludo = (req,res) => {
    res.end('<h1>Hola express</h1>');
}

app.get('/',inicio);
app.get('/saludo',saludo);


app.listen(8000, (req,res) => {
    console.log('port:8000');
});