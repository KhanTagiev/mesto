import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({submitForm}, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popupElement.querySelector('.form')
    this._handleSubmitForm = this._handleSubmitForm.bind(this)
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'))
    this._submitBtn = this._form.querySelector('.form__btn_save')
    this._submitBtnTextContent = this._submitBtn.textContent
  }

  _getInputValues() {
    return this._inputList.map(inputElement => inputElement.value)
  }

  submitRendering(isSubmit) {
    if (isSubmit) {
      this._submitBtn.textContent = 'Сохранение...'
    } else {
      this.close()
      this._submitBtn.textContent = this._submitBtnTextContent
    }
  }

  _handleSubmitForm(evt) {
    evt.preventDefault();
    this._submitForm(this._getInputValues())
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener('submit', this._handleSubmitForm);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._form.removeEventListener('submit', this._handleSubmitForm);
  }

  close() {
    super.close();
    this._form.reset()
  }
}
