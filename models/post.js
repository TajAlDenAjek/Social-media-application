'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Post.belongsTo(models.User, { foreignKey: 'userId' });
        Post.hasMany(models.Comment);
        Post.hasMany(models.Reaction);
        Post.hasOne(models.GroupPost);
    }
  }
  Post.init({
    text: DataTypes.STRING,
    picture: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW 
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};