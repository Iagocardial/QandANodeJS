const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conex~]ao feita com o banco de dados");
    })
    .catch((msgErro) => {
        console.log(msgErro)
    });


//Falando ao express que a view engine é o EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

//para configurar o bodyparser para recebimento de dados
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

app.listen(8080, ()=> {
    console.log("App Rodando!");
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido! titulo = "+ titulo + " e a descricao = " + descricao);
});
