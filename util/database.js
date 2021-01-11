const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "mishka199222$", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
