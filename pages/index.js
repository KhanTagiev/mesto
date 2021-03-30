import Card from '../componets/Card.js'
import FormValidator from '../componets/FormValidator.js'
import Section from '../componets/Section.js'
import PopupWithForm from '../componets/PopupWithForm.js'
import PopupWithImage from '../componets/PopupWithImage.js'

import {initialCards, validateSelectors,
  openPopupProfileBtn, formElementProfile, openPopupPhotoCardBtn, formElementPhotoCard,nameProfile, jobProfile,
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

const popupProfileForm = new PopupWithForm (
  {submitForm: (item) => {
    nameProfile.textContent = item[0];
    jobProfile.textContent = item[1];
  }
  },
  '.popup_profile');

const popupPhotoCardForm = new PopupWithForm (
  {submitForm: (item) => {
    const cardItem = {name: item[0], link: item[1]};
    photoCardsContainer.prepend(createCardItem(cardItem));
   }
},
    '.popup_photo-card');

openPopupProfileBtn.addEventListener('click',() => {
  clearInputValidity(editFormValidator)
  popupProfileForm.open()
  popupProfileForm.setEventListeners()
});

openPopupPhotoCardBtn.addEventListener('click',() => {
  clearInputValidity(cardFormValidator);
  popupPhotoCardForm.open()
  popupPhotoCardForm.setEventListeners()
});

function createCardItem(itemElement) {
  const card = new Card (
    {item: itemElement,
    handleCardClick: () => {
      const popupWithImage = new PopupWithImage (itemElement, '.popup_photo-view');
      popupWithImage.open();
      popupWithImage.setEventListeners();
    }},
    '.template'
  );
  const cardElement = card.generateCard()
  return cardElement
}

const initialCardsRender = new Section({
  items: initialCards,
  renderer: (itemElement) => {
    initialCardsRender.addItem(createCardItem(itemElement))
  }},
  '.photo-cards__container'
);

initialCardsRender.renderItems()

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
