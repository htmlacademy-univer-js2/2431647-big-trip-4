import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import NewEventView from '../view/new-event-view.js';
import EditEventView from '../view/edit-event-view.js';
import EventView from '../view/event-view.js';
import { render } from '../render.js';

export default class EventsPresenter {
    eventsComponent = new EventListView();

    constructor({ eventsContainer, eventsModel }) {
        this.eventsContainer = eventsContainer;
        this.eventsModel = eventsModel;
    }

    init() {
        this.events = [...this.eventsModel.getEvents()];

        render(new SortView(), this.eventsContainer);
        render(this.eventsComponent, this.eventsContainer);
        render(new NewEventView(), this.eventsComponent.getElement());
        render(new EditEventView({ event: this.events[0] }), this.eventsComponent.getElement());

        for (let i = 1; i < this.events.length; i++) {
            render(new EventView({ event: this.events[i] }), this.eventsComponent.getElement());
        }
    }
}