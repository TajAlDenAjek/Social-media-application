'use strict';
const {
  Model
} = require('sequelize');

const {GroupUser } = require('./index');
const {User } = require('./index') ;
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.belongsToMany(User , {through: GroupUser } );
    }
  }
  Group.init({
    groupName:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    },
    groupDescription: DataTypes.INTEGER,
    groupPicture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};