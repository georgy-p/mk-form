import state from '../../state';

const validateForm = () => {
  const { form } = state;
  const keys = Object.keys(form);
  const validateResult = [];
  keys.forEach((el) => {
    if (el === 'rulesAccept') {
      if (!form[el]) {
        validateResult.push(el);
      }
    } else {
      if (form[el] === '') {
        validateResult.push(el);
      }
    }
  });
  return validateResult;
};

export default () => {
  const regBtn = document.querySelector('.content__btn');
  const submitBtnEl = document.querySelector('.submit__btn');
  const validateResult = validateForm();

  if (validateResult.length === 0) {
    submitBtnEl.disabled = false;
    submitBtnEl.classList.remove('disabled');
    regBtn.classList.add('content__btn-ok');
    regBtn.disabled = true;
  }
};
