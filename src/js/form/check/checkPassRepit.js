import state from '../../state';
import { formElements } from '../form';
import { addRedBorder, removeRedBorder } from '../render/renderBorder';
import renderErrMessage from '../render/renderErrMessage';
import checkForm from './checkForm';
import {
  addNextEl,
  errors,
  getNextSubling,
  isEmpty,
  isNodeP,
  isSame,
} from './controls';

export default () => {
  const { passwordConfirmEl } = formElements;

  passwordConfirmEl.addEventListener('input', ({ target }) => {
    const { value } = target;
    state.form.passwordConfirm = value;
    checkForm();

    const pEl = getNextSubling(passwordConfirmEl);
    if (isNodeP(pEl)) {
      passwordConfirmEl.classList.remove('form__input-danger');
      pEl.remove();
    }

    if (value.length > 0) {
      if (!isSame(value, state.form.password)) {
        addRedBorder(passwordConfirmEl);
        const textEl = renderErrMessage(errors.passwordNotConfirm);
        addNextEl(passwordConfirmEl, textEl);
      } else {
        removeRedBorder(passwordConfirmEl);
      }
    }
  });

  passwordConfirmEl.addEventListener('blur', ({ target }) => {
    const { value } = target;
    if (isEmpty(value)) {
      const nextEl = getNextSubling(passwordConfirmEl);
      passwordConfirmEl.classList.add('form__input-danger');
      if (!isNodeP(nextEl)) {
        const textEl = renderErrMessage(errors.emptyErr);
        addNextEl(passwordConfirmEl, textEl);
      }
    }
  });
};
