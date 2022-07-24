const Sequelize = require("sequelize")
const dbConfig = require("../config/index")
const User = require("../model/Users")
const Atividade = require("../model/Atividades")


    const connection = new Sequelize(dbConfig)

    User.init(connection)
    Atividade.init(connection)

    Atividade.associate(connection.models)

   
connection.authenticate().then( () =>{
    console.log("conectado")
  })
  .catch( (error) =>{
    console.error(`erro ${error}`)
  })


module.exports = connection

