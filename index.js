const express = require("express");
const app = express();

//Falando ao express que a view engine é o EJS
app.set('view engine', 'ejs');

app.get("/", () => {
    res.send("Bem vindo ao meu site");
});

app.listen(8080, ()=> {
    console.log("App Rodando!");
});