const mongoose = require("mongoose")
const { Schema } = mongoose;

const AppointmentsSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    doctor :{
        type: String,
        required:true 
    },
    age :{
       type:Number,
       required:true
    },
    gender:{
       type:String,
       required:true
    },
    mobileNumber: {
        type: String,
        required: true
    },
})

const Appointment = new mongoose.model("Appointments", AppointmentsSchema)


const appoint= new Appointment({
    date:"10/11/23",
        time:"7:30 am",
        patientName:"Manoj Jain",
        doctor:"Dr. Manoj Sinha",
        age:45,
        gender:"Male",
        mobileNumber:9865456789
})

appoint.save();