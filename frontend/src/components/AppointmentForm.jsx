import './AppointmentForm.css'

export default function AppointmentForm() {
  function handleSubmit() {
    // axios post request to backend/new
    console.log("submit");
  }

  return (
    <div class="appointment-form">
      <form>
        <div class="user-info">
          <span>
            <label for="name">Full Name</label>
            <input
              value={"test"}
              onChange={"test"}
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </span>
          <span>
            <label for="email">Email</label>
            <input
              value={"test"}
              onChange={"test"}
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </span>
        </div>
        <div class="time-info">
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