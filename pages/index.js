import Card from '../componets/Card.js'
import FormValidator from '../componets/FormValidator.js'
import Section from '../componets/Section.js'

import {initialCards, validateSelectors,popupProfile,
  openPopupProfileBtn, formElementProfile, nameInput,
  jobInput,popupPhotoCard, openPopupPhotoCardBtn, formElementPhotoCard,
  siteInput, linkInput,profile,nameProfile, jobProfile,
  photoCardsContainer} from '../utils/constants.js'


const editFormValidator = new FormValidator(validateSelectors, formElementProfile)
const cardFormValidator = new FormValidator(validateSelectors, formElementPhotoCard)

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

const initialCardsRender = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card (item, '.template');
    const cardElement = card.generateCard()
    initialCardsRender.addItem(cardElement)
  }},
  '.photo-cards__container'
);

initialCardsRender.renderItems()

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
