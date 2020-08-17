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
/*! exports provided: EMOJI, COMMENTS_COUNT, GENRES_COUNT, POSTERS, SortType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMOJI", function() { return EMOJI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_COUNT", function() { return COMMENTS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENRES_COUNT", function() { return GENRES_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTERS", function() { return POSTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
const EMOJI = [`angry.png`, `puke.png`, `sleeping.png`, `smile.png`];
const COMMENTS_COUNT = 5;
const GENRES_COUNT = 1;
const POSTERS = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];

const SortType = {
  DEFAULT: `all`,
  WATCHLIST: `watchlist`,
  HISTORY: `history`,
  FAVORITES: `favorites`
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mocks_film_mock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mocks/film-mock.js */ "./src/mocks/film-mock.js");
/* harmony import */ var _mocks_comment_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks/comment-mock */ "./src/mocks/comment-mock.js");
/* harmony import */ var _view_user_title_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/user-title.js */ "./src/view/user-title.js");
/* harmony import */ var _view_main_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/main-nav.js */ "./src/view/main-nav.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_statistics_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/statistics.js */ "./src/view/statistics.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _presenter_movie_list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presenter/movie-list.js */ "./src/presenter/movie-list.js");
const FILMS_AMOUNT = 15;


// import {render, RenderPosition} from "./utils.js";









// -- новое




// массивы с данными
let filmsData = new Array(FILMS_AMOUNT).fill().map(_mocks_film_mock_js__WEBPACK_IMPORTED_MODULE_0__["createFilmDataTemplate"]);
// filmsData = null;
const commentsData = new Array(FILMS_AMOUNT).fill().map(_mocks_comment_mock__WEBPACK_IMPORTED_MODULE_1__["createCommentDataTemplate"]);


const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);


// пользователь
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(siteHeaderElement, new _view_user_title_js__WEBPACK_IMPORTED_MODULE_2__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_6__["RenderPosition"].BEFOREEND);
// главная нвигация
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(siteMainElement, new _view_main_nav_js__WEBPACK_IMPORTED_MODULE_3__["default"](filmsData), _utils_render_js__WEBPACK_IMPORTED_MODULE_6__["RenderPosition"].BEFOREEND);
// сортировка
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(siteMainElement, new _view_sorting_js__WEBPACK_IMPORTED_MODULE_4__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_6__["RenderPosition"].BEFOREEND);
// статистика в футоре
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(siteFooterElement, new _view_statistics_js__WEBPACK_IMPORTED_MODULE_5__["default"](filmsData), _utils_render_js__WEBPACK_IMPORTED_MODULE_6__["RenderPosition"].BEFOREEND);


const movieListPresenter = new _presenter_movie_list_js__WEBPACK_IMPORTED_MODULE_7__["default"](siteMainElement, siteFooterElement);

movieListPresenter.init(filmsData, commentsData);


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
  // return getRandomInteger(0, 90) / 10;
  return 0;
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
    // commentsCount: getRandomInteger(0, 10),
    commentsCount: 0,
    isWatchlist: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isWatched: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isFavorite: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1))
  };
};


/***/ }),

/***/ "./src/presenter/movie-list.js":
/*!*************************************!*\
  !*** ./src/presenter/movie-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieList; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _view_films_section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/films-section.js */ "./src/view/films-section.js");
/* harmony import */ var _view_no_films_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-films.js */ "./src/view/no-films.js");
/* harmony import */ var _view_films_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _view_film_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/film-card */ "./src/view/film-card.js");
/* harmony import */ var _view_film_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/film-details */ "./src/view/film-details.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _view_film_extra_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/film-extra.js */ "./src/view/film-extra.js");
/* harmony import */ var _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/films-list-container.js */ "./src/view/films-list-container.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");












const CARDS_AMOUNT_PER_STEP = 5;
const CARDS_EXTRA_AMOUNT = 2;

