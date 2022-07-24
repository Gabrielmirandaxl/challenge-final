const UserModel = require("../model/Users")
const jwt = require("jsonwebtoken")
const configAuthe = require("../configAuthe/authe.json")
const yup = require("yup")

//create user
async function create(request, response){

  try{
      
    const {username, email, password} = request.body
 
    const schema = yup.object().shape({
      username: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    if(!( await schema.isValid(request.body))){
      return response.status(400).json({error: "Preencha os campos de forma correta!"})
    }
    
    const userVerific = await UserModel.findOne({ where: {username: username}})
    const emailVerific = await UserModel.findOne({ where: {email: email}})

    if(userVerific){
      return response.status(400).json({erro: "esse username já existe!"})
    }

    if(emailVerific){
      return response.status(400).json({erro: "esse email já existe!"})
    }

    const user = await UserModel.create({ username, email, password})
  
    return response.json({
      token: generateToken({id: user.id})
    })
  }
  catch(error){
    return response.status(500).json( {error: "Houve um erro ao processar sau requisição"})

  }


}

function generateToken( params = {}){
return jwt.sign(params, configAuthe.secret, {
    expiresIn: 84600,
  } )
}

async function authen(request, response){

  try{

    const {email, password} = request.body

    const userAuthe = await UserModel.findOne({ where: {email: email} })
    const passwordAuthe = await UserModel.findOne({ where: {password: password}})

    if(!userAuthe){
      return response.status(400).json({ emailErro: "email not found"})
    }

    if(!passwordAuthe){
      return response.status(400).json({ passwordErro: " invalid password "})
    }


    return response.json( {
       token: generateToken({id: userAuthe.id})
      
      } )

  } catch(error){
    return response.status(500).json({ error: "erro ao tentar se conectar"})
  }
}



module.exports = {
  create,
  authen,

}
