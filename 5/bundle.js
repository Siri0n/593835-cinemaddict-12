/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: EMOJI, COMMENTS_COUNT, GENRES_COUNT, POSTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMOJI", function() { return EMOJI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_COUNT", function() { return COMMENTS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENRES_COUNT", function() { return GENRES_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTERS", function() { return POSTERS; });
const EMOJI = [`angry.png`, `puke.png`, `sleeping.png`, `smile.png`];
const COMMENTS_COUNT = 5;
const GENRES_COUNT = 1;
const POSTERS = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _mocks_film_mock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks/film-mock.js */ "./src/mocks/film-mock.js");
/* harmony import */ var _mocks_comment_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mocks/comment-mock */ "./src/mocks/comment-mock.js");
/* harmony import */ var _view_user_title_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/user-title.js */ "./src/view/user-title.js");
/* harmony import */ var _view_main_nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/main-nav.js */ "./src/view/main-nav.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_films_section_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/films-section.js */ "./src/view/films-section.js");
/* harmony import */ var _view_films_list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/films-list-container.js */ "./src/view/films-list-container.js");
/* harmony import */ var _view_no_films_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/no-films.js */ "./src/view/no-films.js");
/* harmony import */ var _view_films_card_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/films-card.js */ "./src/view/films-card.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _view_films_extra_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/films-extra.js */ "./src/view/films-extra.js");
/* harmony import */ var _view_films_details_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/films-details.js */ "./src/view/films-details.js");
/* harmony import */ var _view_statistics_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/statistics.js */ "./src/view/statistics.js");
const FILMS_AMOUN = 15;
const CARDS_AMOUNT_PER_STEP = 5;
const CARDS_EXTRA_AMOUNT = 2;



















// массив с фильмами
let filmsData = new Array(FILMS_AMOUN).fill().map(_mocks_film_mock_js__WEBPACK_IMPORTED_MODULE_1__["createFilmDataTemplate"]);
// filmsData = null;

// массив с комментариями
const commentsData = new Array(FILMS_AMOUN).fill().map(_mocks_comment_mock__WEBPACK_IMPORTED_MODULE_2__["createCommentDataTemplate"]);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

// пользователь
const user = new _view_user_title_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteHeaderElement, user.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

// главная нвигация
const mainNav = new _view_main_nav_js__WEBPACK_IMPORTED_MODULE_4__["default"](filmsData);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, mainNav.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

// сортировка
const sorting = new _view_sorting_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, sorting.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

// статистика в футоре
const footerStatistics = new _view_statistics_js__WEBPACK_IMPORTED_MODULE_14__["default"](filmsData);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteFooterElement, footerStatistics.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);


// Отрисовка карточи

const renderCard = (cardListElement, currentFilmData, commentArray, position) => {

  const filmCardComponent = new _view_films_card_js__WEBPACK_IMPORTED_MODULE_10__["default"](currentFilmData);
  const filmFilmDetailsComponent = new _view_films_details_js__WEBPACK_IMPORTED_MODULE_13__["default"](currentFilmData, commentArray);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      // закрываем попап
      filmFilmDetailsComponent.getElement().remove();
      filmFilmDetailsComponent.removeElement();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const onCloseButton = () => {
    // закрываем попап
    filmFilmDetailsComponent.getElement().remove();
    filmFilmDetailsComponent.removeElement();
    document.removeEventListener(`keydown`, onEscKeyDown);
    document.removeEventListener(`click`, onCloseButton);
  };

  const showFilmFilmDetails = () => {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteFooterElement, filmFilmDetailsComponent.getElement(), position);
    document.addEventListener(`keydown`, onEscKeyDown);
    const closeButon = filmFilmDetailsComponent.getElement().querySelector(`.film-details__close-btn`);
    closeButon.addEventListener(`click`, onCloseButton);
  };

  filmCardComponent.getElement().querySelector(`.film-card__title`).addEventListener(`click`, () => {
    // показываем попап
    showFilmFilmDetails();
  });

  filmCardComponent.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => {
    // показываем попап
    showFilmFilmDetails();
  });

  filmCardComponent.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, () => {
    // показываем попап
    showFilmFilmDetails();
  });

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(cardListElement, filmCardComponent.getElement(), position);
};

// ---> Функии отрисовки главного содержимого

