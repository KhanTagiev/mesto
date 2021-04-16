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

  setUserInfo({name, about}) {
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
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      }
    )
  }

  setUserAvatar({avatar}) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      }
    )
  }

  sendNewCard({name, link}) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  deleteCard({_id}){
    return fetch(`${this._url}/cards/${_id}`, {
      method: 'DELETE',
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

  putLike({_id}) {
    return fetch(`${this._url}/cards/likes/${_id}`, {
      method: 'PUT',
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

  deleteLike({_id}) {
    return fetch(`${this._url}/cards/likes/${_id}`, {
      method: 'DELETE',
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
}