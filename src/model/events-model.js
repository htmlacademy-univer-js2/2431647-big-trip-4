import { mockEvents } from '../mock/events.js';

export default class EventsModel {
    events = [...mockEvents];

    getEvents() {
        return this.events;
    }
}