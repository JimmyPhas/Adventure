const storyModel = require("./story.model");

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("event", {
      // primarykey
      event_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      event_text: {
        type: DataTypes.TEXT
      },
      intro: {
          type:DataTypes.BOOLEAN
      },
      // foreignkey
      // Story: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: storyModel,
      //     key: "story_id"
      //   }
      // }
    });
    return Event;

  };