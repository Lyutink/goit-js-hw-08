const feedbeckFormRef = document.querySelector('.feedback-form');
let selectedFeedbeckForm = {};

initFeedbeckForm();

feedbeckFormRef.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(feedbeckFormRef);
    formData.forEach((value, name) => console.log(value, name));
    localStorage.removeItem('feedback-form-state');
    
})

feedbeckFormRef.addEventListener('input', event => {
    selectedFeedbeckForm[event.target.name] = event.target.value;
    console.log(selectedFeedbeckForm);
    localStorage.setItem('feedback-form-state', JSON.stringify(selectedFeedbeckForm));
})

function initFeedbeckForm() {
    let persistedForm = localStorage.getItem('feedback-form-state');
    if (persistedForm) {
        persistedForm = JSON.parse(persistedForm);
        Object.entries(persistedForm).forEach(([name, value]) => {
            selectedFeedbeckForm[name] = value;
            feedbeckFormRef.elements[name].value = value;
        })   
    } 