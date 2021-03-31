import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _handlePhotoViewOpen(item){
    const photoViewImage = this._popupElement.querySelector('.photo-view__image');
    const photoViewName = this._popupElement.querySelector('.photo-view__name');

    photoViewName.textContent = item.name;
    photoViewImage.src = item.link;
    photoViewImage.alt = item.name;
  }

  open(item) {
    this._handlePhotoViewOpen(item)
    super.open();
  }
}
