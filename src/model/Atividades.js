const  { Model, DataTypes } = require("sequelize")

class Atividade extends Model{
  static init(sequelize){
    super.init({
      titulo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      datainicial: DataTypes.DATE,
      datafinal: DataTypes.DATE,
    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
  }
}


module.exports = Atividade