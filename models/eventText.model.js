module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("event", {
      event_text: {
        type: DataTypes.TEXT
      },
      intro: {
          type:DataTypes.BOOLEAN
      }
    });
    return Event;

  };