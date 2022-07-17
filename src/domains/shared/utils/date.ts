import dayjs from 'dayjs';

export const formatDate = (date: Date | string, format = 'MMM DD, YYYY'): string => dayjs(date).format(format);
