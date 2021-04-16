import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _handlePhotoViewOpen({link, name}){
    const photoViewImage = this._popupElement.querySelector('.photo-view__image');
    const photoViewName = this._popupElement.querySelector('.photo-view__name');

    photoViewName.textContent = name;
    photoViewImage.src = link;
    photoViewImage.alt = name;
  }

  open({link, name}) {
    this._handlePhotoViewOpen({link, name})
    super.open();
  }
}
