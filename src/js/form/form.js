import checkEmail from './check/checkEmail';
import checkNickname from './check/checkNickname';
import checkPassRepit from './check/checkPassRepit';
import checkPassword from './check/checkPassword';
import checkRulesAccept from './check/checkRulesAccept';

export const formElements = {
  emailEl: document.getElementById('email'),
  nicknameEl: document.getElementById('nickname'),
  passwordEl: document.getElementById('password'),
  passwordConfirmEl: document.getElementById('passwordConfirm'),
  rulesAcceptEl: document.getElementById('rulesAccept'),
};

export default () => {
  checkEmail();
  checkNickname();
  checkPassword();
  checkPassRepit();
  checkRulesAccept();
};
