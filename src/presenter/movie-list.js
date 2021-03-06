import {compareYear, compareRating, compareComments} from "../utils/film.js";
import {render, RenderPosition, remove} from "../utils/render.js";
import {UpdateType, SortType, UserAction} from "../const.js";
import {nav} from "../utils/nav.js";

import FilmsListContainerView from "../view/films-list-container.js";
import FilmsListExtraSectionView from "../view/film-extra.js";
import ShowMoreButtonView from "../view/show-more-button.js";
import FilmsSectionView from "../view/films-section.js";
import NoFilmsDataView from "../view/no-films.js";
import StatisticsPresenter from "./statistics.js";
import FilmsListView from "../view/films-list.js";
import SortingView from "../view/sorting.js";
import LoadingView from "../view/loading.js";
import FilmPresenter from "./film.js";

const CARDS_AMOUNT_PER_STEP = 5;
const CARDS_EXTRA_AMOUNT = 2;

export default class MovieList {
  constructor(siteMainElement, siteFooterElement, navModel, filmsModel, api) {
    this._navModel = navModel;
    this._filmsModel = filmsModel;

    this._renderCardsCount = CARDS_AMOUNT_PER_STEP;
    this._filmPresenter = {};
    this._filmExtraCommentPresenter = {};
    this._filmExtraRatingPresenter = {};

    this._isLoading = true;

    this._api = api;

    this._currentSortType = SortType.DEFAULT;
    this._siteMainElement = siteMainElement;
    this._siteFooterComponent = siteFooterElement;

    this._sortingComponent = null;
    this._filmsListComponent = null;
    this.filmDetailsComponent = null;
    this._staticticsComponent = null;
    this._filmsSectionComponent = null;
    this._showMoreButtonComponent = null;
    this._filmsListTopRatingContainerComponent = null;
    this._filmsListMostCommentedContainerComponent = null;

    this._noFilmsComponent = new NoFilmsDataView();
    this._loadingComponent = new LoadingView();

    this._commenExtraId = [];
    this._ratingExtraId = [];

    this._extraSectionTopRatingComponent = new FilmsListExtraSectionView(`Top rated`);
    this._extraSectionMostCommentedComponent = new FilmsListExtraSectionView(`Most commented`);

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init() {
    this._filmsModel.addObserver(this._handleModelEvent);
    this._navModel.addObserver(this._handleModelEvent);

    this._renderMainContent();
  }

  _renderSorting() {
    if (this._sortingComponent !== null) {
      this._sortingComponent = null;
    }

    this._sortingComponent = new SortingView(this._currentSortType);
    this._sortingComponent.setSortTypeChangeHandler(this._handleSortTypeChange);

    render(this._filmsSectionComponent, this._sortingComponent, RenderPosition.BEFOREBEGIN);
  }

  _renderNoFilmsComponent() {
    render(this._filmsSectionComponent, this._noFilmsComponent, RenderPosition.BEFOREEND);
  }

  _getFilms() {
    const navType = this._navModel.getNav();
    const films = this._filmsModel.getFilms();
    const navFilms = nav[navType](films);

    switch (this._currentSortType) {
      case SortType.DATE:
        return navFilms.sort(compareYear);
      case SortType.RATING:
        return navFilms.sort(compareRating);
    }
    return navFilms;
  }

  _handleModeChange() {
    Object
      .values(this._filmExtraCommentPresenter)
      .forEach((presenter) => presenter.resetView());

    Object
      .values(this._filmExtraRatingPresenter)
      .forEach((presenter) => presenter.resetView());

    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_FILM:
        this._api.updateFilm(update).then((response) => {
          this._filmsModel.updateFilm(updateType, response);
        });
        break;
    }
  }

  _handleModelEvent(updateType, item) {
    switch (updateType) {
      case UpdateType.PATCH:
        if (this._commenExtraId.includes(item.id)) {
          this._filmExtraCommentPresenter[item.id].init(item);
        }
        if (this._ratingExtraId.includes(item.id)) {
          this._filmExtraRatingPresenter[item.id].init(item);
        }
        if (this._filmPresenter[item.id]) {
          this._filmPresenter[item.id].init(item);
        }
        break;
      case UpdateType.MINOR:
        this._clearMainContent();
        this._renderMainContent();
        break;
      case UpdateType.MAJOR:
        this._clearMainContent({resetRenderedCardCount: true, resetSortType: true});
        this._renderMainContent();
        break;
      case UpdateType.STATS:
        this._clearMainContent({resetRenderedCardCount: true, resetSortType: true});
        this._renderStatistics();
        break;
      case UpdateType.DELETE_COMMENT:
        if (this._commenExtraId.includes(item.id)) {
          this._filmExtraCommentPresenter[item.id].init(item);
        }
        if (this._ratingExtraId.includes(item.id)) {
          this._filmExtraRatingPresenter[item.id].init(item);
        }
        if (this._filmPresenter[item.id]) {
          this._filmPresenter[item.id].init(item);
        }
        break;
      case UpdateType.ADD_COMMENT:
        if (this._commenExtraId.includes(item.id)) {
          this._filmExtraCommentPresenter[item.id].init(item);
        }
        if (this._ratingExtraId.includes(item.id)) {
          this._filmExtraRatingPresenter[item.id].init(item);
        }
        if (this._filmPresenter[item.id]) {
          this._filmPresenter[item.id].init(item);
        }
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        remove(this._loadingComponent);
        this._renderMainContent();
        break;
    }
  }

