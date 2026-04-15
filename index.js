import { app } from "./app/app.js"
import "./database/database.js"


const main = async() =>{
  app.listen(4000)
  console.log("Server Run in 4000 Port")
}

main()