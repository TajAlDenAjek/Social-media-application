'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupUser.init({
    UserId: {
      type:DataTypes.INTEGER,
      references:{
        model:{
          tableName:'Users'
        },
        key:'id'
      }
    },
    GroupId: {
      type:DataTypes.INTEGER,
      references:{
        model:{
          tableName:'Groups'
        },
        key:'id'
      }
    },
    currentState: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GroupUser',
  });
  return GroupUser;
};