import VMasker from 'vanilla-masker';
import view from './view';
import emailValidate from './validate/email';
import fioValidate from './validate/FIO';
import phoneValidate from './validate/phone';
import mergeErrors from './validate/mergeErrors';
import responseHandler from './response';
import requestToServer from './request';

const myForm = (() => {
  const viewForm = view.domEls.formFields;

  function getData() {
    const fio = viewForm.fio.value;
    const email = viewForm.email.value;
    const phone = viewForm.phone.value.replace(/[+\-()]/gi, '');

    return {
      fio,
      email,
      phone,
    };
  }

  function validate() {
    let isValid;
    let errorFields = [];
    const userData = getData();

    const fioErrors = fioValidate(userData.fio);
    const emailErrors = emailValidate(userData.email);
    const phoneErrors = phoneValidate(userData.phone);

    errorFields = mergeErrors(fioErrors, emailErrors, phoneErrors);

    isValid = !errorFields.length;

    return {
      isValid,
      errorFields,
    };
  }

  function setData({ fio, email, phone }) {
    const formatedPhone = VMasker.toPattern(phone, '+9(999)999-99-99');
    viewForm.fio.value = fio;
    viewForm.email.value = email;
    viewForm.phone.value = formatedPhone;
  }

  function submit(evt) {
    if (evt) {
      evt.preventDefault();
    }
    const validationInfo = validate();

    view.domActions.resetForm();

    if (validationInfo.isValid) {
      view.domActions.disableBtn();
      requestToServer().then(responseHandler);
    }
    if (!validationInfo.isValid) {
      return view.domActions.borderError(validationInfo.errorFields);
    }

    return false;
  }

  return {
    validate,
    getData,
    setData,
    submit,
  };
})();

export default myForm;
