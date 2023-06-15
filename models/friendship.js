'use strict';
const {
  Model
} = require('sequelize');

const {User} = require('./index');


module.exports = (sequelize, DataTypes) => {
  class Friendship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Friendship.belongsTo(User , {
        foreignKey:'firstUserId'
      });
      Friendship.belongsTo(User , {
        foreignKey:'secondUserId'
      });
      
    }
  }
  Friendship.init({
    firstUserId: {
      type:DataTypes.INTEGER, allowNull:false,
      references: {
        model: User , // 'Movies' would also work
        key: 'id'
      }
    },
    secondUserId: {
      type:DataTypes.INTEGER, allowNull:false ,
      references: {
        model: User , // 'Movies' would also work
        key: 'id'
      }
    },
    currentState: {
      type:DataTypes.INTEGER, allowNull:false 
    },
  }, {
    sequelize,
    modelName: 'Friendship',
  });
  return Friendship;
};