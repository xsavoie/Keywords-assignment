import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function AppointmentDatePicker(props) {
  const { dateValue, setDateValue } = props;
  return (
    <DatePicker
      id="date"
      selected={dateValue}
      onChange={(date) => setDateValue(date)}
      minDate={new Date()}
      placeholderText={"Select a Date"}
    />
  );
}
