import dayjs from 'dayjs';

const getRandomInteger = (start, end) => Math.floor(Math.random() * (end - start + 1) + start);

const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

const humanizeDate = (date, dateFormat) => dayjs(date).format(dateFormat);

const getDateDifference = (dateFrom, dateTo) => {
    const days = dateTo.diff(dateFrom, 'd');
    const hours = dateTo.diff(dateFrom, 'h') % 24;
    const minutes = dateTo.diff(dateFrom, 'm') % 60;

    const difference = dayjs().set('date', days).set('hour', hours).set('minute', minutes);

    if (days !== 0) {
        return dayjs(difference).format('DD[D] HH[H] mm[M]');
    }

    if (hours !== 0) {
        return dayjs(difference).format('HH[H] mm[M]');
    }

    return dayjs(difference).format('mm[M]');
};

export { getRandomInteger, getRandomArrayElement, humanizeDate, getDateDifference };