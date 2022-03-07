import { useState } from 'react';

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  function handleFieldChange(event) {
    let { value, name } = event.target;
    setValues({
      ...fields,
      [name]: value,
    });
  }

  function resetForm() {
    setValues(initialState);
  }

  return {
    fields,
    handleFieldChange,
    setValues,
    resetForm,
  };
}
