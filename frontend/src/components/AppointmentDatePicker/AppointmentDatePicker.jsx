import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function AppointmentDatePicker(props) {
  const { dateValue, setDateValue } = props;
  return (
    <DatePicker
      id="date"
      selected={dateValue}
      onChange={(date) => setDateValue(date)}
      minDate={new Date()}
      placeholderText={'Select a Date'}
    />
  );
}
