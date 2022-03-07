export function useFormValidate({ setError }) {

  function validateFields(fields) {
    let valid = false
    const keys = Object.keys(fields);
    keys.map((key) => {
      if (!fields[key]) {
        setError('Missing Fields');
        return valid = false;
      }
      return valid = true;
    });
    return valid;
  }

  function validateEmail(email) {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailRegex)) {
      return setError('Invalid email format');
    }
    return true;
  }

  function validateAll(fields) {
    let valid = false
    const validFields = validateFields(fields);
    const validEmail = validateEmail(fields.email);

    if (validFields && validEmail) {
      return valid = true;
    }

    return valid
  }

  return {
    validateFields,
    validateEmail,
    validateAll,
  };
}
