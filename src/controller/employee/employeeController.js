import { EmployeeModel } from "../../models/employee/employeeModel.js"

export const employeeController = []

employeeController.getEmployees = async(req, res) =>{
    const employees = await EmployeeModel.find()
    return res.json(employees)
}

employeeController.updateEmployee =  async(req, res) => {
    const {name,lastName,email,role,salary,phone, isVerified} = req.body
    if(name.trim().length < 0 ||lastName.trim().length < 0|| email.trim().length < 0 || role.trim().length) throw new Error({message: "Nombre, Apellido, Correo, y Rol no deben de ir vacios"})
    await EmployeeModel.findByIdAndUpdate(req.params.id , {
     name,lastName,email,role,salary,phone, isVerified
    }, {new:true})
    return res.json({message: "Employee Update has Sucessfuly"})
}

employeeController.deleteEmployee = async(req,res) => {
    const resdelete = await EmployeeModel.findByIdAndDelete(req.params.id)
    console.lof("Respuesta    : ", resdelete )
    res.json({message: "Employee Delete has Successfuly"})
}