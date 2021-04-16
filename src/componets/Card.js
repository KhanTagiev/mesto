export default class Card {

  constructor({item, handleCardClick, handleDeleteClick, handleLikeClick, userId}, selector) {
    this._item = item;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId
    this._findLikeState = Boolean(this._item.likes.find((element) => element._id === this._userId));
  }

  setLikeCard() {
    this._element.querySelector('.photo-card__btn_like').classList.add('photo-card__btn_like_active');
    this._findLikeState = true
  }

  deleteLikeCard() {
    this._element.querySelector('.photo-card__btn_like').classList.remove('photo-card__btn_like_active');
    this._findLikeState = false
  }

  deleteCard() {
    this._element.remove()
  }

  returnLikeState() {
    return this._findLikeState
  }

  _setEventListeners() {
    this._element.querySelector('.photo-card__btn_delete').addEventListener('click',this._handleDeleteClick);
    this._element.querySelector('.photo-card__btn_like').addEventListener('click', this._handleLikeClick);
    this._image.addEventListener('click', this._handleCardClick);
  }

  _getTemplate() {
    return document.querySelector(this._selector).content.querySelector('.photo-card').cloneNode(true)
  }

  setCountLikes(item) {
    this._likes.textContent = item.likes.length;
  }

  showDeleteButton() {
    if (this._userId === this._item.owner._id) {
      this._deleteBtn.classList.add('photo-card__btn_delete_visible')
    }
  }

  handleLikes() {
    if (this.returnLikeState()) {
      this.setCountLikes(this._item)
      this.setLikeCard()
    } else {
      this.setCountLikes(this._item)
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._title = this._element.querySelector('.photo-card__name');
    this._image = this._element.querySelector('.photo-card__image');
    this._likes = this._element.querySelector('.photo-card__likes');
    this._deleteBtn = this._element.querySelector('.photo-card__btn_delete');

    this._title.textContent = this._item.name;
    this._image.src = this._item.link;
    this._image.alt = this._item.name;
    this.handleLikes()
    this.showDeleteButton()

    this._setEventListeners();

    return this._element
  }
}
