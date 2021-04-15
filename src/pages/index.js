import './index.css';

import Card from '../componets/Card.js'
import FormValidator from '../componets/FormValidator.js'
import Section from '../componets/Section.js'
import PopupWithForm from '../componets/PopupWithForm.js'
import PopupWithImage from '../componets/PopupWithImage.js'
import PopupImageDelete from '../componets/PopupImageDelete.js'
import UserInfo from '../componets/UserInfo.js'
import Api from '../componets/Api.js'

import {initialCards,avatar, validateSelectors, openPopupProfileBtn, formElementProfile, nameInput, aboutInput,
  openPopupPhotoCardBtn, formElementPhotoCard, photoCardsContainer} from '../utils/constants.js'

let UserId

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-22',
  token: '11e9f0e1-4daa-4439-a2bf-878699998a8c',
});

const profileInfo = new UserInfo ({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about',
  avatarSelector: '.profile__avatar'
})

const editFormValidator = new FormValidator(validateSelectors, formElementProfile)
const cardFormValidator = new FormValidator(validateSelectors, formElementPhotoCard)

const popupImage = new PopupWithImage ('.popup_photo-view');
const popupImageDelete = new PopupImageDelete ('.popup_photo-card-delete')
const popupPhotoCardForm = new PopupWithForm (
  {submitForm: (item) => {
    const cardItem = {name: item[0], link: item[1]};
    api.sendNewCard(cardItem)
    .then(card => {
      photoCardsContainer.prepend(createCardItem(card));
    })
    .catch(err => console.log(err));
  }
},
'.popup_photo-card');
const popupProfileForm = new PopupWithForm (
  {submitForm: (item) => {
    const profileItem = {name: item[0], about: item[1]};
    api.setUserInfo(profileItem)
      .then(data => {
        profileInfo.setUserInfo(data)
      })
      .catch(err => console.log(err));
    }
  },
  '.popup_profile');


  function createCardItem(itemElement) {
  const card = new Card ({
    item: itemElement,
    handleCardClick: () => {
      popupImage.open(itemElement);
      popupImage.setEventListeners();
    },
    handleDeleteClick: () => {
      function cardDelete() {
        api.deleteCard(itemElement)
          .then(() => card.deleteCard())
          .catch(err => console.log(err));
        popupImageDelete.close();
      }
      popupImageDelete.open();
      popupImageDelete.setEventListeners(cardDelete)
    }
  },
    '.template'
    );
  return card.generateCard(UserId)
}

function clearInputValidity(formValidator) {
  formValidator.clearValidation()
}

function openProfileInfo() {
  const profileElement = profileInfo.getUserInfo()
  console.log(UserId)
  nameInput.value = profileElement.name;
  aboutInput.value = profileElement.about;
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([data, cards]) => {
  UserId = data._id
  profileInfo.setUserInfo(data)
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


