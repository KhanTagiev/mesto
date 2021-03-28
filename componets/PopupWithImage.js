import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor({data}, popupSelector) {
    super(popupSelector);
    this._data = data
  }

  open() {
    super.open();
    
  }
}
