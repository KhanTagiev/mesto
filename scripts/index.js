const initialCards = [
  {
    name: 'Владимир',
    link: './images/vladimir.jpg'
  },
  {
    name: 'Иваново',
    link: './images/ivanovo.jpg'
  },
  {
    name: 'Великий Новгород',
    link: './images/velikiy-novgorod.jpg'
  },
  {
    name: 'Кострома',
    link: './images/kostroma.jpg'
  },
  {
    name: 'Волгоград',
    link: './images/volgograd.jpg'
  },
  {
    name: 'Красная Поляна',
    link: './images/krasnaya-polyana.jpg'
  }
];



const popupProfile = document.querySelector('.popup_profile')
const openPopupProfileBtn = document.querySelector('.profile__btn_edit')

const formElementProfile = popupProfile.querySelector('.form')
const nameInput = formElementProfile.querySelector('.form__input_name')
const jobInput = formElementProfile.querySelector('.form__input_job')

const popupPhotoCard = document.querySelector('.popup_photo-card')
const openPopupPhotoCardBtn = document.querySelector('.profile__btn_add')
const formElementPhotoCard = popupPhotoCard.querySelector('.form')
const siteInput = formElementPhotoCard.querySelector('.form__input_site')
const linkInput = formElementPhotoCard.querySelector('.form__input_url')

const popupPhotoView = document.querySelector('.popup_photo-view')
const photoViewImage = popupPhotoView.querySelector('.photo-view__image')
const photoViewName = popupPhotoView.querySelector('.photo-view__name')

const profile = document.querySelector('.profile')
const nameProfile = profile.querySelector('.profile__name')
const jobProfile = profile.querySelector('.profile__job')
const photoCardsContainer = document.querySelector('.photo-cards__container')
const template = document.querySelector('.template')

const validateSelectors = {
  inputSelector:'.form__input',
  inputErrorSelector: 'form__input_type_error',
  spanErrorSelector: 'form__input-error_active',
  buttonSelector: '.form__btn',
  buttonDisabledClass: 'form__btn_disabled',
}
function addPopupCloseClickListener(evt) {
  if (evt.target.classList.contains('popup__btn_close') || evt.target.classList.contains('popup') ) {
    const popupOpened = evt.currentTarget
    closePopup(popupOpened);
  }
}

function addPopupCloseKeyDownListener(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');

  popupElement.addEventListener('click', addPopupCloseClickListener);
  document.addEventListener('keydown', addPopupCloseKeyDownListener);
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');

  popupElement.removeEventListener('click', addPopupCloseClickListener);
  document.removeEventListener('keydown', addPopupCloseKeyDownListener);
}

function upProfileInfo(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(validateSelectors.inputSelector));
  const buttonElement = formElement.querySelector(validateSelectors.buttonSelector);

  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;

  checkInputValidity(formElement, nameInput, validateSelectors.inputErrorSelector, validateSelectors.spanErrorSelector);
  checkInputValidity(formElement, jobInput, validateSelectors.inputErrorSelector, validateSelectors.spanErrorSelector);
  toggleButtonState(inputList, buttonElement, validateSelectors.buttonDisabledClass);
}

function formSubmitProfileHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

    closePopup(popupProfile);
}

function getCard(item) {
  const newCard = template.content.cloneNode(true);
  const imgEl = newCard.querySelector('.photo-card__image');
  const nameEl = newCard.querySelector('.photo-card__name');
  const deleteCardBtn = newCard.querySelector('.photo-card__btn_delete');
  const likeCardBtn = newCard.querySelector('.photo-card__btn_like');

  imgEl.src = item.link;
  imgEl.alt = item.name;
  nameEl.textContent = item.name;

  deleteCardBtn.addEventListener('click', deleteCard);
  likeCardBtn.addEventListener('click', likeCard);
  imgEl.addEventListener('click',() => {
    photoViewName.textContent = item.name;
    photoViewImage.src = item.link;
    photoViewImage.alt = item.name;

    openPopup(popupPhotoView);
  });

  return newCard;
}

function formSumbitPhotoCardHandler (evt) {
  evt.preventDefault();

  const nameCard = siteInput.value;
  const linkCard = linkInput.value;
  const photoCard = getCard({name: nameCard, link: linkCard});

  photoCardsContainer.prepend(photoCard);
  formElementPhotoCard.reset()
  siteInput.dispatchEvent(new Event('input'));
  linkInput.dispatchEvent(new Event('input'));
  closePopup(popupPhotoCard);
}

function renderCards() {
  const cards = initialCards.map(getCard);

  photoCardsContainer.append(...cards);
}

function deleteCard(evt) {
  evt.target.closest('.photo-card').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('photo-card__btn_like_active');
}

renderCards();

openPopupProfileBtn.addEventListener('click',() => {
  upProfileInfo(formElementProfile);
  openPopup(popupProfile);
});
openPopupPhotoCardBtn.addEventListener('click',() => {
  const inputPhotoCardList = Array.from(formElementPhotoCard.querySelectorAll('.form__input'));

  inputPhotoCardList.forEach((inputElement) => {
    if (!inputElement.value)  {
      hideInputError(formElementPhotoCard,inputElement , validateSelectors.inputErrorSelector, validateSelectors.spanErrorSelector);
    }
  });

  openPopup(popupPhotoCard);
});

formElementProfile.addEventListener('submit', formSubmitProfileHandler);
formElementPhotoCard.addEventListener('submit', formSumbitPhotoCardHandler);
