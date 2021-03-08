const express = require("express");
const app = express();

//Falando ao express que a view engine é o EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
    res.render("index")
});

app.listen(8080, ()=> {
    console.log("App Rodando!");
});