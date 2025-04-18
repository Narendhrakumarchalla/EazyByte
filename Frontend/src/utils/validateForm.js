const validateForm = (fields) => {
    for (const key in fields) {
      if (!fields[key]) return `${key} is required`;
    }
    return null;
  };
  export default validateForm;