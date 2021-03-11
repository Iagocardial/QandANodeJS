const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas', 'root', 'iago1234',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;