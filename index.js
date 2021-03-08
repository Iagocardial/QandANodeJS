const express = require("express");
const app = express();

app.get("/", () => {
    res.send("Bem vindo ao meu site");
});

app.listen(8080, ()=> {

});