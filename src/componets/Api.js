export default class Api {
  constructor({url, token}) {
    this._url = url;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then( response => {
        if (response) {
          return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }


  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(response => {
        if (response) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  updateUserInfo({name, about}) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(response => {
        if (response) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

}
