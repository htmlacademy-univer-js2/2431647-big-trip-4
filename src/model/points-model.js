import Observable from "../framework/observable.js";
import { UpdateType } from "../const.js";

export default class PointsModel extends Observable {
  #points = [];
  #pointsApiService = null;
  #isSuccessfulLoading = false;

  constructor(pointsApiService) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  init = async () => {
    try {
      const points = await this.#pointsApiService.points;
      this.#points = points.map(this.#adaptToClient);
      this.#isSuccessfulLoading = true;
    } catch (err) {
      this.#points = [];
      this.#isSuccessfulLoading = false;
    }

    this._notify(UpdateType.INIT);
  };

  get points() {
    return this.#points;
  }

  get isSuccessfulLoading() {
    return this.#isSuccessfulLoading;
  }

  updatePoint = async (updateType, update) => {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error("Can't update unexisting point");
    }

    try {
      const response = await this.#pointsApiService.updatePoint(update);
      const updatedPoint = this.#adaptToClient(response);
      this.#points = [
        ...this.#points.slice(0, index),
        updatedPoint,
        ...this.#points.slice(index + 1),
      ];
      this._notify(updateType, updatedPoint);
    } catch (err) {
      throw new Error("Can't update point");
    }
  };

  addPoint = async (updateType, update) => {
    try {
      const response = await this.#pointsApiService.addPoint(update);
      const newPoint = this.#adaptToClient(response);
      this.#points.unshift(newPoint);
      this._notify(updateType, newPoint);
    } catch (err) {
      throw new Error("Can't add point");
    }
  };

  deletePoint = async (updateType, update) => {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error("Can't delete unexisting point");
    }

    try {
      await this.#pointsApiService.deletePoint(update);
      this.#points = [
        ...this.#points.slice(0, index),
        ...this.#points.slice(index + 1),
      ];
      this._notify(updateType);
    } catch (err) {
      throw new Error("Can't delete point");
    }
  };

  #adaptToClient = (point) => {
    const adaptedPoint = {
      ...point,
      basePrice: point["base_Price"],
      dateFrom:
        point["date_From"] !== null || point["date_From"] !== undefined
          ? new Date(point["date_From"])
          : point["date_From"],
      dateTo:
        point["date_To"] !== null || point["date_To"] !== undefined
          ? new Date(point["date_To"])
          : point["date_To"],
      isFavorite: point["is_Favorite"],
    };

    delete adaptedPoint["base_Price"];
    delete adaptedPoint["date_From"];
    delete adaptedPoint["date_To"];
    delete adaptedPoint["is_Favorite"];

    return adaptedPoint;
  };
}
