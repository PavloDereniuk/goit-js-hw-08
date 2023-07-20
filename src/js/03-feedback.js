import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const FORM_KEY = 'feedback-form-state';
onFillForm();
function onFormInput(event) {
  let formInfo = localStorage.getItem(FORM_KEY);
  formInfo = formInfo ? JSON.parse(formInfo) : {};
  formInfo[event.target.name] = event.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formInfo));
}

function onFillForm() {
  let saveInfo = localStorage.getItem(FORM_KEY);
  if (saveInfo) {
    saveInfo = JSON.parse(saveInfo);
    Object.entries(saveInfo).forEach(([key, text]) => {
      formEl.elements[key].value = text || '';
    });
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Please fill out all the fields!');
  } else {
    let formData = JSON.parse(localStorage.getItem(FORM_KEY));
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(FORM_KEY);
    formData = {};
  }
}

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);