class MovieList {
  constructor(movieListContainer, siteFooterElement) {

    this._movieListContainer = movieListContainer;
    this._siteFooterComponent = siteFooterElement;

    this._renderCardsCount = CARDS_AMOUNT_PER_STEP;
    this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_0__["SortType"].DEFAULT;

    this._filmsSectionComponent = new _view_films_section_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._noFilmsSectionComponent = new _view_no_films_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._filmsListComponent = new _view_films_list_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._filmsListContainerComponent = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__["default"]();

    this._showMoreButtonComponent = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);

    this.filmDetailsComponent = null;
  }

  init(dataFilmsArray, dataCommentsArray) {

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._movieListContainer, this._filmsSectionComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

    if (!dataFilmsArray) {
      this._renderNoFilms();
      return;
    }

    this._dataFilmsArray = dataFilmsArray.slice();
    this._dataCommentsArray = dataCommentsArray.slice();
    this._currentFilmsArray = dataFilmsArray.slice();


    this._renderMainContent();
  }


  _handleShowMoreButtonClick() {
    this._renderCards(this._renderCardsCount, this._renderCardsCount + CARDS_AMOUNT_PER_STEP, this._currentFilmsArray, this._filmsListContainerComponent);
    this._renderCardsCount += CARDS_AMOUNT_PER_STEP;


    if (this._renderCardsCount >= this._dataFilmsArray.length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["remove"])(this._showMoreButtonComponent);
    }

  }

  _renderShowMoreButton() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._filmsListComponent, this._showMoreButtonComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButtonClick);
  }

  _renderNoFilms() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._filmsSectionComponent, this._noFilmsSectionComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
  }


  _renderCard(dataFilm, listContainerComponent) {
    const filmCardComponent = new _view_film_card__WEBPACK_IMPORTED_MODULE_4__["default"](dataFilm);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(listContainerComponent, filmCardComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

    filmCardComponent.setHandler(() => {
      // проверка на случай уже открытого попапа
      if (this.filmDetailsComponent) {
        Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["remove"])(this.filmDetailsComponent);
      }

      // вешаю слушатель клика по постеру
      this.filmDetailsComponent = new _view_film_details__WEBPACK_IMPORTED_MODULE_5__["default"](dataFilm, this._dataCommentsArray);

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._siteFooterComponent, this.filmDetailsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTEREEND);

      document.addEventListener(`keydown`, onEscKeyDown);

      this.filmDetailsComponent.setHandler(() => {
        Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["remove"])(this.filmDetailsComponent);
      });
    });

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["remove"])(this.filmDetailsComponent);
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };
  }

  _renderCards(from, to, currentFilmsArray, place) {
    currentFilmsArray
      .slice(from, to)
      .forEach((dataFilm) => this._renderCard(dataFilm, place));
  }

  _renderExtra() {

    // фильтруем массив сортируем по рейтингу
    let dataArrayRating = this._currentFilmsArray.slice();
    dataArrayRating = dataArrayRating.filter((item) => item.rating > 0);

    if (dataArrayRating.length > 0) {

      const extraSectionTopRatingComponent = new _view_film_extra_js__WEBPACK_IMPORTED_MODULE_7__["default"](`Top rated`);
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._filmsSectionComponent, extraSectionTopRatingComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
      const filmsListTopRatingContainerComponent = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(extraSectionTopRatingComponent, filmsListTopRatingContainerComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

      dataArrayRating = dataArrayRating.sort((a, b) => a.rating < b.rating ? 1 : -1);
      this._renderCards(0, Math.min(dataArrayRating.length, CARDS_EXTRA_AMOUNT), dataArrayRating, filmsListTopRatingContainerComponent);
    }

    // фильтруем массив и сортируем по комментариям
    let dataArrayComment = this._currentFilmsArray.slice();

    dataArrayComment = dataArrayComment.filter((item) => item.commentsCount > 0);
    if (dataArrayComment.length > 0) {

      const extraSectionMostCommentedComponent = new _view_film_extra_js__WEBPACK_IMPORTED_MODULE_7__["default"](`Most commented`);
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._filmsSectionComponent, extraSectionMostCommentedComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
      const filmsListMostCommentedContainerComponent = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(extraSectionMostCommentedComponent, filmsListMostCommentedContainerComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

      dataArrayComment = dataArrayComment.sort((a, b) => a.commentsCount < b.commentsCount ? 1 : -1);
      this._renderCards(0, Math.min(dataArrayRating.length, CARDS_EXTRA_AMOUNT), dataArrayComment, filmsListMostCommentedContainerComponent);
    }
  }

  _renderMainContent() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._filmsSectionComponent, this._filmsListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._filmsListComponent, this._filmsListContainerComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

    this._renderCards(0, Math.min(this._currentFilmsArray.length, CARDS_AMOUNT_PER_STEP), this._currentFilmsArray, this._filmsListContainerComponent);

    if (this._currentFilmsArray.length > CARDS_AMOUNT_PER_STEP) {
      this._renderShowMoreButton();

    }

    this._renderExtra();

  }
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
};

