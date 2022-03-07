import axios from 'axios';
import './SubmitButton.css';

export default function SubmitButton({
  fields,
  resetFields,
  setDateValue,
  setError,
}) {
  
  function validateFields(fields) {
    let validated = false;
    const keys = Object.keys(fields);

    keys.map((key) => {
      if (!fields[key]) {
        return setError('Missing Fields');
      }
      return (validated = true);
    });
    return validated;
  }

  function resetForm() {
    resetFields();
    setDateValue('');
    setError(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validate = validateFields(fields);
    if (validate) {
      return axios
        .post('/appointment/new', { fields })
        .then((response) => {
          console.log(response.data);
          resetForm()
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  return (
    <button id="submit-btn" onClick={handleSubmit}>
      Submit
    </button>
  );
}
