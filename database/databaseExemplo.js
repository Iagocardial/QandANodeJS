const Sequelize = require("sequelize");

const connection = new Sequelize('nomedobanco', 'usuariodoBanco', 'senhaDoBanco',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;