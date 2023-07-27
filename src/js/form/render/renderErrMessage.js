export default (text) => {
  const errorMessageEl = document.createElement('p');
  errorMessageEl.classList.add('text', 'text-danger');
  errorMessageEl.textContent = text;
  return errorMessageEl;
};
