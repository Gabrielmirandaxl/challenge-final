
const express = require("express")
const cors = require("cors")

require("./database/index")
const router = require("./router")


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", router )


const port = process.env.port || 8080
app.listen(port, () =>{
  console.log(`Server listening on port ${port}`)
})