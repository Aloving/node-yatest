import 'whatwg-fetch';
import 'babel-polyfill';

import myForm from './MyForm';

const _myForm = myForm;
window.MyForm = _myForm;

MyForm.setData({
  fio: 'asd dasd dd',
  email: 'asd@ya.ru',
  phone: 711111111111,
});
