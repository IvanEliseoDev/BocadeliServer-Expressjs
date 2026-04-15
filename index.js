import { app } from "./app/app"

const main = async() =>{
  app.listen(4000)
  console.log("Server Run in 4000 Port")
}

main()