const renderMainContent = (filmsContainer, dataArray, commentArray) => {
  // главная секция с фильмами
  const filmsSectionComponent = new _view_films_section_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsContainer, filmsSectionComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  if (!dataArray) {
    const notification = new _view_no_films_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsSectionComponent.getElement(), notification.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
    return;
  }

  // секция с карточками фильмов
  const filmsListComponent = new _view_films_list_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsSectionComponent.getElement(), filmsListComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  // секция контейнера списка карточек
  const filmsListContainerComponent = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsListComponent.getElement(), filmsListContainerComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);


  for (let i = 0; i < Math.min(dataArray.length, CARDS_AMOUNT_PER_STEP); i++) {
    // render(filmsListContainerComponent.getElement(), new FilmCardView(dataArray[i]).getElement(), RenderPosition.BEFOREEND);
    renderCard(filmsListContainerComponent.getElement(), dataArray[i], commentArray, _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
  }

  if (dataArray.length > CARDS_AMOUNT_PER_STEP && CARDS_AMOUNT_PER_STEP >= CARDS_AMOUNT_PER_STEP) {
    let renderedCardsCount = CARDS_AMOUNT_PER_STEP;

    // отрисовка кнопки ShowMore

    const loadMoreButtonComponent = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsListComponent.getElement(), loadMoreButtonComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

    loadMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();
      dataArray
        .slice(renderedCardsCount, renderedCardsCount + CARDS_AMOUNT_PER_STEP)
        .forEach((dataItem) => renderCard(filmsListContainerComponent.getElement(), dataItem, commentArray, _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND));

      renderedCardsCount += CARDS_AMOUNT_PER_STEP;

      if (renderedCardsCount >= dataArray.length) {
        loadMoreButtonComponent.getElement().remove();
        loadMoreButtonComponent.removeElement();
      }
    });
  }


  //  extra - TOP
  const extraSectionTopRating = new _view_films_extra_js__WEBPACK_IMPORTED_MODULE_12__["default"](`Top rated`);
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsSectionComponent.getElement(), extraSectionTopRating.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
  const extraSectionTopList = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(extraSectionTopRating.getElement(), extraSectionTopList.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  // сортируем по рейтингу
  const dataArrayRating = dataArray.sort((a, b) => a.rating < b.rating ? 1 : -1);

  for (let i = 0; i < Math.min(dataArrayRating.length, CARDS_EXTRA_AMOUNT); i++) {
    renderCard(extraSectionTopList.getElement(), dataArrayRating[i], commentArray, _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
  }

  //  extra - COMMENTS
  const extraSectionMostCommented = new _view_films_extra_js__WEBPACK_IMPORTED_MODULE_12__["default"](`Most commented`);
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsSectionComponent.getElement(), extraSectionMostCommented.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
  const extraSectionCommentedList = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(extraSectionMostCommented.getElement(), extraSectionCommentedList.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  // сортируем по кол-ву комментариев

  const dataArrayCommented = dataArray.sort((a, b) => a.commentsCount < b.commentsCount ? 1 : -1);

  for (let i = 0; i < Math.min(dataArrayCommented.length, CARDS_EXTRA_AMOUNT); i++) {
    renderCard(extraSectionCommentedList.getElement(), dataArrayCommented[i], commentArray, _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
  }
};

// <--- Функции отрисовки


renderMainContent(siteMainElement, filmsData, commentsData);


/***/ }),

/***/ "./src/mocks/comment-mock.js":
/*!***********************************!*\
  !*** ./src/mocks/comment-mock.js ***!
  \***********************************/
/*! exports provided: createCommentDataTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentDataTemplate", function() { return createCommentDataTemplate; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const createCommentDataTemplate = () => {
  return {
    author: `Tim Macoveev`,
    text: `Interesting setting and a good cast`,
    emoji: _const_js__WEBPACK_IMPORTED_MODULE_0__["EMOJI"][Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, _const_js__WEBPACK_IMPORTED_MODULE_0__["EMOJI"].length - 1)],
    date: `2019/12/31 23:59`
  };
};


/***/ }),

/***/ "./src/mocks/film-mock.js":
/*!********************************!*\
  !*** ./src/mocks/film-mock.js ***!
  \********************************/
