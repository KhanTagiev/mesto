import './index.css';

import Card from '../componets/Card.js'
import FormValidator from '../componets/FormValidator.js'
import Section from '../componets/Section.js'
import PopupWithForm from '../componets/PopupWithForm.js'
import PopupWithImage from '../componets/PopupWithImage.js'
import UserInfo from '../componets/UserInfo.js'

import {initialCards, validateSelectors, openPopupProfileBtn, formElementProfile, nameInput, jobInput,
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

const profileInfo = new UserInfo ({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
})

const popupProfileForm = new PopupWithForm (
  {submitForm: (item) => {
    const profileItem = {name: item[0], job: item[1]};
    profileInfo.setUserInfo(profileItem)
  }
},
'.popup_profile');

const popupImage = new PopupWithImage ('.popup_photo-view');

function createCardItem(itemElement) {
  const card = new Card (
    {item: itemElement,
    handleCardClick: () => {
      popupImage.open(itemElement);
      popupImage.setEventListeners();
    }},
    '.template'
  );
  const cardElement = card.generateCard()
  return cardElement
}

function clearInputValidity(formValidator) {
  formValidator.clearValidation()
}

function openProfileInfo() {
  const profileElement = profileInfo.getUserInfo()
  nameInput.value = profileElement.name;
  jobInput.value = profileElement.job;
}

openPopupProfileBtn.addEventListener('click',() => {
  clearInputValidity(editFormValidator)
  openProfileInfo()
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
