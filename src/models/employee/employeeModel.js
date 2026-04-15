import { model, Schema } from "mongoose";

const employeeSchema = new Schema({
    name:{
        type: String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    },
    salary:{
        type:Number
    },
    phone:{
        type:String
    },
    isVerified:{
        type:Boolean
    }
})

export const EmployeeModel = model("Employee", employeeSchema)