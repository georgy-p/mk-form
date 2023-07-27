import { isEmpty } from './isEmpty';
import { formElements } from '../form';
import { errors, renderErrMessage } from './controls';

export default () => {
  const { nickname } = formElements;

  nickname.addEventListener('input', () => {
    const pEl = nickname.nextElementSibling;
    if (pEl && pEl.nodeName === 'P') {
      pEl.remove();
    }
  });

  nickname.addEventListener('blur', ({ target }) => {
    const { value } = target;
    if (isEmpty(value)) {
      const nextEl = nickname.nextElementSibling;
      if (nextEl.nodeName !== 'P') {
        const textEl = renderErrMessage(errors.emptyErr);
        nickname.insertAdjacentElement('afterend', textEl);
      }
    }
  });
};
