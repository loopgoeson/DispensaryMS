const express = require('express');
const router=express.Router();
const Appointment = require('../models/appointments');
const app=express();
const cors = require('cors');


app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type'],
    allowedMethods: ['GET', 'POST']
}));

router.post('/addAppointment', async(req, res) => {
  const { date,time,patientName,doctor,age,gender,mobileNumber } = req.body;
  const newAppointment = new Appointment({
    date,
    time,
    patientName,
    doctor,
    age,
    gender,
    mobileNumber
  });
  await newAppointment.save()
    .then((newAppointment) => {
      res.json(newAppointment);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get('/displayAppointment',(req,res)=>{
  Appointment.find({})
  .then((appointments) => {
    res.json(appointments);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
})

module.exports=router;