const render = (container, element, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (element instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    element = element.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREEND:
      container.after(element);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }
    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
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

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");




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
  const genresCurrentValue = genres > _const_js__WEBPACK_IMPORTED_MODULE_0__["GENRES_COUNT"] ? _const_js__WEBPACK_IMPORTED_MODULE_0__["GENRES_COUNT"] : genres;

  let commentsCurrentValue = commentsCount > _const_js__WEBPACK_IMPORTED_MODULE_0__["COMMENTS_COUNT"] ? _const_js__WEBPACK_IMPORTED_MODULE_0__["COMMENTS_COUNT"] : commentsCount;

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

class FilmCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(film) {
    super();
    this.film = film;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this.film);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._clickHandler);
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._clickHandler);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._clickHandler);
  }
}


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

/***/ "./src/view/film-details.js":
/*!**********************************!*\
  !*** ./src/view/film-details.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCardDetails; });
/* harmony import */ var _film_details_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film-details-comment */ "./src/view/film-details-comment.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



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


const createFilmDetailsTemplate = (film = {}, comments) => {
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

class FilmCardDetails extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(film, comments) {
    super();
    this.comments = comments;
    this.film = film;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createFilmDetailsTemplate(this.film, this.comments);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._clickHandler);

  }
}


/***/ }),

/***/ "./src/view/film-extra.js":
/*!********************************!*\
  !*** ./src/view/film-extra.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListExtraSection; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListExtraTemplate = (title) => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">${title}</h2>
    </section>`
  );
};

class FilmsListExtraSection extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(title) {
    super();
    this._title = title;
  }

  getTemplate() {
    return createFilmsListExtraTemplate(this._title);
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

class FilmsListContainer extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListContainerTemplate();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListTemplate = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

    </section>`
  );
};

class FilmsList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListTemplate();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsSectionTemplate = () => {
  return (
    `<section class="films"></section>`
  );
};

class FilmsSection extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsSectionTemplate();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


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

class MainNavigation extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super();
    this._data = data;
  }

  getTemplate() {
    return createMainNavigationTemplate(this._data);
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoFilmsDataTemplate = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>`
  );
};

class NoFilmsData extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoFilmsDataTemplate();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createShowMoreButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

class ShowMoreButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSortingTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

class Sorting extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createSortingTemplate();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createStatisticsTemplate = (data) => {
  const filmsAmount = data !== null ? data.length : 0;

  return (
    `<p>${filmsAmount} movies inside</p>`
  );
};

class Statistics extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super();
    this._data = data;
  }

  getTemplate() {
    return createStatisticsTemplate(this._data);
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createTitleOfTheUserTemplate = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

class TitleOfTheUser extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTitleOfTheUserTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map