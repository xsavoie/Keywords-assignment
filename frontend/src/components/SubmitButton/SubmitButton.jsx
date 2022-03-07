import axios from 'axios';
import { useFormValidate } from '../../hooks/useFormValidate';
import './SubmitButton.css';

export default function SubmitButton({
  fields,
  resetFields,
  setDateValue,
  setError,
}) {
  const { validateAll } = useFormValidate({ setError });

  function resetForm() {
    resetFields();
    setDateValue('');
    setError(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let validated = validateAll(fields);

    if (validated) {
      return axios
        .post('/appointment/new', { fields })
        .then((response) => {
          console.log(response.data);
          resetForm();
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
