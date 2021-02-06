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
