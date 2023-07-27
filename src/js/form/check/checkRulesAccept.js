import state from '../../state';
import { formElements } from '../form';
import checkForm from './checkForm';

export default () => {
  const { rulesAcceptEl } = formElements;
  rulesAcceptEl.addEventListener('input', () => {
    state.form.rulesAccept = true;
    checkForm();
  });
};
