import './index.css';

import Card from '../componets/Card.js'
import FormValidator from '../componets/FormValidator.js'
import Section from '../componets/Section.js'
import PopupWithForm from '../componets/PopupWithForm.js'
import PopupWithImage from '../componets/PopupWithImage.js'
import UserInfo from '../componets/UserInfo.js'

import {initialCards, validateSelectors, openPopupProfileBtn, formElementProfile,
  openPopupPhotoCardBtn, formElementPhotoCard, photoCardsContainer} from '../utils/constants.js'

const editFormValidator = new FormValidator(validateSelectors, formElementProfile)
const cardFormValidator = new FormValidator(validateSelectors, formElementPhotoCard)

const initialCardsRender = new Section({
  items: initialCards,
  renderer: (itemElement) => {
    initialCardsRender.addItem(createCardItem(itemElement))
  }},
  '.photo-cards__container'
);

const popupPhotoCardForm = new PopupWithForm (
  {submitForm: (item) => {
    const cardItem = {name: item[0], link: item[1]};
    photoCardsContainer.prepend(createCardItem(cardItem));
  }
},
'.popup_photo-card');

const openProfileInfo = new UserInfo ({
  nameInputSelector: '.form__input_name',
  jobInputSelector: '.form__input_job'
})

const popupProfileForm = new PopupWithForm (
  {submitForm: (item) => {
    openProfileInfo.setUserInfo(item)
  }
},
'.popup_profile');

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

function clearInputValidity(formValidator) {
  formValidator.clearValidation()
}

openPopupProfileBtn.addEventListener('click',() => {
  clearInputValidity(editFormValidator)
  openProfileInfo.getUserInfo()
  popupProfileForm.open()
  popupProfileForm.setEventListeners()
});

openPopupPhotoCardBtn.addEventListener('click',() => {
  clearInputValidity(cardFormValidator);
  popupPhotoCardForm.open()
  popupPhotoCardForm.setEventListeners()
});

initialCardsRender.renderItems()

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
