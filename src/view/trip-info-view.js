import AbstractView from "../framework/view/abstract-view.js";
import { mockDestinations } from "../mock/destinations.js";
import { humanizeDate } from "../utils.js";
import { DATE_FORMAT_DAY } from "../const.js";

function getEventDestination(event) {
  return mockDestinations.find(
    (destination) => destination.id === event.destination
  );
}

function getTripTitle(events) {
  const destinations = [
    ...new Set(events.map((event) => getEventDestination(event).name)),
  ];
  let title = "";

  destinations.forEach((destination, index) => {
    title +=
      index !== destinations.length - 1
        ? `${destination} &mdash; `
        : destination;
  });

  return title;
}

function getTripInterval(events) {
  let interval = "";
  interval += `${humanizeDate(
    events[0].dateFrom,
    DATE_FORMAT_DAY
  )}&nbsp;&mdash;&nbsp;`;
  interval += `${
    humanizeDate(events.slice(-1)[0].dateTo, DATE_FORMAT_DAY).split(" ")[1]
  }`;
  return interval;
}

function getTripCost(events) {
  const cost = events.reduce(
    (totalCost, event) => totalCost + event.basePrice,
    0
  );
  return cost;
}

function createTripInfoTemplate(events) {
  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${getTripTitle(events)}</h1>

        <p class="trip-info__dates">${getTripInterval(events)}</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${getTripCost(
          events
        )}</span>
      </p>
    </section>`;
}

export default class TripInfoView extends AbstractView {
  #eventsModel = null;

  constructor({ eventsModel }) {
    super();
    this.#eventsModel = eventsModel;
  }

  get template() {
    return createTripInfoTemplate(this.#eventsModel.events);
  }
}
