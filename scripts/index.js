const initialCards = [
  {
    name: 'Владимир',
    link: './images/vladimir.jpg'
  },
  {
    name: 'Иваново',
    link: './images/ivanovo.jpg'
  },
  {
    name: 'Великий Новгород',
    link: './images/velikiy-novgorod.jpg'
  },
  {
    name: 'Кострома',
    link: './images/kostroma.jpg'
  },
  {
    name: 'Волгоград',
    link: './images/volgograd.jpg'
  },
  {
    name: 'Красная Поляна',
    link: './images/krasnaya-polyana.jpg'
  }
];

let popup = document.querySelector('.popup')
let popupProfile = document.querySelector('.popup_profile')
let popupPhotoCard = document.querySelector('.popup_photo-card')
//let popupPhoto = document.querySelector('.popup_photo')
let openPopupProfileBtn = document.querySelector('.profile__btn_edit')
let openPopupPhotoCardBtn = document.querySelector('.profile__btn_add')
let closePopupProfileBtn = popupProfile.querySelector('.popup__btn_close')
let closePopupPhotoCardBtn = popupPhotoCard.querySelector('.popup__btn_close')
//let closePopupPhotoBtn = popupPhoto.querySelector('.popup__btn_close')
let formElementProfile = popupProfile.querySelector('.form')
let nameInput = formElementProfile.querySelector('.form__input_name')
let jobInput = formElementProfile.querySelector('.form__input_job')
let saveFormBtn = formElementProfile.querySelector('.form__btn_save')
let profile = document.querySelector('.profile')
let nameProfile = profile.querySelector('.profile__name')
let jobProfile = profile.querySelector('.profile__job')
let photoCardsContainer = document.querySelector('.photo-cards__container')
let template = document.querySelector('.template')

function togglePopup (pop) {
  pop.classList.toggle('popup_opened');
}

function upProfileInfo() {
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    togglePopup(popupProfile)
}

function renderCards() {
  const cards = initialCards.map(getCard)
  photoCardsContainer.append(...cards)
}

function getCard(item) {
  const newCard = template.content.cloneNode(true)
  const imgEl = newCard.querySelector('.photo-card__image')
  const nameEl = newCard.querySelector('.photo-card__name')

  imgEl.src = item.link
  imgEl.alt = item.name
  nameEl.textContent = item.name
  return newCard
}


renderCards();
openPopupProfileBtn.addEventListener('click',() => {
  togglePopup(popupProfile)
});
openPopupProfileBtn.addEventListener('click', upProfileInfo);
openPopupPhotoCardBtn.addEventListener('click',() => {
  togglePopup(popupPhotoCard)
});
//openPopupPhotoBtn.addEventListener('click',() => {
//  togglePopup(popupPhoto)
//});
closePopupProfileBtn.addEventListener('click',() => {
  togglePopup(popupProfile)
});
closePopupPhotoCardBtn.addEventListener('click',() => {
  togglePopup(popupPhotoCard)
});
//closePopupPhotoBtn.addEventListener('click',() => {
//  togglePopup(popupPhoto)
//});
formElementProfile.addEventListener('submit', formSubmitHandler)