  _handleSortTypeChange(sortType) {
    if (this._currenSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    this._clearMainContent({resetRenderedCardCount: true});
    this._renderMainContent();
  }

  _handleShowMoreButtonClick() {
    const cardCount = this._getFilms().length;
    const newRenderedCardCount = Math.min(cardCount, this._renderCardsCount + CARDS_AMOUNT_PER_STEP);
    const films = this._getFilms().slice(this._renderCardsCount, newRenderedCardCount);

    this._renderCards(films, this._filmsListContainerComponent);
    this._renderCardsCount = newRenderedCardCount;


    if (this._renderCardsCount >= cardCount) {
      remove(this._showMoreButtonComponent);
    }
  }

  _renderShowMoreButton() {
    if (this._showMoreButtonComponent !== null) {
      this._showMoreButtonComponent = null;
    }

    this._showMoreButtonComponent = new ShowMoreButtonView();
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButtonClick);
    render(this._filmsListComponent, this._showMoreButtonComponent, RenderPosition.BEFOREEND);
  }

  _renderCard(film, place) {
    const filmPresenter = new FilmPresenter(this._siteFooterComponent, place, this._handleViewAction, this._handleModeChange);
    filmPresenter.init(film);
    this._filmPresenter[film.id] = filmPresenter;
  }

  _renderCards(films, place) {
    films.forEach((film) => this._renderCard(film, place));
  }

  _renderExtraRating() {
    let filmsRating = this._filmsModel.getFilms().slice();
    filmsRating = filmsRating.sort(compareRating).slice(0, CARDS_EXTRA_AMOUNT);

    if (filmsRating[0].rating > 0) {
      render(this._filmsSectionComponent, this._extraSectionTopRatingComponent, RenderPosition.BEFOREEND);
      this._filmsListTopRatingContainerComponent = new FilmsListContainerView();
      render(this._extraSectionTopRatingComponent, this._filmsListTopRatingContainerComponent, RenderPosition.BEFOREEND);

      filmsRating.forEach((film) => {
        this._ratingExtraId.push(film.id);

        const filmPresenter = new FilmPresenter(this._siteFooterComponent, this._filmsListTopRatingContainerComponent, this._handleViewAction, this._handleModeChange);
        filmPresenter.init(film);
        this._filmExtraRatingPresenter[film.id] = filmPresenter;
      });
    }
  }

  _renderExtraCommented() {
    let filmsCommented = this._filmsModel.getFilms().slice();
    filmsCommented = filmsCommented.sort(compareComments).slice(0, CARDS_EXTRA_AMOUNT);

    if (filmsCommented[0].comments.length > 0) {
      render(this._filmsSectionComponent, this._extraSectionMostCommentedComponent, RenderPosition.BEFOREEND);
      this._filmsListMostCommentedContainerComponent = new FilmsListContainerView();
      render(this._extraSectionMostCommentedComponent, this._filmsListMostCommentedContainerComponent, RenderPosition.BEFOREEND);

      filmsCommented.forEach((film) => {
        this._commenExtraId.push(film.id);

        const filmPresenter = new FilmPresenter(this._siteFooterComponent, this._filmsListMostCommentedContainerComponent, this._handleViewAction, this._handleModeChange);
        filmPresenter.init(film);
        this._filmExtraCommentPresenter[film.id] = filmPresenter;
      });
    }
  }

  _renderLoading() {
    render(this._filmsSectionComponent, this._loadingComponent, RenderPosition.BEFOREEND);
  }

  _clearMainContent({resetRenderedCardCount = false, resetSortType = false} = {}) {
    const cardCount = this._getFilms().length;

    Object
      .values(this._filmPresenter)
      .forEach((filmPresenter) => filmPresenter.destroy());

    this._filmPresenter = {};

    remove(this._sortingComponent);
    remove(this._noFilmsComponent);
    remove(this._filmsSectionComponent);
    remove(this._showMoreButtonComponent);
    remove(this._filmsListTopRatingContainerComponent);
    remove(this._filmsListMostCommentedContainerComponent);


    if (this._staticticsPresenter) {
      this._staticticsPresenter.destroy();
    }


    if (resetRenderedCardCount) {
      this._renderCardsCount = CARDS_AMOUNT_PER_STEP;
    } else {
      this._renderCardsCount = Math.min(cardCount, this._renderCardsCount);
    }

    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
    }
  }

  _renderMainContent() {
    if (this._filmsSectionComponent) {
      remove(this._filmsSectionComponent);
    }

    this._filmsSectionComponent = new FilmsSectionView();
    render(this._siteMainElement, this._filmsSectionComponent, RenderPosition.BEFOREEND);


    if (this._isLoading) {
      this._renderLoading();
      return;
    }

    const films = this._getFilms();
    const cardCount = films.length;

    this._renderSorting();

    if (this._filmsListComponent !== null) {
      remove(this._filmsListComponent);
    }

    if (cardCount === 0) {
      this._renderNoFilmsComponent();
      return;
    }

    this._filmsListComponent = new FilmsListView();
    this._filmsListContainerComponent = new FilmsListContainerView();
    render(this._filmsSectionComponent, this._filmsListComponent, RenderPosition.AFTERBEGIN);
    render(this._filmsListComponent, this._filmsListContainerComponent, RenderPosition.BEFOREEND);

    this._renderCards(films.slice(0, Math.min(cardCount, this._renderCardsCount)), this._filmsListContainerComponent);

    if (cardCount > this._renderCardsCount) {
      this._renderShowMoreButton();
    }

    this._renderExtraRating();
    this._renderExtraCommented();
  }

  _renderStatistics() {
    this._staticticsPresenter = new StatisticsPresenter(this._siteMainElement, this._filmsModel);
    this._staticticsPresenter.init();
  }
}
