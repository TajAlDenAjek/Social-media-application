'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
          isEmail:true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
          min:8
        }
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      picturePath: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING,
        validate:{
          isIn:[ ['male' , 'female']]
        }
      },
      birthday: {
        type: Sequelize.DATE
      },
      country: {
        type: Sequelize.STRING
      },
      socket_io_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW 
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};