const  { Model, DataTypes } = require("sequelize")

class User extends Model{
  static init(sequelize){
    super.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}


module.exports = User