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

const popupAvatar = document.querySelector('.popup_avatar')
const formElementAvatar = popupAvatar.querySelector('.form')
const avatarInput = formElementAvatar.querySelector('.form__input_avatar')
const openPopupAvatarBtn = document.querySelector('.profile__avatar-hover')

const formElementProfile = popupProfile.querySelector('.form')
const nameInput = formElementProfile.querySelector('.form__input_name')
const aboutInput = formElementProfile.querySelector('.form__input_about')

const popupPhotoCard = document.querySelector('.popup_photo-card')
const openPopupPhotoCardBtn = document.querySelector('.profile__btn_add')

const formElementPhotoCard = popupPhotoCard.querySelector('.form')

const photoCardsContainer = document.querySelector('.photo-cards__container')

export {validateSelectors, openPopupProfileBtn,formElementAvatar,avatarInput, openPopupAvatarBtn, formElementProfile, nameInput, aboutInput,
  openPopupPhotoCardBtn, formElementPhotoCard, photoCardsContainer}
