import Card from './Card.js'
import FormValidator from './FormValidator.js'
import {initialCards} from './initialCards.js'

const validateSelectors = {
  formSelector:'.form',
  inputSelector:'.form__input',
  buttonSelector: '.form__btn',
  buttonDisabledClass: 'form__btn_disabled',
  inputErrorSelector: 'form__input_type_error',
  spanErrorSelector: 'form__input-error_active'
}

const popupProfile = document.querySelector('.popup_profile')
const openPopupProfileBtn = document.querySelector('.profile__btn_edit')

const formElementProfile = popupProfile.querySelector('.form')
const nameInput = formElementProfile.querySelector('.form__input_name')
const jobInput = formElementProfile.querySelector('.form__input_job')
const editFormValidator = new FormValidator(validateSelectors, formElementProfile)

const popupPhotoCard = document.querySelector('.popup_photo-card')
const openPopupPhotoCardBtn = document.querySelector('.profile__btn_add')

const formElementPhotoCard = popupPhotoCard.querySelector('.form')
const siteInput = formElementPhotoCard.querySelector('.form__input_site')
const linkInput = formElementPhotoCard.querySelector('.form__input_url')
const cardFormValidator = new FormValidator(validateSelectors, formElementPhotoCard)

const profile = document.querySelector('.profile')
const nameProfile = profile.querySelector('.profile__name')
const jobProfile = profile.querySelector('.profile__job')
const photoCardsContainer = document.querySelector('.photo-cards__container')

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
function clearInputValidity(formValidator) {
  formValidator.clearValidation()
}

function openProfileInfo() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function openPhotoCardInfo() {
  siteInput.value = '';
  linkInput.value = '';
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

  photoCardsContainer.prepend(createCard(cardItem));
  formElementPhotoCard.reset()

  closePopup(popupPhotoCard);
}

function createCard(item) {
  const card = new Card (item, '.template')
  const cardElement = card.generateCard()
  return cardElement
}

openPopupProfileBtn.addEventListener('click',() => {
  openProfileInfo();
  clearInputValidity(editFormValidator)
  openPopup(popupProfile);
});
openPopupPhotoCardBtn.addEventListener('click',() => {
  openPhotoCardInfo();
  clearInputValidity(cardFormValidator);
  openPopup(popupPhotoCard);
});

formElementProfile.addEventListener('submit', formSubmitProfileHandler);
formElementPhotoCard.addEventListener('submit', formSumbitPhotoCardHandler);

initialCards.forEach((item) => {
  photoCardsContainer.append(createCard(item))
})

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
