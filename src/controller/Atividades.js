const AtvModel = require("../model/Atividades")
const User = require("../model/Users")

const yup = require("yup")

async function create(request, response){
  try{
    const {user_id} = request.params
    const {descricao, datainicial, datafinal, titulo} = request.body
    
    const schema = yup.object().shape({
      titulo: yup.string().required().max(20),
      descricao: yup.string().required(),
      datainicial: yup.date().required(),
      datafinal: yup.date().required(),
    })

    if(!(await schema.isValid(request.body))){
      return response.status(400).json({erro: "Preencha todos os campos de forma correta! "})
    }

    const user = await User.findByPk(user_id)

    if(!user){
      response.status(400).json({ error: "User not found"})
    }

    const atividade = await AtvModel.create({ descricao, datainicial, datafinal, titulo, user_id})
    
  
    return response.json(atividade)

  } catch(error){
    return response.status(500).json({ error: "erro ao processar sua requisição!"})
  }
}

async function read(request, response){

  try{
    const {user_id} = request.params

    const atvUser = await AtvModel.findAll({ where: {user_id: user_id}}) 

    return response.json(atvUser)

  } catch(error){
    response.status(500).json({error: "erro ao processar a sua requisicição"})
  }

}

async function remove(request, response){
  try{

    const {id} = request.params

    const atividade = await AtvModel.destroy({where: {id: id}})

    return response.json(atividade)

  } catch(error){
    return response.status(500).json({error: "erro ao processar sua requisição"})
  }
}

async function update(request,response){
  try{

    const {id} = request.params
    const { descricao, datainicial, datafinal} = request.body


     if(!await AtvModel.findByPk(id)){
      return response.json( { erro: "tarefa não existe"})
     }

    const updatedTask = await AtvModel.update({descricao, datainicial, datafinal},{where: {id: id}})
      
    const findTask = await AtvModel.findByPk(id)

    return response.json(findTask)

  } catch(error){
    return  response.status(500).json({error: "erro ao processar sua requisição"})
  }
}

module.exports ={
  create,
  read,
  remove,
  update,
}