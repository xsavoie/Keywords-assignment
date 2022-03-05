const express = require('express');
const appointment = express.Router();
// const db = require('../db/index');

// console.log('ROUTE', db);

const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


appointment.post('/new', (req, res) => {
  const { fullName, email, date, time } = req.body.fields;
  // console.log("fullName", fullName)
  // console.log("email", email)
  // console.log("date", date)
  // console.log("time", time)

  db.query(
    'INSERT INTO Appointment (full_name, email, appointment_date, appointment_time) VALUES (?,?,?,?)',
    [fullName, email, date, time],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('INSERTED IN DB')
      }
    }
  );
});

module.exports = appointment;
