import express from "express"
import { employeeController } from "../../controller/employee/employeeController.js"
import { RegisterEmployeeController } from "../../controller/employee/registerEmployeeController.js"

export const EmployeeRouter = express.Router()

EmployeeRouter.route("/").get(employeeController.getEmployees).post(RegisterEmployeeController.registerEmployee)