module.exports = (sequelize, DataTypes) => {
    const Action = sequelize.define("action", {
      // primarykey
      actions_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      action_text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      result_text: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      // action_of: {
      //   type: DataTypes.TEXT,
      //   references:{
      //     model: "events",
      //     key: "event_text"
      //   }
      // }
    });
    return Action;

  };