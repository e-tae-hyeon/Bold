import {format} from 'date-fns';

export function formatDateString(date: Date) {
  return format(new Date(date), 'yyyy-MM-dd');
}
