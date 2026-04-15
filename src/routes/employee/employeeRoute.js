import express from "express"
import { employeeController } from "../../controller/employee/employeeController.js"

export const EmployeeRouter = express.Router()

EmployeeRouter.route("/").get(employeeController.getEmployees)