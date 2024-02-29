import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import NewPointView from '../view/new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import EventView from '../view/event-view.js';
import { render } from '../render.js';

export default class EventsPresenter {
  eventsComponent = new EventListView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new SortView(), this.eventsContainer);
    render(this.eventsComponent, this.eventsContainer);
    render(new NewPointView(), this.eventsComponent.getElement());
    render(new EditPointView(), this.eventsComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventsComponent.getElement());
    }
  }
}
