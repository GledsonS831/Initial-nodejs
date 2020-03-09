const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send("sou burro");
});

app.get('/escola/:instituicao/:professor/:disciplina/', function(req, res){
    res.send('./home/gledson/Documentos/Test/html/test1.html');
})
app.listen(3000, function(){
    console.log("Server it's running");
});