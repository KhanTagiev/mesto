let popup = document.querySelector('.popup')
let openPopupBtn = document.querySelector('.profile__edit-btn')
let closePopupBtn = popup.querySelector('.popup__close-btn')
let formElement = popup.querySelector('.form')
let nameInput = formElement.querySelector('.form__input_name')
let jobInput = formElement.querySelector('.form__input_job')
let saveFormBtn = formElement.querySelector('.form__save-btn')
let profile = document.querySelector('.profile')
let nameProfile = profile.querySelector('.profile__name')
let jobProfile = profile.querySelector('.profile__job')

function togglePopup() {
  popup.classList.toggle('popup_opened')
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent;
}

openPopupBtn.addEventListener('click', togglePopup)
closePopupBtn.addEventListener('click', togglePopup)

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value
    togglePopup()
 }

formElement .addEventListener('submit', formSubmitHandler);

