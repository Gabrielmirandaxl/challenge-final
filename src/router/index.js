const router = require("express").Router()
const UserController = require("../controller/Users")
const AtvController = require("../controller/Atividades")
const UserModel = require("../model/Users")

//authenticate
router.post("/login", UserController.authen)

//register user
router.post("/register", UserController.create )

//register tasks users
router.post("/user/:user_id/atividades", AtvController.create)

//tasks  read
router.get("/user/:user_id/atividades", AtvController.read)

//tasks  update
router.post("/update/:id/atividades", AtvController.update)

//tasks  delete
router.get("/remove/:id/atividades", AtvController.remove)


const authMiddleware = require("../middlewares/auth")

router.use(authMiddleware)

 router.get("/authe", async (request, response) => {
   
   try{

   

   return response.json({validation: true})
   } catch(error){
      return response.json({validation: false})
   }



})


   
module.exports = router