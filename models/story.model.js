module.exports = (sequelize, DataTypes) => {
    const Story = sequelize.define("story", {
      // primarykey
      story_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      author: {
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.BOOLEAN
      }
    });
    return Story;

  };