/*! exports provided: createFilmDataTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmDataTemplate", function() { return createFilmDataTemplate; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateDescriptions = () => {
  const descriptions = string.split(`.`).filter((item) => {
    return item !== ``;
  });

  const randomIndex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, descriptions.length - 1);
  return descriptions[randomIndex];
};

const generateRating = () => {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 90) / 10;
};

const createFilmDataTemplate = () => {
  let cuurentPoster = _const_js__WEBPACK_IMPORTED_MODULE_1__["POSTERS"][Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 6)];

  return {
    title: `Predator-${Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 5)}`,
    poster: cuurentPoster,

    posterFull: cuurentPoster,
    originalTitle: `Best Film Ever`,
    director: `Tom`,
    writers: [`Tom`, `Johns`],
    actors: [`Bob`, `Rob`, `Tod`, `John Wayne`],
    dateOfRelease: 1930,
    country: `USA`,
    ageRating: `${Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 18)}+`,
    genres: [`Film-Noir`, `Drama`, `Musical`],
    description: generateDescriptions(),
    rating: generateRating(),
    dateOfProduction: 1929,
    runtime: `1h 55m`,
    genre: `Musical`,
    commentsCount: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 10),
    isWatchlist: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isWatched: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isFavorite: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1))
  };
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, RenderPosition, render, renderTemplate, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREEND:
      container.append(element);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


/***/ }),

/***/ "./src/view/film-details-comment.js":
/*!******************************************!*\
  !*** ./src/view/film-details-comment.js ***!
  \******************************************/
/*! exports provided: createFilmDetailsComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmDetailsComment", function() { return createFilmDetailsComment; });
const createFilmDetailsComment = (comment = {}) => {
  const {
    author = ``,
    text = ``,
    emoji = ``,
    date = ``
  } = comment;


  return (
    `
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${emoji}" width="55" height="55" alt="emoji-${emoji.slice(0, -4)}">
      </span>
      <div>
        <p class="film-details__comment-text">${text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${author}</span>
          <span class="film-details__comment-day">${date}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
    `
  );
};


/***/ }),

/***/ "./src/view/films-card.js":
/*!********************************!*\
  !*** ./src/view/films-card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const createFilmCardTemplate = (film = {}) => {
  const {
    title = ``,
    poster = ``,
    description = ``,
    rating = ``,
    dateOfProduction = ``,
    runtime = ``,
    genres = ``,
    commentsCount = ``,
    isWatchlist = ``,
    isWatched = ``,
    isFavorite = ``
  } = film;

  const watchlistClassName = isWatchlist ? `film-card__controls-item--add-to-watchlist film-card__controls-item--active` : `film-card__controls-item--add-to-watchlist`;
  const watchedClassName = isWatched ? `film-card__controls-item--mark-as-watched film-card__controls-item--active` : `film-card__controls-item--mark-as-watched`;
  const favoriteClassName = isFavorite ? `film-card__controls-item--favorite film-card__controls-item--active` : `film-card__controls-item--favorite`;
  // ограничиваем длинну описания
  const filmCardDescription = description.length < 140 ? description : description.slice(0, 139) + `...`;
  // если в списке жанром не один элемент, то просто беру первый
  const genresCurrentValue = genres > _const_js__WEBPACK_IMPORTED_MODULE_1__["GENRES_COUNT"] ? _const_js__WEBPACK_IMPORTED_MODULE_1__["GENRES_COUNT"] : genres;

  let commentsCurrentValue = commentsCount > _const_js__WEBPACK_IMPORTED_MODULE_1__["COMMENTS_COUNT"] ? _const_js__WEBPACK_IMPORTED_MODULE_1__["COMMENTS_COUNT"] : commentsCount;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${dateOfProduction}</span>
        <span class="film-card__duration">${runtime}</span>
        <span class="film-card__genre">${genresCurrentValue}</span>
      </p>
      <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${filmCardDescription}</p>
      <a class="film-card__comments">${commentsCurrentValue} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item ${watchlistClassName}">Add to watchlist</button>
        <button class="film-card__controls-item button ${watchedClassName}">Mark as watched</button>
        <button class="film-card__controls-item button ${favoriteClassName}">Mark as favorite</button>
      </form>
    </article>`
  );
};

class FilmCard {
  constructor(film) {
    this.film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmCardTemplate(this.film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films-details.js":
/*!***********************************!*\
  !*** ./src/view/films-details.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCardDetails; });
/* harmony import */ var _film_details_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film-details-comment */ "./src/view/film-details-comment.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const createGenresTemplate = (genres) => {
  return genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(``);
};

const createGenreTerm = (genres) => {
  return genres.length > 1 ? `Genres` : `Genre`;
};

