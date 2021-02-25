const elementSelectors = {
  formSelector:'.form',
  inputSelector:'.form__input',
  buttonSelector: '.form__btn',
  buttonDisabledClass: 'form__btn_disabled',
  inputErrorSelector: 'form__input_type_error',
  spanErrorSelector: 'form__input-error_active'
}

const {
  formSelector,
  inputSelector,
  buttonSelector,
  buttonDisabledClass,
  inputErrorSelector,
  spanErrorSelector
} = elementSelectors

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(buttonDisabledClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(buttonDisabledClass);
  }
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(inputErrorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(spanErrorSelector);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(inputErrorSelector);
  errorElement.classList.remove(spanErrorSelector);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(buttonSelector);
  toggleButtonState(inputList, buttonElement)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (formSelector) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation(formSelector);
