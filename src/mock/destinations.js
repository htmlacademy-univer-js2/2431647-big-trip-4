import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import { DESTINATIONS, LOREM } from '../const.js';

const Description = {
    MIN: 1,
    MAX: 5
};

const Picture = {
    URL: 'https://loremflickr.com/248/152?random=',
    MIN_ID: 1,
    MAX_ID: 100,
};


function getRandomDescription(text) {
    const sentencesCount = getRandomInteger(Description.MIN, Description.MAX);
    const description = [];
    for (let i = 0; i < sentencesCount; i++) {
        description.push(getRandomArrayElement(text.split('.')));
    }
    return description.join(' ');
}

function getRandomPicture() {
    return Picture.URL + getRandomInteger(Picture.MIN_ID, Picture.MAX_ID);
}


const mockDestinations = [{
        id: 1,
        description: getRandomDescription(LOREM),
        name: getRandomArrayElement(DESTINATIONS),
        pictures: [{
                src: getRandomPicture(),
                description: ''
            },
            {
                src: getRandomPicture(),
                description: ''
            },
        ]
    },
    {
        id: 2,
        description: getRandomDescription(LOREM),
        name: getRandomArrayElement(DESTINATIONS),
        pictures: [{
            src: getRandomPicture(),
            description: ''
        }]
    },
    {
        id: 3,
        description: getRandomDescription(LOREM),
        name: getRandomArrayElement(DESTINATIONS),
        pictures: []
    },
];

export { mockDestinations };