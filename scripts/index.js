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

const popup = document.querySelector('.popup')
const openPopupProfileBtn = document.querySelector('.profile__btn_edit')
const openPopupPhotoCardBtn = document.querySelector('.profile__btn_add')

const popupProfile = document.querySelector('.popup_profile')
const closePopupProfileBtn = popupProfile.querySelector('.popup__btn_close')
const formElementProfile = popupProfile.querySelector('.form')
const nameInput = formElementProfile.querySelector('.form__input_name')
const jobInput = formElementProfile.querySelector('.form__input_job')

const popupPhotoCard = document.querySelector('.popup_photo-card')
const closePopupPhotoCardBtn = popupPhotoCard.querySelector('.popup__btn_close')
const formElementPhotoCard = popupPhotoCard.querySelector('.form')
const siteInput = formElementPhotoCard.querySelector('.form__input_site')
const linkInput = formElementPhotoCard.querySelector('.form__input_url')

const popupPhotoView = document.querySelector('.popup_photo-view')
const photoViewImage = popupPhotoView.querySelector('.photo-view__image')
const photoViewName = popupPhotoView.querySelector('.photo-view__name')
const closePopupPhotoBtn = popupPhotoView.querySelector('.popup__btn_close')

const profile = document.querySelector('.profile')
const nameProfile = profile.querySelector('.profile__name')
const jobProfile = profile.querySelector('.profile__job')
const photoCardsContainer = document.querySelector('.photo-cards__container')
const template = document.querySelector('.template')

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

    togglePopup(popupProfile);
}

function getCard(item) {
  const newCard = template.content.cloneNode(true);
  const imgEl = newCard.querySelector('.photo-card__image');
  const nameEl = newCard.querySelector('.photo-card__name');
  const deleteCardBtn = newCard.querySelector('.photo-card__btn_delete');
  const likeCardBtn = newCard.querySelector('.photo-card__btn_like');
  const openPopupPhotoViewBtn = newCard.querySelector('.photo-card__image');

  imgEl.src = item.link;
  imgEl.alt = item.name;
  nameEl.textContent = item.name;

  deleteCardBtn.addEventListener('click', deleteCard);
  likeCardBtn.addEventListener('click', likeCard);
  openPopupPhotoViewBtn.addEventListener('click',() => {
    photoViewName.textContent = item.name;
    photoViewImage.src = item.link;
    photoViewImage.alt = item.name;

    togglePopup(popupPhotoView);
  });

  return newCard;
}

function formCardHandler (evt) {
  const nameCard = siteInput.value;
  const linkCard = linkInput.value;
  const photoCard = getCard({name: nameCard, link: linkCard});

  evt.preventDefault();
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
  const targetItem = targetEl.closest('.photo-card');

  targetItem.remove();
}

function likeCard(event) {
  const targetEl = event.target;

  targetEl.classList.toggle('photo-card__btn_like_active');
}

renderCards();

openPopupProfileBtn.addEventListener('click',() => {
  upProfileInfo();
  togglePopup(popupProfile);
});
openPopupPhotoCardBtn.addEventListener('click',() => {
  togglePopup(popupPhotoCard);
});
closePopupProfileBtn.addEventListener('click',() => {
  togglePopup(popupProfile);
});
closePopupPhotoCardBtn.addEventListener('click',() => {
  togglePopup(popupPhotoCard);
});
closePopupPhotoBtn.addEventListener('click',() => {
  togglePopup(popupPhotoView);
});
formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPhotoCard.addEventListener('submit', formCardHandler);
