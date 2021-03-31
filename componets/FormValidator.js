export default class FormValidator {
  constructor(selectors, form) {
    this._inputSelector = selectors.inputSelector;
    this._buttonSelector = selectors.buttonSelector;
    this._buttonDisabledClass = selectors.buttonDisabledClass;
    this._inputSelectorSelector = selectors.inputErrorSelector;
    this._spanErrorSelector = selectors.spanErrorSelector;
    this._element = form
  }

  _hasInvalid() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState(buttonElement) {
    if (this._hasInvalid()) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._buttonDisabledClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._buttonDisabledClass);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._element.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this._inputErrorSelector);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._spanErrorSelector);
  };

  _hideInputError (inputElement){
    const errorElement = this._element.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(this._inputErrorSelector);
    errorElement.classList.remove(this._spanErrorSelector);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners() {
    this._buttonElement = this._element.querySelector(this._buttonSelector);
    this._toggleButtonState(this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._buttonElement)
      })
    })
  }

  clearValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    })
    this._toggleButtonState(this._buttonElement)
  }

  enableValidation() {
    this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector))

    this._setEventListeners()
    return this._inputList
  }
}
