import './AppointmentForm.css';
import { useFormFields } from '../../hooks/useFormFields';
import AppointmentDatePicker from '../AppointmentDatePicker';
import { useEffect, useState } from 'react';
import SubmitButton from '../SubmitButton';
import ErrorMessage from '../ErrorMessage';

export default function AppointmentForm() {
  const [error, setError] = useState(null);
  const [dateValue, setDateValue] = useState('');
  const { fields, handleFieldChange, setValues, resetFields } = useFormFields({
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
    <div className="appointment-container">
      <header className="header">
        <h3>Book an Appointment</h3>
      </header>
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
            resetFields={resetFields}
            setDateValue={setDateValue}
            setError={setError}
          />
        </div>
        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
}
