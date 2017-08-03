import 'whatwg-fetch';
import 'babel-polyfill';

import myForm from './MyForm';

const _myForm = myForm;
window.MyForm = _myForm;
