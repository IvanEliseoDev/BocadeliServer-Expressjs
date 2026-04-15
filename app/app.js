import express from "express"
import { EmployeeRouter } from "../src/routes/employee/employeeRoute.js"

export const app = express()

app.use(express.json())
app.use("/api/v1/employees", EmployeeRouter)