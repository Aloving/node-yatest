function sumCheck(phone, max) {
  const commSum = phone.split('').reduce((prev, next) => {
    const count = +prev + +next;
    return count;
  });

  return max >= commSum;
}

function phoneValidate(phone) {
  const errors = [];

  if (!phone.length) {
    errors.push('Номер телефона не может быть пустым полем');
    return errors;
  }

  if (phone.length > 11 || phone.length < 11) {
    errors.push('Номер телефона должен иметь длину в 11 символов');
  }

  if (+phone.charAt(0) !== 7) {
    errors.push("Номер телефона должен начинаться с '7'");
  }

  if (!sumCheck(phone, 30)) {
    errors.push('Общая сумма всех чисел телефона не должна превышать 30');
  }

  return errors;
}

export default phoneValidate;
