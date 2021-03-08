const express = require("express");
const app = express();

//Falando ao express que a view engine é o EJS
app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Empresa",
        inscritos: 8000
    });
});

app.listen(8080, ()=> {
    console.log("App Rodando!");
});