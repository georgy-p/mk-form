import { formElements } from './form';

export default () => {
  const form = formElements;
  const formKeys = Object.keys(form);
  formKeys.forEach((el) => {
    if (el === 'rulesAccept') {
      form[el].removeAttribute('checked');
    } else {
      form[el].value = '';
    }
  });
};
