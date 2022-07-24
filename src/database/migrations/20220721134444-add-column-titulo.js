'use strict';

module.exports = {
  up: (queryInterface, Sequelize)=> {
    return queryInterface.addColumn(
      'atividades',
      'titulo',
      {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    );
  },

   down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'atividades',
      'titulo',
    );
  }
};
