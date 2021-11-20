import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);
dayjs.extend(utc);

export function formatDate(date: string | Date, format: string): string {
  return dayjs(date).utc().format(format);
}

export function isDateExpired(date: string | Date): boolean {
  const stripTimeFromDate = (dateToStrip: string | Date): Date => {
    return new Date(formatDate(new Date(dateToStrip), 'MM/DD/YYYY'));
  };

  const today = stripTimeFromDate(new Date(Date.now()));
  const compareDate = stripTimeFromDate(date);
  return compareDate < today;
}
