import axios from 'axios';
import { formValidate } from '../../lib/formValidateHelpers';
import { useFormState } from '../../lib/formState';
import './SubmitButton.css';

export default function SubmitButton({
  fields,
  resetFields,
  setDateValue,
  setError,
}) {
  const { validateAll } = formValidate({ setError });
  const { setConfirmMessage, handleModeChange } = useFormState();

  function resetForm() {
    resetFields();
    setDateValue('');
    setError(null);
    handleModeChange();
  }

  function handleSubmit(event) {
    event.preventDefault();
    let validated = validateAll(fields);

    if (validated) {
      return axios
        .post('/appointment/new', { fields })
        .then((response) => {
          console.log(response.data);
          setConfirmMessage(response.data)
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
