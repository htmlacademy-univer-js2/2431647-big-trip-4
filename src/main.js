import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import { RenderPosition, render } from './render.js';
import EventsPresenter from './presenter/events-presenter.js';

const mainElement = document.querySelector('.trip-main');
const filtersElement = mainElement.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');

const eventsPresenter = new EventsPresenter({eventsContainer: eventsElement});

render(new TripInfoView(), mainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersElement);

eventsPresenter.init();
