const express = require('express');
const router=express.Router();
const Appointment = require('../models/appointments');

router.post('/addAppointment', (req, res) => {
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
  newAppointment.save()
    .then((newAppointment) => {
      res.json(newAppointment);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports=router;