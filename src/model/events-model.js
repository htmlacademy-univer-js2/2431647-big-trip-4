import { mockEvents } from "../mock/events.js";

export default class EventsModel {
  #events = [...mockEvents];

  get events() {
    return this.#events;
  }
}
