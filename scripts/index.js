let popup = document.querySelector('.popup')
let openPopupBtn = document.querySelector('.profile__btn_edit')
let closePopupBtn = popup.querySelector('.popup__btn_close')
let formElement = popup.querySelector('.form')
let nameInput = formElement.querySelector('.form__input_name')
let jobInput = formElement.querySelector('.form__input_job')
let saveFormBtn = formElement.querySelector('.form__btn_save')
let profile = document.querySelector('.profile')
let nameProfile = profile.querySelector('.profile__name')
let jobProfile = profile.querySelector('.profile__job')

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function upProfileInfo() {
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    togglePopup()
 }

openPopupBtn.addEventListener('click', togglePopup);
openPopupBtn.addEventListener('click', upProfileInfo);
closePopupBtn.addEventListener('click', togglePopup);
formElement .addEventListener('submit', formSubmitHandler);

