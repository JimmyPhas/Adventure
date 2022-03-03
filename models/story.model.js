module.exports = (sequelize, DataTypes) => {
    const Story = sequelize.define("story", {
      title: {
        type: DataTypes.STRING
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