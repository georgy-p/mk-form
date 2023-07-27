import { removeRedBorder } from './render/renderBorder';

export default () => {
  const form = document.querySelector('.form');
  const formKeys = Object.keys(form);
  formKeys.forEach((el) => {
    if (el === 'rulesAccept') {
      form[el].removeAttribute('checked');
    } else {
      form[el].value = '';
      removeRedBorder(form[el]);
    }
  });
};
