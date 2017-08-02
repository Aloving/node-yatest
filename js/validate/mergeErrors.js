function mergeErrors(fioErrs, emailErrs, phoneErrs) {
  const errors = [];

  if (fioErrs.length) {
    errors.push('fio');
  }

  if (emailErrs.length) {
    errors.push('email');
  }

  if (phoneErrs.length) {
    errors.push('phone');
  }

  return errors;
}

export default mergeErrors;
