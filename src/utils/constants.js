const vladimirImage = new URL('../images/vladimir.jpg', import.meta.url);
const ivanovoImage = new URL('../images/ivanovo.jpg', import.meta.url);
const velikiyNovgorodImage = new URL('../images/velikiy-novgorod.jpg', import.meta.url);
const kostromaImage = new URL('../images/kostroma.jpg', import.meta.url);
const volgogradImage = new URL('../images/volgograd.jpg', import.meta.url);
const krasnayaPolyanaImage = new URL('../images/krasnaya-polyana.jpg', import.meta.url);

const initialCards = [
  {
    name: 'Владимир',
    link: vladimirImage
  },
  {
    name: 'Иваново',
    link: ivanovoImage
  },
  {
    name: 'Великий Новгород',
    link: velikiyNovgorodImage
  },
  {
    name: 'Кострома',
    link: kostromaImage
  },
  {
    name: 'Волгоград',
    link: volgogradImage
  },
  {
    name: 'Красная Поляна',
    link: krasnayaPolyanaImage
  }
];

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

const avatar = document.querySelector('.profile__avatar')

const formElementProfile = popupProfile.querySelector('.form')
const nameInput = formElementProfile.querySelector('.form__input_name')
const aboutInput = formElementProfile.querySelector('.form__input_about')

const popupPhotoCard = document.querySelector('.popup_photo-card')
const openPopupPhotoCardBtn = document.querySelector('.profile__btn_add')

const formElementPhotoCard = popupPhotoCard.querySelector('.form')

const photoCardsContainer = document.querySelector('.photo-cards__container')

const closeKey = "Escape";

export {initialCards, avatar, validateSelectors, openPopupProfileBtn,formElementAvatar,avatarInput, openPopupAvatarBtn, formElementProfile, nameInput, aboutInput,
  openPopupPhotoCardBtn, formElementPhotoCard, photoCardsContainer, closeKey}
