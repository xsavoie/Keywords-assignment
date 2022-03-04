const express = require('express');
const appointment = express.Router();

appointment.post('/new', function(req, res) {
  const {fullName, email, date, time} = req.body.fields
  console.log("fullName", fullName)
  console.log("email", email)
  console.log("date", date)
  console.log("time", time)
});

module.exports = appointment;
