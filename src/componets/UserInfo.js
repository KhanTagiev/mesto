export default class UserInfo {
  constructor ({nameSelector, jobSelector}) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const userInfoElement = {
      name: this._name.textContent,
      job: this._job.textContent
    };

    return userInfoElement
  }

  setUserInfo({name, job}) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
