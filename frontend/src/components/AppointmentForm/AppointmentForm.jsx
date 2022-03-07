import './AppointmentForm.css';
import { useFormFields } from '../../hooks/useFormFields';
import AppointmentDatePicker from '../AppointmentDatePicker/AppointmentDatePicker';
import { useEffect, useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function AppointmentForm() {
  const [dateValue, setDateValue] = useState('');
  const {fields, handleFieldChange, setValues, resetForm} = useFormFields({
    fullName: '',
    email: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    if (dateValue) {
      const formattedDate = dateValue
        .toString()
        .split(' ')
        .slice(1, 4)
        .join(' ');

      setValues({
        ...fields,
        date: formattedDate,
      });
    }
  }, [dateValue]);

  return (
    <div className="appointment-form">
      <form>
        <div className="user-info">
          <span>
            <label>Full Name</label>
            <input
              value={fields.fullName}
              onChange={handleFieldChange}
              type="text"
              name="fullName"
              placeholder="Enter Your Name"
            />
          </span>
          <span>
            <label>Email</label>
            <input
              value={fields.email}
              onChange={handleFieldChange}
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </span>
        </div>
        <div className="time-info">
          <span>
            <AppointmentDatePicker
              dateValue={dateValue}
              setDateValue={setDateValue}
            />
          </span>
          <span>
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={fields.time}
              onChange={handleFieldChange}
            />
          </span>
          <SubmitButton fields={fields} resetForm={resetForm} setDateValue={setDateValue} />
        </div>
      </form>
    </div>
  );
}
