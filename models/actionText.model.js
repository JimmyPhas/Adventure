module.exports = (sequelize, DataTypes) => {
    const Action = sequelize.define("action", {
      action_text: {
        type: DataTypes.TEXT
      },
      result_text: {
        type: DataTypes.INTEGER
      }
    });
    return Action;

  };