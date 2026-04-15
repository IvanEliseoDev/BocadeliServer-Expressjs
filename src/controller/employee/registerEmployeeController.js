import { EmployeeModel } from "../../models/employee/employeeModel.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { stringify } from "querystring";

export const RegisterEmployeeController = [];
let codeRandom = "";

RegisterEmployeeController.registerEmployee = async (req, res) => {
  const { name, lastName, email, password, role, salary, phone } = req.body;
  try {
    const existEmployee = EmployeeModel.findOne({ email });
    console.log(existEmployee)
    if (existEmployee) res.status(400).json({ message: "Employee alredy Exist" });
    const passwordHashed = await bcryptjs.hash(password, 10);
    const RandomCode = crypto.randomBytes(3).toString("hex");
    const InsertedEmployee = EmployeeModel.save({
      name,
      lastName,
      email,
      password: passwordHashed,
      role,
      salary,
      phone,
    });
    codeRandom = RandomCode
    return res.status(201).json({message: "Employee Inserted Has Succesfuly", data: InsertedEmployee, code: codeRandom})
  } catch (error) {
    console.log("Server Error: ", error);
    throw new Error("Internal Server Error - Check Server Logs ", error);
  }
};

RegisterEmployeeController.verifiedEmployee = async () => {};
