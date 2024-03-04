import { getRandomInteger } from '../utils.js';

const OfferPrice = {
    MIN: 20,
    MAX: 100
};

const mockOffers = [{
        type: 'Taxi',
        offers: [{
            id: 1,
            title: 'Offer',
            price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX)
        }]
    },
    {
        type: 'Bus',
        offers: [{
            id: 1,
            title: 'Offer',
            price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX)
        }]
    },
    {
        type: 'Train',
        offers: [{
            id: 1,
            title: 'Offer',
            price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX)
        }]
    },
    {
        type: 'Ship',
        offers: [{
            id: 1,
            title: 'Offer',
            price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX)
        }]
    },
    {
        type: 'Drive',
        offers: [{
            id: 1,
            title: 'Offer',
            price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX)
        }]
    },
    {
        type: 'Flight',
        offers: [{
            id: 1,
            title: 'Offer',
            price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX)
        }]
    },
    {
        type: 'Check-in',
        offers: [{
            id: 1,
            title: 'Offer',
            price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX)
        }]
    },
    {
        type: 'Sightseeing',
        offers: [{
            id: 1,
            title: 'Offer',
            price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX)
        }]
    },
    {
        type: 'Restaurant',
        offers: [{
            id: 1,
            title: 'Offer',
            price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX)
        }]
    }
];

export { mockOffers };