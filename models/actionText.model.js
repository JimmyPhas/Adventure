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
      // foreignkey
      // action_of: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: eventTextModel,
      //     key: "event_id"
      //   }
      // }
    });
    return Action;

  };