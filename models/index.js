const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.stories = require("./story.model.js")(sequelize, Sequelize);
db.events = require("./eventText.model.js")(sequelize, Sequelize);
db.actions = require("./actionText.model.js")(sequelize, Sequelize);

db.events.belongsTo(db.stories, { foreignKey: "for_story", onDelete: 'cascade' });
db.actions.belongsTo(db.events, { foreignKey: "action_of", onDelete: 'cascade' });

module.exports = db;
