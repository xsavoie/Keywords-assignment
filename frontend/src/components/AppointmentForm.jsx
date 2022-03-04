import './AppointmentForm.css';
import { useFormFields } from '../hooks/useFormFields';
import AppointmentDatePicker from './AppointmentDatePicker';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AppointmentForm() {
  // setup initial date val to block passed days
  const [dateValue, setDateValue] = useState();

  const [fields, handleFieldChange, setValues] = useFormFields({
    fullName: '',
    email: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    if (dateValue) {
      const formattedDate = dateValue.toString().split(' ').slice(1, 4).join(' ');

      setValues({
        ...fields,
        date: formattedDate,
      });
    }
  }, [dateValue]);

  function handleSubmit() {
    // axios post request to backend/new
    console.log(fields);
    return axios.post("/appointment/new", {fields})
    .catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div className="appointment-form">
      <form>
        <div className="user-info">
          <span>
            <label>Full Name</label>
            <input
              value={fields.fullName}
              onChange={handleFieldChange}
              id="fullName"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </span>
          <span>
            <label>Email</label>
            <input
              value={fields.email}
              onChange={handleFieldChange}
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </span>
        </div>
        <div className="time-info">
        <label>Date</label>
          <AppointmentDatePicker
            dateValue={dateValue}
            setDateValue={setDateValue}
          />
          <label>time</label>
          <input
          id="time"
          type="time"
          name="time"
          value={fields.time}
          onChange={handleFieldChange}
          />
          <button id="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
