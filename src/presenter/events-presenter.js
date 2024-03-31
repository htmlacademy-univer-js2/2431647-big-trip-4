import EventListView from "../view/event-list-view.js";
import SortView from "../view/sort-view.js";
import NewEventView from "../view/new-event-view.js";
import EditEventView from "../view/edit-event-view.js";
import EventView from "../view/event-view.js";
import { render, replace } from "../framework/render.js";

export default class EventsPresenter {
  #eventsListComponent = new EventListView();
  #eventsContainer = null;
  #eventsModel = null;
  #events = null;

  constructor({ eventsContainer, eventsModel }) {
    this.#eventsContainer = eventsContainer;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#events = [...this.#eventsModel.events];

    render(new SortView(), this.#eventsContainer);
    render(this.#eventsListComponent, this.#eventsContainer);
    render(new NewEventView(), this.#eventsListComponent.element);

    this.#events.forEach((event) => {
      const eventComponent = new EventView({
        event,
        onClick: () => {
          replaceEventToEdit();
          document.addEventListener("keydown", onDocumentKeyDown);
        },
      });
      const editEventComponent = new EditEventView({
        event,
        onClick: () => {
          replaceEditToEvent();
          document.removeEventListener("keydown", onDocumentKeyDown);
        },
      });

      function onDocumentKeyDown(evt) {
        if (evt.key === "Escape") {
          evt.preventDefault();
          replaceEditToEvent();
          document.removeEventListener("keydown", onDocumentKeyDown);
        }
      }

      function replaceEventToEdit() {
        replace(editEventComponent, eventComponent);
      }

      function replaceEditToEvent() {
        replace(eventComponent, editEventComponent);
      }

      render(eventComponent, this.#eventsListComponent.element);
    });
  }
}
