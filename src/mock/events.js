import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { EVENT_TYPES } from '../const.js';
import dayjs from 'dayjs';

const BasePrice = {
    MIN: 400,
    MAX: 1200
};

const mockEvents = [{
        id: 1,
        type: getRandomArrayElement(EVENT_TYPES),
        basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
        dateFrom: dayjs('2024-03-4 10:00'),
        dateTo: dayjs('2024-03-4 11:00'),
        destination: 1,
        offers: [1],
        isFavorite: Boolean(getRandomInteger(0, 1))
    },
    {
        id: 2,
        type: getRandomArrayElement(EVENT_TYPES),
        basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
        dateFrom: dayjs('2024-03-8 11:00'),
        dateTo: dayjs('2024-03-8 11:30'),
        destination: 2,
        offers: [1],
        isFavorite: Boolean(getRandomInteger(0, 1))
    },
    {
        id: 3,
        type: getRandomArrayElement(EVENT_TYPES),
        basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
        dateFrom: dayjs('2024-03-14 14:30'),
        dateTo: dayjs('2024-03-14 15:45'),
        destination: 2,
        offers: [1],
        isFavorite: Boolean(getRandomInteger(0, 1))
    },
    {
        id: 4,
        type: getRandomArrayElement(EVENT_TYPES),
        basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
        dateFrom: dayjs('2024-03-22 10:20'),
        dateTo: dayjs('2024-03-23 12:40'),
        destination: 3,
        offers: [1],
        isFavorite: Boolean(getRandomInteger(0, 1))
    }
];

export { mockEvents };