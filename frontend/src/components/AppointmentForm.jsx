import './AppointmentForm.css'
import { useFormFields } from '../hooks/useFormFields';

export default function AppointmentForm() {

  const [fields, handleFieldChange] = useFormFields({
    fullName: '',
    email: '',
  })

  function handleSubmit() {
    // axios post request to backend/new
    console.log(fields)
  }

  return (
    <div className="appointment-form">
      <form>
        <div className="user-info">
          <span>
            <label>Full Name</label>
            <input
              value={fields.fullName}
              // onChange={e => {console.log(e.target.value)}}
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
          <h4>datePicker</h4>
          <h4>timePicker</h4>
          <button id="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}