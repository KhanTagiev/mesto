const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}
const toggleButtonState = (inputList, buttonElement, buttonDisabledClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(buttonDisabledClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(buttonDisabledClass);
  }
}

const showInputError = (formElement, inputElement, errorMessage, inputErrorSelector, spanErrorSelector) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(inputErrorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(spanErrorSelector);
};

const hideInputError = (formElement, inputElement, inputErrorSelector, spanErrorSelector) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(inputErrorSelector);
  errorElement.classList.remove(spanErrorSelector);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErrorSelector,spanErrorSelector) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorSelector, spanErrorSelector);
  } else {
    hideInputError(formElement, inputElement, inputErrorSelector, spanErrorSelector);
  }
};

const setEventListeners = (formElement, inputSelector, buttonSelector, buttonDisabledClass, inputErrorSelector, spanErrorSelector) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(buttonSelector);
  toggleButtonState(inputList, buttonElement, buttonDisabledClass)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErrorSelector, spanErrorSelector);
      toggleButtonState(inputList, buttonElement, buttonDisabledClass);
    });
  });
};

const enableValidation = ({formSelector, inputSelector, buttonSelector, buttonDisabledClass, inputErrorSelector,spanErrorSelector}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, inputSelector, buttonSelector, buttonDisabledClass, inputErrorSelector, spanErrorSelector);
  });
};

enableValidation({
  formSelector:'.form',
  inputSelector:'.form__input',
  buttonSelector: '.form__btn',
  buttonDisabledClass: 'form__btn_disabled',
  inputErrorSelector: 'form__input_type_error',
  spanErrorSelector: 'form__input-error_active'
});
