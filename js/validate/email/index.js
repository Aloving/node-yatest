import { domains, emailPattern } from './validationConfig';

function emailValidate(email) {
  const errors = [];

  if (!emailPattern.test(email)) {
    errors.push('email должен иметь вид example@yandex.ru');
    return errors;
  }

  const emailDomain = email.split('@')[1];
  const yaMail = domains.some(domain => emailDomain === domain);
  if (!yaMail) {
    errors.push(`email должен быть только в доменах ${domains.join(', ')}`);
  }

  return errors;
}

export default emailValidate;
