const eventTextModel = require("./eventText.model");

module.exports = (sequelize, DataTypes) => {
    const Action = sequelize.define("action", {
      // primarykey
      actions_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      action_text: {
        type: DataTypes.TEXT
      },
      result_text: {
        type: DataTypes.INTEGER
      },
    });
    return Action;

  };