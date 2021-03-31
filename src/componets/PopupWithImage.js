import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(item, popupSelector) {
    super(popupSelector);
    this._item = item
  }

  _handlePhotoViewOpen(){
    const photoViewImage = document.querySelector('.photo-view__image');
    const photoViewName = document.querySelector('.photo-view__name');

    photoViewName.textContent = this._item.name;
    photoViewImage.src = this._item.link;
    photoViewImage.alt = this._item.name;
  }

  open() {
    this._handlePhotoViewOpen()
    super.open();
  }
}
