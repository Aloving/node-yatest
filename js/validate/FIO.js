function fioValidate(fio) {
  const errors = [];
  const fioLength = fio.split(' ').filter(str => str.length).length;

  if (fioLength > 3 || fioLength < 3) {
    errors.push('ФИО должно состоять из трех слов');
  }

  return errors;
}

export default fioValidate;
