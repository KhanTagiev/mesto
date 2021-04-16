export default class Card {

  constructor({item, handleCardClick, handleDeleteClick, handleLikeClick, userId}, selector) {
    this._item = item;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId
  }

  _getTemplate() {
    return document.querySelector(this._selector).content.querySelector('.photo-card').cloneNode(true)
  }

  setLikeState({likes}) {
    this._likeState = Boolean(likes.find((element) => element._id === this._userId))
  }

  returnLikeState() {
    return this._likeState
  }

  putLike() {
    this._like.classList.add('photo-card__btn_like_active');
  }

  removeLike() {
    this._like.classList.remove('photo-card__btn_like_active');
  }

  countLikes({likes}) {
    this._likeCounter.textContent = likes.length;
  }

  handleLikeCard(item) {
    this.setLikeState(item)
    if (this.returnLikeState()) {
      this.putLike()
      this.countLikes(item)
    } else {
      this.removeLike()
      this.countLikes(item)
    }
  }

  showDeleteButton() {
    if (this._userId === this._item.owner._id) {
      this._deleteBtn.classList.add('photo-card__btn_delete_visible')
    }
  }

  _setEventListeners() {
    this._deleteBtn.addEventListener('click',this._handleDeleteClick);
    this._like.addEventListener('click', this._handleLikeClick);
    this._image.addEventListener('click', this._handleCardClick);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._title = this._element.querySelector('.photo-card__name');
    this._image = this._element.querySelector('.photo-card__image');
    this._likeCounter = this._element.querySelector('.photo-card__like-counter');
    this._deleteBtn = this._element.querySelector('.photo-card__btn_delete');
    this._like = this._element.querySelector('.photo-card__btn_like')

    this._title.textContent = this._item.name;
    this._image.src = this._item.link;
    this._image.alt = this._item.name;
    this.handleLikeCard(this._item)
    this.showDeleteButton()

    this._setEventListeners();

    return this._element
  }

  deleteCard() {
    this._element.remove()
  }
}
