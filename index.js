const express = require("express");
const app = express();

//Falando ao express que a view engine é o EJS
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, ()=> {
    console.log("App Rodando!");
});