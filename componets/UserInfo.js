export default class UserInfo {
  constructor ({nameInputSelector, jobInputSelector}) {
    this._nameInput  = document.querySelector(nameInputSelector);
    this._jobInput = document.querySelector(jobInputSelector);
    this._name = document.querySelector('.profile__name');
    this._job = document.querySelector('.profile__job');
  }

  getUserInfo() {
    this._nameInput.value = this._name.textContent
    this._jobInput.value = this._job.textContent
  }

  setUserInfo(item) {
    this._name.textContent = item[0];
    this._job.textContent = item[1];
  }
}
