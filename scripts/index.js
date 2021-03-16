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

const profile = document.querySelector('.profile')
const nameProfile = profile.querySelector('.profile__name')
const jobProfile = profile.querySelector('.profile__job')
const photoCardsContainer = document.querySelector('.photo-cards__container')

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

export default function openPopup (popupElement) {
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

function formSumbitPhotoCardHandler (evt) {
  evt.preventDefault();

  const cardItem = {name: siteInput.value, link: linkInput.value}

  const photoCard = new Card (cardItem, '.template');
  const photoCardElement = photoCard.generateCard()

  photoCardsContainer.prepend(photoCardElement);
  formElementPhotoCard.reset()
  siteInput.dispatchEvent(new Event('input'));
  linkInput.dispatchEvent(new Event('input'));

  closePopup(popupPhotoCard);
}

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

import Card from './Card.js'

initialCards.forEach((item) => {
  const card = new Card (item, '.template')
  const cardElement = card.generateCard()
  photoCardsContainer.append(cardElement)
})
