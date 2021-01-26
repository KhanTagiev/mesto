const popup = document.querySelector('.popup')
const openPopupBtn = document.querySelector('.profile__edit-btn')
const closePopupBtn = popup.querySelector('.popup__close-btn')
const formElement = popup.querySelector('.form')
const nameInput = formElement.querySelector('.form__input_name')
const jobInput = formElement.querySelector('.form__input_job')
const saveFormBtn = formElement.querySelector('.form__save-btn')
const profile = document.querySelector('.profile')
const nameProfile = profile.querySelector('.profile__name')
const jobProfile = profile.querySelector('.profile__job')

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

