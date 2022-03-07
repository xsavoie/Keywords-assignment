import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function AppointmentDatePicker({ dateValue, setDateValue }) {
  return (
    <DatePicker
      selected={dateValue}
      onChange={(date) => setDateValue(date)}
      minDate={new Date()}
      placeholderText={'Select a Date'}
    />
  );
}
