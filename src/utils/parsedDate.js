import dayjs from 'dayjs';

const parseDate = (date) => {
  const parsedDate = dayjs(date).format('DD MMM \'YY | HH:mm');

  return parsedDate;
};

export default parseDate;
