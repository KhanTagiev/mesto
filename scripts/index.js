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
let openPopupProfileBtn = document.querySelector('.profile__btn_edit')
let openPopupPhotoCardBtn = document.querySelector('.profile__btn_add')

let popupProfile = document.querySelector('.popup_profile')
let closePopupProfileBtn = popupProfile.querySelector('.popup__btn_close')
let formElementProfile = popupProfile.querySelector('.form')
let nameInput = formElementProfile.querySelector('.form__input_name')
let jobInput = formElementProfile.querySelector('.form__input_job')

let popupPhotoCard = document.querySelector('.popup_photo-card')
let closePopupPhotoCardBtn = popupPhotoCard.querySelector('.popup__btn_close')
let formElementPhotoCard = popupPhotoCard.querySelector('.form')
let siteInput = formElementPhotoCard.querySelector('.form__input_site')
let linkInput = formElementPhotoCard.querySelector('.form__input_url')

//let popupPhoto = document.querySelector('.popup_photo')
//let closePopupPhotoBtn = popupPhoto.querySelector('.popup__btn_close')

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

function getCard(item) {
  const newCard = template.content.cloneNode(true);
  const imgEl = newCard.querySelector('.photo-card__image');
  const nameEl = newCard.querySelector('.photo-card__name');
  const deleteCardBtn = newCard.querySelector('.photo-card__btn_delete');
  const likeCardBtn = newCard.querySelector('.photo-card__btn_like');

  imgEl.src = item.link;
  imgEl.alt = item.name;
  nameEl.textContent = item.name;

  deleteCardBtn.addEventListener('click', deleteCard);
  likeCardBtn.addEventListener('click', likeCard)
  return newCard;
}

function formCardHandler (evt) {
  evt.preventDefault();

  const nameCard = siteInput.value;
  const linkCard = linkInput.value;
  const photoCard = getCard({name: nameCard, link: linkCard});

  photoCardsContainer.prepend(photoCard);
  siteInput.value = '';
  linkInput.value = '';

  togglePopup(popupPhotoCard);
}

function renderCards() {
  const cards = initialCards.map(getCard);
  photoCardsContainer.append(...cards);
}

function deleteCard(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.photo-card')
  targetItem.remove()
  console.log(targetEl)
}

function likeCard(event) {
 const targetEl = event.target;
 targetEl.classList.toggle('photo-card__btn_like_active');
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
formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPhotoCard.addEventListener('submit', formCardHandler);
