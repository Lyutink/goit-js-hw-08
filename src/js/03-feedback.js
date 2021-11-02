import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const feedbeckFormRef = document.querySelector('.feedback-form');
let selectedFeedbeckForm = {};

initFeedbeckForm();

feedbeckFormRef.addEventListener('input', throttle(saveLocalStorage, 500));

feedbeckFormRef.addEventListener('submit', event => {
    event.preventDefault();
    console.log(selectedFeedbeckForm);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    feedbeckFormRef.reset();
    selectedFeedbeckForm = {};
    
})

function saveLocalStorage(event) {
    selectedFeedbeckForm[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(selectedFeedbeckForm));

}
function initFeedbeckForm() {
    let persistedForm = localStorage.getItem(LOCALSTORAGE_KEY);
    if (persistedForm) {
        persistedForm = JSON.parse(persistedForm);
        Object.entries(persistedForm).forEach(([name, value]) => {
            selectedFeedbeckForm[name] = value;
            feedbeckFormRef.elements[name].value = value;
        })
    }
}