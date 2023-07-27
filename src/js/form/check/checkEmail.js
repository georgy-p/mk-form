import { formElements } from '../form';
import {
  addNextEl,
  errors,
  getNextSubling,
  isEmpty,
  isNodeP,
} from './controls';
import renderErrMessage from '../render/renderErrMessage';
import { addRedBorder, removeRedBorder } from '../render/renderBorder';
import state from '../../state';
import checkForm from './checkForm';

export default () => {
  const { emailEl } = formElements;

  emailEl.addEventListener('input', ({ target }) => {
    const { value } = target;
    state.form.email = value;
    checkForm();
    const pEl = getNextSubling(emailEl);
    if (isNodeP(pEl)) {
      removeRedBorder(emailEl);
      pEl.remove();
    }
  });

  emailEl.addEventListener('blur', ({ target }) => {
    const { value } = target;
    if (isEmpty(value)) {
      const nextEl = getNextSubling(emailEl);
      addRedBorder(emailEl);
      if (!isNodeP(nextEl)) {
        const textEl = renderErrMessage(errors.emptyErr);
        addNextEl(emailEl, textEl);
      }
    }
  });
};
