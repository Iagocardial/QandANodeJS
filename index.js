const express = require("express");
const app = express();

//Falando ao express que a view engine é o EJS
app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    let exibirMsg = true;

    let produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-Cola", preco: 5},
        {nome: "Leite", preco: 1.15},
        {nome: "Carne", preco: 15},
        {nome: "Red-Bull", preco: 6},
        {nome: "Nescau", preco: 6},
    ];

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Empresa",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080, ()=> {
    console.log("App Rodando!");
});