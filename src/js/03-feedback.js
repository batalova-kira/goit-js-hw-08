import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]')
};
const STORAGE_KEY = 'feedback-form-state';
const formData = loadFormData();
refs.form.addEventListener('submit', handlerForm);
refs.email.addEventListener('input', throttle(handlerInput, 500));
refs.message.addEventListener('input', throttle(handlerInput, 500));

function handlerForm(e) {
    e.preventDefault();
    if (refs.email.value === '' || refs.message.value === '') {
        return alert('Please fill in all the fields!');
    }
    console.log(formData);
    clearFormData();
    e.currentTarget.reset();
}

function handlerInput(e) {
    formData[e.target.name] = e.target.value;
    saveFormData();
}

function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : {};
}

function clearFormData() {
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
}

restoreFormData()

function restoreFormData() {
    let savedFormData = localStorage.getItem(STORAGE_KEY);
    if (savedFormData) {
        const data = JSON.parse(savedFormData);
        refs.email.value = data.email || "";
        refs.message.value = data.message || "";
    }
}