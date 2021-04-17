import './index.css';

import Card from '../componets/Card.js'
import FormValidator from '../componets/FormValidator.js'
import Section from '../componets/Section.js'
import PopupWithForm from '../componets/PopupWithForm.js'
import PopupWithImage from '../componets/PopupWithImage.js'
import PopupImageDelete from '../componets/PopupImageDelete.js'
import UserInfo from '../componets/UserInfo.js'
import Api from '../componets/Api.js'

import {validateSelectors, openPopupProfileBtn,formElementAvatar,avatarInput, openPopupAvatarBtn, formElementProfile, nameInput, aboutInput,
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

const editFormValidator = new FormValidator(validateSelectors, formElementProfile);
const editAvatarFormValidator = new FormValidator(validateSelectors, formElementAvatar);
const cardFormValidator = new FormValidator(validateSelectors, formElementPhotoCard);

const popupImage = new PopupWithImage ('.popup_photo-view');
const popupImageDelete = new PopupImageDelete ('.popup_photo-card-delete')
const popupPhotoCardForm = new PopupWithForm (
  {submitForm: (item) => {
    popupPhotoCardForm.submitRendering(true)
    const cardItem = {name: item[0], link: item[1]};
    api.sendNewCard(cardItem)
    .then(card => {
      photoCardsContainer.prepend(createCardItem(card));
    })
    .catch(err => console.log(err))
    .finally(popupPhotoCardForm.submitRendering(false));
  }
},
'.popup_photo-card');

const popupProfileForm = new PopupWithForm (
  {submitForm: (item) => {
    popupProfileForm.submitRendering(true)
    const profileItem = {name: item[0], about: item[1]};
    api.setUserInfo(profileItem)
      .then(data => {
        profileInfo.setUserInfo(data)
      })
      .catch(err => console.log(err))
      .finally(popupProfileForm.submitRendering(false));
    }
  },
  '.popup_profile');

const popupAvatarForm = new PopupWithForm (
  {submitForm: (item) => {
    popupAvatarForm.submitRendering(true);
    const profileItem = {avatar: item[0]};
    api.setUserAvatar(profileItem)
      .then(data => {
        profileInfo.setUserInfo(data)
      })
      .finally(popupAvatarForm.submitRendering(false));
    }
  },
  '.popup_avatar');

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
      popupImageDelete.setHandleCardDelete(cardDelete)
      popupImageDelete.setEventListeners()
      popupImageDelete.open();
    },
    handleLikeClick: () => {
      if (card.returnLikeState()) {
        api.deleteLike(itemElement)
          .then(data => {
            card.handleLikeCard(data)
          })
          .catch(err => console.log(err));
      } else {
        api.putLike(itemElement)
          .then(data => {
            card.handleLikeCard(data)
          })
          .catch(err => console.log(err));
      }

    },
    userId: UserId
  },
    '.template'
    );
  return card.generateCard()
}

function clearInputValidity(formValidator) {
  formValidator.clearValidation()
}

function updateInputsValue() {
  const profileInputs = profileInfo.getUserInfo()
  nameInput.value = profileInputs.name;
  aboutInput.value = profileInputs.about;
  avatarInput.value = profileInputs.avatar;
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
  updateInputsValue()
  clearInputValidity(editFormValidator)
  popupProfileForm.open()
  popupProfileForm.setEventListeners()
});

openPopupAvatarBtn.addEventListener('click',() => {
  updateInputsValue()
  clearInputValidity(editAvatarFormValidator)
  popupAvatarForm.open()
  popupAvatarForm.setEventListeners()
});


openPopupPhotoCardBtn.addEventListener('click',() => {
  clearInputValidity(cardFormValidator);
  popupPhotoCardForm.open()
  popupPhotoCardForm.setEventListeners()
});

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();
