import axios from 'axios';
import './SubmitButton.css';

export default function SubmitButton({ fields }) {
  
  function handleSubmit(event) {
    event.preventDefault();
    return axios
      .post('/appointment/new', { fields })
      .then((response) => {
        console.log(response.data);
        // clear the form
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
