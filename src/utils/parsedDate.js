import dayjs from 'dayjs';

const parseDate = (date) => dayjs(date).format('DD MMM \'YY | HH:mm');

export default parseDate;
