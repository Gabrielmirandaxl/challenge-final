'use strict';

const sequelize = require("sequelize");

module.exports = {
   up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('atividades', { 
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },

        user_id: {
          type: sequelize.INTEGER,
          allowNull: false,
          references: { model: "users", key: "id"},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        descricao: {
          type: sequelize.STRING,
          allowNull: false,
        },

        datainicial: {
          type: sequelize.DATE,
          allowNull: false,
        },

        datafinal: {
          type: sequelize.DATE,
          allowNull: false,
        },
        
        created_at: {
          type: sequelize.DATE,
          allowNull: false,
        },

        updated_at: {
          type: sequelize.DATE,
          allowNull: false,
        }


      });
 
  },

down: (queryInterface, Sequelize) => {
    
   return  queryInterface.dropTable('atividades');
     
  }
};
