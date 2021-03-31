export default class Card {

  constructor({item, handleCardClick}, selector) {
    this._item = item;
    this._selector = selector;
    this._handleCardClick = handleCardClick
  }

  _likeCard(evt) {
    evt.target.classList.toggle('photo-card__btn_like_active');
  }

  _deleteCard(evt) {
    evt.target.closest('.photo-card').remove();
  }

  _setEventListeners(cardElement, cardImageElement) {
    cardElement.querySelector('.photo-card__btn_delete').addEventListener('click', this._deleteCard);
    cardElement.querySelector('.photo-card__btn_like').addEventListener('click', this._likeCard);
    cardImageElement.addEventListener('click', this._handleCardClick);
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._selector).content.cloneNode(true);

    return cardTemplate
  }

  generateCard() {
    this._element = this._getTemplate();

    const cardElement = this._element;
    const cardTitleElement = cardElement.querySelector('.photo-card__name');
    const cardImageElement = cardElement.querySelector('.photo-card__image');

    cardTitleElement.textContent = this._item.name;
    cardImageElement.src = this._item.link;
    cardImageElement.alt = this._item.name;


    this._setEventListeners(cardElement, cardImageElement);

    return this._element
  }
}
