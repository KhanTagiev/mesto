export default class Card {

  constructor({item, handleCardClick, handleDeleteClick}, selector) {
    this._item = item;
    this._selector = selector
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _likeCard(evt) {
    evt.target.classList.toggle('photo-card__btn_like_active');
  }

  deleteCard() {
    this._element.remove()
  }

  _setEventListeners(cardElement, cardImageElement) {
    cardElement.querySelector('.photo-card__btn_delete').addEventListener('click',() => this._handleDeleteClick(this));
    cardElement.querySelector('.photo-card__btn_like').addEventListener('click', this._likeCard);
    cardImageElement.addEventListener('click', this._handleCardClick);
  }

  _getTemplate() {
    return document.querySelector(this._selector).content.querySelector('.photo-card').cloneNode(true)
  }

  setLikes() {
    return this._item.likes.length
  }

  showDeleteButton(currentId, cardDeleteBtnElement) {
    if (currentId === this._item.owner._id) {
      cardDeleteBtnElement.classList.add('photo-card__btn_delete_visible')
    }
  }

  generateCard(currentId) {
    this._element = this._getTemplate();

    const cardElement = this._element;
    const cardTitleElement = cardElement.querySelector('.photo-card__name');
    const cardImageElement = cardElement.querySelector('.photo-card__image');
    const cardLikesElement = cardElement.querySelector('.photo-card__likes');
    const cardDeleteBtnElement = cardElement.querySelector('.photo-card__btn_delete');

    cardTitleElement.textContent = this._item.name;
    cardImageElement.src = this._item.link;
    cardImageElement.alt = this._item.name;
    cardLikesElement.textContent = this.setLikes();

    this.showDeleteButton(currentId, cardDeleteBtnElement)

    this._setEventListeners(cardElement, cardImageElement);

    return this._element
  }
}
