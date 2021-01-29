let popup = document.querySelector('.popup')
let openPopupBtn = document.querySelector('.profile__btn_edit')
let closePopupBtn = popup.querySelector('.popup__close-btn')
let formElement = popup.querySelector('.form')
let nameInput = formElement.querySelector('.form__input_name')
let jobInput = formElement.querySelector('.form__input_job')
let saveFormBtn = formElement.querySelector('.form__save-btn')
let profile = document.querySelector('.profile')
let nameProfile = profile.querySelector('.profile__name')
let jobProfile = profile.querySelector('.profile__job')

function openPopup() {
  popup.classList.add('popup_opened')
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value
    closePopup()
 }

openPopupBtn.addEventListener('click', openPopup)
closePopupBtn.addEventListener('click', closePopup)
formElement .addEventListener('submit', formSubmitHandler)

