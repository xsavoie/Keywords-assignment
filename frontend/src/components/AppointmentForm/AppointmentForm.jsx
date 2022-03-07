import './AppointmentForm.css';
import { useFormFields } from '../../hooks/useFormFields';
import AppointmentDatePicker from '../AppointmentDatePicker';
import { useEffect, useState } from 'react';
import SubmitButton from '../SubmitButton';

export default function AppointmentForm() {
  const [dateValue, setDateValue] = useState('');
  const { fields, handleFieldChange, setValues, resetForm } = useFormFields({
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
          <label>
            Full Name
            <input
              value={fields.fullName}
              onChange={handleFieldChange}
              type="text"
              name="fullName"
              placeholder="Enter Your Name"
            />
          </label>
          <label>
            Email
            <input
              value={fields.email}
              onChange={handleFieldChange}
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </label>
        </div>

        <div className="time-info">
          <label>
            Date
            <AppointmentDatePicker
              dateValue={dateValue}
              setDateValue={setDateValue}
            />
          </label>
          <label>
            Time
            <input
              type="time"
              name="time"
              value={fields.time}
              onChange={handleFieldChange}
            />
          </label>

          <SubmitButton
            fields={fields}
            resetForm={resetForm}
            setDateValue={setDateValue}
          />
        </div>
      </form>
    </div>
  );
}
