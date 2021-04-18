(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.item,o=e.handleCardClick,i=e.handleDeleteClick,a=e.handleLikeClick,u=e.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=r,this._selector=n,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=a,this._userId=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".photo-card").cloneNode(!0)}},{key:"setLikeState",value:function(e){var t=this,n=e.likes;this._likeState=Boolean(n.find((function(e){return e._id===t._userId})))}},{key:"returnLikeState",value:function(){return this._likeState}},{key:"putLike",value:function(){this._like.classList.add("photo-card__btn_like_active")}},{key:"removeLike",value:function(){this._like.classList.remove("photo-card__btn_like_active")}},{key:"countLikes",value:function(e){var t=e.likes;this._likeCounter.textContent=t.length}},{key:"handleLikeCard",value:function(e){this.setLikeState(e),this.returnLikeState()?(this.putLike(),this.countLikes(e)):(this.removeLike(),this.countLikes(e))}},{key:"showDeleteButton",value:function(){this._userId===this._item.owner._id&&this._deleteBtn.classList.add("photo-card__btn_delete_visible")}},{key:"_setEventListeners",value:function(){this._deleteBtn.addEventListener("click",this._handleDeleteClick),this._like.addEventListener("click",this._handleLikeClick),this._image.addEventListener("click",this._handleCardClick)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._title=this._element.querySelector(".photo-card__name"),this._image=this._element.querySelector(".photo-card__image"),this._likeCounter=this._element.querySelector(".photo-card__like-counter"),this._deleteBtn=this._element.querySelector(".photo-card__btn_delete"),this._like=this._element.querySelector(".photo-card__btn_like"),this._title.textContent=this._item.name,this._image.src=this._item.link,this._image.alt=this._item.name,this.handleLikeCard(this._item),this.showDeleteButton(),this._setEventListeners(),this._element}},{key:"deleteCard",value:function(){this._element.remove()}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._buttonSelector=t.buttonSelector,this._buttonDisabledClass=t.buttonDisabledClass,this._inputSelectorSelector=t.inputErrorSelector,this._spanErrorSelector=t.spanErrorSelector,this._element=n}var t,r;return t=e,(r=[{key:"_hasInvalid",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalid()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._buttonDisabledClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._buttonDisabledClass))}},{key:"_showInputError",value:function(e,t){var n=this._element.querySelector(".".concat(e.name,"-error"));e.classList.add(this._inputErrorSelector),n.textContent=t,n.classList.add(this._spanErrorSelector)}},{key:"_hideInputError",value:function(e){var t=this._element.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._inputErrorSelector),t.classList.remove(this._spanErrorSelector),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._buttonElement=this._element.querySelector(this._buttonSelector),this._toggleButtonState(this._buttonElement),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"clearValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState(this._buttonElement)}},{key:"enableValidation",value:function(){return this._inputList=Array.from(this._element.querySelectorAll(this._inputSelector)),this._setEventListeners(),this._inputList}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleClickClose=this._handleClickClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._closeKey="Escape"}var t,n;return t=e,(n=[{key:"_handleClickClose",value:function(e){(e.target.classList.contains("popup__btn_close")||e.target.classList.contains("popup"))&&this.close()}},{key:"_handleEscClose",value:function(e){e.key===this._closeKey&&this.close()}},{key:"_setEventListeners",value:function(){this._popupElement.addEventListener("click",this._handleClickClose),document.addEventListener("keydown",this._handleEscClose)}},{key:"_removeEventListeners",value:function(){this._popupElement.removeEventListener("click",this._handleClickClose),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),this._setEventListeners()}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),this._removeEventListeners()}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e,t){var n,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitForm=r,n._form=n._popupElement.querySelector(".form"),n._handleSubmitForm=n._handleSubmitForm.bind(p(n)),n._inputList=Array.from(n._form.querySelectorAll(".form__input")),n._submitBtn=n._form.querySelector(".form__btn_save"),n._submitBtnTextContent=n._submitBtn.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){return this._inputList.map((function(e){return e.value}))}},{key:"submitRendering",value:function(e){e?this._submitBtn.textContent="Сохранение...":(this.close(),this._submitBtn.textContent=this._submitBtnTextContent)}},{key:"_handleSubmitForm",value:function(e){e.preventDefault(),this._submitForm(this._getInputValues())}},{key:"_setEventListeners",value:function(){l(_(a.prototype),"_setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitForm)}},{key:"_removeEventListeners",value:function(){l(_(a.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._handleSubmitForm)}},{key:"close",value:function(){l(_(a.prototype),"close",this).call(this),this._form.reset()}}])&&s(t.prototype,n),a}(u);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._photoViewImage=t._popupElement.querySelector(".photo-view__image"),t._photoViewName=t._popupElement.querySelector(".photo-view__name"),t}return t=a,(n=[{key:"_handlePhotoViewOpen",value:function(e){var t=e.link,n=e.name;this._photoViewName.textContent=n,this._photoViewImage.src=t,this._photoViewImage.alt=n}},{key:"open",value:function(e){var t=e.link,n=e.name;this._handlePhotoViewOpen({link:t,name:n}),v(S(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),a}(u);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._submitBtn=t._popupElement.querySelector(".popup__btn_delete"),t}return t=a,(n=[{key:"setHandleCardDelete",value:function(e){this._handleCardDelete=e}},{key:"_setEventListeners",value:function(){C(R(a.prototype),"_setEventListeners",this).call(this),this._submitBtn.addEventListener("click",this._handleCardDelete)}},{key:"_removeEventListeners",value:function(){C(R(a.prototype),"_removeEventListeners",this).call(this),this._submitBtn.removeEventListener("click",this._handleCardDelete)}}])&&w(t.prototype,n),a}(u);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._name.textContent=t,this._about.textContent=n,this._avatar.src=r}}])&&I(t.prototype,n),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B,T=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"sendNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){var t=e._id;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"putLike",value:function(e){var t=e._id;return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){var t=e._id;return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&q(t.prototype,n),e}(),D={formSelector:".form",inputSelector:".form__input",buttonSelector:".form__btn",buttonDisabledClass:"form__btn_disabled",inputErrorSelector:"form__input_type_error",spanErrorSelector:"form__input-error_active"},x=document.querySelector(".popup_profile"),V=document.querySelector(".profile__btn_edit"),A=document.querySelector(".popup_avatar").querySelector(".form"),U=(A.querySelector(".form__input_avatar"),document.querySelector(".profile__avatar-hover")),F=x.querySelector(".form"),N=F.querySelector(".form__input_name"),H=F.querySelector(".form__input_about"),J=document.querySelector(".popup_photo-card"),K=document.querySelector(".profile__btn_add"),M=J.querySelector(".form");function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".photo-cards__container");var $=new T({url:"https://mesto.nomoreparties.co/v1/cohort-22",headers:{authorization:"11e9f0e1-4daa-4439-a2bf-878699998a8c","Content-Type":"application/json"}}),G=new P({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"}),Q=new r(D,F),W=new r(D,A),X=new r(D,M),Y=new i({renderer:function(e){Y.addItem(oe(e))}},".photo-cards__container"),Z=new g(".popup_photo-view"),ee=new j(".popup_photo-card-delete"),te=new d({submitForm:function(e){te.submitRendering(!0);var t={name:e[0],link:e[1]};$.sendNewCard(t).then((function(e){Y.addNewItem(oe(e))})).catch((function(e){return console.log(e)})).finally(te.submitRendering(!1))}},".popup_photo-card"),ne=new d({submitForm:function(e){ne.submitRendering(!0);var t={name:e[0],about:e[1]};$.setUserInfo(t).then((function(e){G.setUserInfo(e)})).catch((function(e){return console.log(e)})).finally(ne.submitRendering(!1))}},".popup_profile"),re=new d({submitForm:function(e){re.submitRendering(!0);var t={avatar:e[0]};$.setUserAvatar(t).then((function(e){G.setUserInfo(e)})).finally(re.submitRendering(!1))}},".popup_avatar");function oe(e){var n=new t({item:e,handleCardClick:function(){Z.open(e)},handleDeleteClick:function(){ee.setHandleCardDelete((function(){$.deleteCard(e).then((function(){n.deleteCard(),ee.close()})).catch((function(e){return console.log(e)}))})),ee.open()},handleLikeClick:function(){n.returnLikeState()?$.deleteLike(e).then((function(e){n.handleLikeCard(e)})).catch((function(e){return console.log(e)})):$.putLike(e).then((function(e){n.handleLikeCard(e)})).catch((function(e){return console.log(e)}))},userId:B},".template");return n.generateCard()}function ie(e){e.clearValidation()}Promise.all([$.getUserInfo(),$.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];B=o._id,G.setUserInfo(o),Y.renderItems(i)})).catch((function(e){return console.log(e)})),V.addEventListener("click",(function(){var e;e=G.getUserInfo(),N.value=e.name,H.value=e.about,ie(Q),ne.open()})),U.addEventListener("click",(function(){ie(W),re.open()})),K.addEventListener("click",(function(){ie(X),te.open()})),Q.enableValidation(),X.enableValidation(),W.enableValidation()})();