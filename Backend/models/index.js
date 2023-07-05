const dbConfig = require("../config/db.config.js");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

// Server Environment
const env = process.env.NODE_ENV || "development";
const config = require("../config/db.config.js")[env];

const Sequelize = require("sequelize");
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, config);
}

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ROLES = ["Admin", "Faculty", "Finance", "Parent", "Student"];

module.exports = db;
