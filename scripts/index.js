const popup = document.querySelector('.popup')
const openPopupBtn = document.querySelector('.profile__edit-btn')
const closePopupBtn = popup.querySelector('.popup__close-btn')

function togglePopup() {
  popup.classList.toggle('popup_opened')
}

openPopupBtn.addEventListener('click', togglePopup)
closePopupBtn.addEventListener('click', togglePopup)

