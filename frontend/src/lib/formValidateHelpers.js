export function formValidate({ setError }) {
  function validateFields(fields) {
    let valid = false;
    const keys = Object.keys(fields);
    keys.map((key) => {
      if (!fields[key]) {
        setError('Missing Fields');
        return (valid = false);
      }
      return (valid = true);
    });
    return valid;
  }

  function validateEmail(email) {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email format');
      return false;
    }
    return true;
  }

  function validateAll(fields) {
    let valid = false;
    const validEmail = validateEmail(fields.email);
    const validFields = validateFields(fields);

    if (validFields && validEmail) {
      return (valid = true);
    }

    return valid;
  }

  return {
    validateFields,
    validateEmail,
    validateAll,
  };
}
