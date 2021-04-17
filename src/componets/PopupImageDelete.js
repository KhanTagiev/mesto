import Popup from './Popup.js'

export default class PopupImageDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._submitBtn = this._popupElement.querySelector('.popup__btn_delete')
  }

  setHandleCardDelete(handleCardDelete) {
    this._handleCardDelete = handleCardDelete
  }

  _setEventListeners() {
    super._setEventListeners();
    this._submitBtn.addEventListener('click', this._handleCardDelete);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._submitBtn.removeEventListener('click', this._handleCardDelete);
  }
}
