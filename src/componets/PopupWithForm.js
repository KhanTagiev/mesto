import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({submitForm}, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popupElement.querySelector('.form')
    this._handleSubmitForm = this._handleSubmitForm.bind(this)
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'))
  }

  _getInputValues() {
    const inputValues = this._inputList.map((inputElement) => {
      return inputElement.value
    })
    return inputValues
  }

  _handleSubmitForm(evt) {
    evt.preventDefault();
    this._submitForm(this._getInputValues())
    this.close()
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmitForm);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._form.removeEventListener('submit', this._handleSubmitForm);
  }

  open() {
    super.open();
  }

  close() {
    super.close();
    this._form.reset()
  }
}
