import './index.css';

import Card from '../componets/Card.js'
import FormValidator from '../componets/FormValidator.js'
import Section from '../componets/Section.js'
import PopupWithForm from '../componets/PopupWithForm.js'
import PopupWithImage from '../componets/PopupWithImage.js'
import UserInfo from '../componets/UserInfo.js'
import Api from '../componets/Api.js'

import {initialCards,avatar, validateSelectors, openPopupProfileBtn, formElementProfile, nameInput, aboutInput,
  openPopupPhotoCardBtn, formElementPhotoCard, photoCardsContainer} from '../utils/constants.js'

const editFormValidator = new FormValidator(validateSelectors, formElementProfile)
const cardFormValidator = new FormValidator(validateSelectors, formElementPhotoCard)

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-22',
  token: '11e9f0e1-4daa-4439-a2bf-878699998a8c',
});

const popupPhotoCardForm = new PopupWithForm (
  {submitForm: (item) => {
    const cardItem = {name: item[0], link: item[1]};
    photoCardsContainer.prepend(createCardItem(cardItem));
  }
},
'.popup_photo-card');

const profileInfo = new UserInfo ({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about',
})

const popupProfileForm = new PopupWithForm (
  {submitForm: (item) => {
    const profileItem = {name: item[0], about: item[1]};
    profileInfo.setUserInfo(profileItem)
    api.updateUserInfo(profileItem)
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
  aboutInput.value = profileElement.about;
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

editFormValidator.enableValidation();
cardFormValidator.enableValidation();



api.getUserInfo()
  .then(data => {
    profileInfo.setUserInfo(data)
    avatar.src = data.avatar
  })
  .catch(err => console.log(err))

api.getInitialCards()
 .then(cards => {
       const initialCardsRender = new Section({
        items: cards,
        renderer: (itemElement) => {
          initialCardsRender.addItem(createCardItem(itemElement))
        }},
        '.photo-cards__container'
      );
      initialCardsRender.renderItems()
  })
  .catch(err => console.log(err))