const createActorsList = (actors) => {
  return actors.map((actor) => `${actor}`).join(`, `);
};
const createWritersList = (writers) => {
  return writers.map((writer) => `${writer}`).join(`, `);
};


const createFilmDetails = (film = {}, comments) => {
  const {
    posterFull = ``,
    title = ``,
    originalTitle = ``,
    rating = ``,
    director = ``,
    writers = ``,
    actors = ``,
    dateOfRelease = ``,
    runtime = ``,
    country = ``,
    genres = ``,
    commentsCount = ``,
    description = ``,
    ageRating = ``,

  } = film;

  const genresTemplate = createGenresTemplate(genres);
  const genreTerm = createGenreTerm(genres);
  const actorsList = createActorsList(actors);
  const writersList = createWritersList(writers);

  const filmDetailsComments = comments.slice(0, commentsCount).map(_film_details_comment__WEBPACK_IMPORTED_MODULE_0__["createFilmDetailsComment"]).join(``);

  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./images/posters/${posterFull}" alt="${title}">

              <p class="film-details__age">${ageRating}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${originalTitle}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${writersList}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actorsList}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${dateOfRelease}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${runtime}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${country}</td>
                </tr>
              <tr class="film-details__row">
                <td class="film-details__term">${genreTerm}</td>
                <td class="film-details__cell">
                  ${genresTemplate}
                </td>
              </tr>
              </table>

              <p class="film-details__film-description">${description}</p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched"">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsCount}</span></h3>
            <ul class="film-details__comments-list">
              ${filmDetailsComments}
            </ul>
            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label">
                <img src="images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
              </div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">Great movie!</textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" checked>
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`
  );
};

class FilmCardDetails {
  constructor(film, comments) {
    this.comments = comments;
    this.film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmDetails(this.film, this.comments);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films-extra.js":
/*!*********************************!*\
  !*** ./src/view/films-extra.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListExtraSection; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmsListExtraTemplate = (title) => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">${title}</h2>
    </section>`
  );
};

class FilmsListExtraSection {
  constructor(title) {
    this._title = title;
    this._element = null;
  }

  getTemplate() {
    return createFilmsListExtraTemplate(this._title);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films-list-container.js":
/*!******************************************!*\
  !*** ./src/view/films-list-container.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListContainer; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmsListContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

class FilmsListContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListContainerTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsList; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmsListTemplate = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

    </section>`
  );
};

class FilmsList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films-section.js":
/*!***********************************!*\
  !*** ./src/view/films-section.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsSection; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmsSectionTemplate = () => {
  return (
    `<section class="films"></section>`
  );
};

class FilmsSection {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsSectionTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/main-nav.js":
/*!******************************!*\
  !*** ./src/view/main-nav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNavigation; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createMainNavigationTemplate = (data) => {
  const watchlistAmount = (typeof data !== `undefined` && data !== null) ? data.reduce((prev, item) => prev + +item.isWatchlist, 0) : 0;
  const historyAmount = (typeof data !== `undefined` && data !== null) ? data.reduce((prev, item) => prev + +item.isWatched, 0) : 0;
  const favoritesAmount = (typeof data !== `undefined` && data !== null) ? data.reduce((prev, item) => prev + +item.isFavorite, 0) : 0;

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlistAmount}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${historyAmount}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoritesAmount}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

class MainNavigation {
  constructor(data) {
    this._data = data;
    this._element = null;
  }

  getTemplate() {
    return createMainNavigationTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/no-films.js":
/*!******************************!*\
  !*** ./src/view/no-films.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoFilmsData; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createNoFilmsDataTemplate = () => {
  return (
    `<p style="margin: 30px auto;">«There are no movies in our database»</p>`
  );
};

class NoFilmsData {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoFilmsDataTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createShowMoreButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

class ShowMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sorting; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createSortingTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

class Sorting {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortingTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/statistics.js":
/*!********************************!*\
  !*** ./src/view/statistics.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Statistics; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createStatisticsTemplate = (data) => {
  const filmsAmount = data !== null ? data.length : 0;

  return (
    `<p>${filmsAmount} movies inside</p>`
  );
};

class Statistics {
  constructor(data) {
    this._data = data;
    this._element = null;
  }

  getTemplate() {
    return createStatisticsTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/user-title.js":
/*!********************************!*\
  !*** ./src/view/user-title.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TitleOfTheUser; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createTitleOfTheUserTemplate = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

class TitleOfTheUser {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTitleOfTheUserTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map