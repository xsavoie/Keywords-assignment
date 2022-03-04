const express = require('express');
const appointment = express.Router();

appointment.post('/new', function(req, res) {
  console.log('req', req)
});

module.exports = appointment;
