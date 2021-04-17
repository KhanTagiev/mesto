import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photoViewImage = this._popupElement.querySelector('.photo-view__image');
    this._photoViewName = this._popupElement.querySelector('.photo-view__name');
  }

  _handlePhotoViewOpen({link, name}){
    this._photoViewName.textContent = name;
    this._photoViewImage.src = link;
    this._photoViewImage.alt = name;
  }

  open({link, name}) {
    this._handlePhotoViewOpen({link, name})
    super.open();
  }
}
