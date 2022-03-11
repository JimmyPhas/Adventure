module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("event", {
      // primarykey
      event_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      event_text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      intro: {
          type:DataTypes.BOOLEAN,
          allowNull: false
      },
      // for_story: {
      //   type: DataTypes.STRING,
      //   references: {
      //     model: "stories",
      //     key: "title"
      //   }
      // }
    });
    return Event;

  };