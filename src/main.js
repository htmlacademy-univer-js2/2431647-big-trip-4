import TripInfoView from "./view/trip-info-view.js";
import FilterView from "./view/filter-view.js";
import { RenderPosition, render } from "./framework/render.js";
import EventsPresenter from "./presenter/events-presenter.js";
import EventsModel from "./model/events-model.js";

const mainElement = document.querySelector(".trip-main");
const filtersElement = mainElement.querySelector(".trip-controls__filters");
const eventsElement = document.querySelector(".trip-events");

const eventsModel = new EventsModel();
const eventsPresenter = new EventsPresenter({
  eventsContainer: eventsElement,
  eventsModel,
});

render(new TripInfoView(), mainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersElement);

eventsPresenter.init();
