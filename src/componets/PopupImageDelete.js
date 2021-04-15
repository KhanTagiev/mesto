import Popup from './Popup.js'

export default class PopupImageDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._submitBtn = this._popupElement.querySelector('.popup__btn_delete')
  }

  setEventListeners(handleCardDelete) {
    super.setEventListeners();
    this._submitBtn.addEventListener('click', handleCardDelete)
  }

  _removeEventListeners() {
    super._removeEventListeners();
    //this._submitBtn.removeEventListener('submit', handleCardDelete);
  }


}
