import ApiService from '../framework/api-service.js';
import { ApiServiceResponseMethod } from '../const.js';

export default class PointsApiService extends ApiService {
  get points() {
    return this._load({ url: 'points' }).then(ApiService.parseResponse);
  }

  updatePoint = async (point) => {
    const response = await this._load({
      url: `points/${point.id}`,
      method: ApiServiceResponseMethod.PUT,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  };

  addPoint = async (point) => {
    const response = await this._load({
      url: 'points',
      method: ApiServiceResponseMethod.POST,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  };

  deletePoint = async (point) => {
    const response = await this._load({
      url: `points/${point.id}`,
      method: ApiServiceResponseMethod.DELETE,
    });

    return response;
  };

  #adaptToServer = (point) => {
    const adaptedPoint = {
      ...point,
      basePrice: point.basePrice,
      dateFrom:
        point.dateFrom instanceof Date ? point.dateFrom.toISOString() : null,
      dateTo: point.dateTo instanceof Date ? point.dateTo.toISOString() : null,
      isFavorite: point.isFavorite,
    };

    // Ненужные ключи мы удаляем
    delete adaptedPoint.basePrice;
    delete adaptedPoint.dateFrom;
    delete adaptedPoint.dateTo;
    delete adaptedPoint.isFavorite;

    return adaptedPoint;
  };
}
