require('dotenv').config();
const express = require('express');
const appointment = express.Router();

const mysql = require('mysql');
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

appointment.post('/new', (req, res) => {
  const { fullName, email, date, time } = req.body.fields;
  db.query(
    'INSERT INTO Appointment (full_name, email, appointment_date, appointment_time) VALUES (?,?,?,?)',
    [fullName, email, date, time],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('inserted in db')
        res.send(`Thank you, ${fullName}, an appointment was created for ${date} at ${time}`);
      }
    }
  );
});

module.exports = appointment;
