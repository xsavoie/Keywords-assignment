import axios from 'axios';
import './SubmitButton.css';

export default function SubmitButton({ fields, resetForm, setDateValue }) {
  function handleSubmit(event) {
    event.preventDefault();
    return axios
      .post('/appointment/new', { fields })
      .then((response) => {
        console.log(response.data);
        resetForm();
        setDateValue('');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <button id="submit-btn" onClick={handleSubmit}>
      Submit
    </button>
  );
}
