export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleClickClose = this._handleClickClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeKey = "Escape";
  }

  _handleClickClose(evt) {
    if (evt.target.classList.contains('popup__btn_close') || evt.target.classList.contains('popup') ) {
      this.close()
     };
  }
  _handleEscClose(evt) {
    if (evt.key === this._closeKey) {
      this.close();
    }
  }

  _setEventListeners() {
    this._popupElement.addEventListener('click', this._handleClickClose);
    document.addEventListener('keydown', this._handleEscClose);
  }

  _removeEventListeners() {
    this._popupElement.removeEventListener('click', this._handleClickClose);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    this._setEventListeners()
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    this._removeEventListeners()
  }
}

