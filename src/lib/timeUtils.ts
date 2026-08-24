import { STORE_SCHEDULE } from '@/data/storeHours';
import { StoreStatus } from '@/types';

export function getStoreStatus(customDate?: Date): StoreStatus {
  const now = customDate || new Date();
  const ptString = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  const ptDate = new Date(ptString);

  const dayOfWeek = ptDate.getDay();
  const currentHour = ptDate.getHours();
  const currentMinute = ptDate.getMinutes();
  const currentTotalMinutes = currentHour * 60 + currentMinute;

  const todaySchedule = STORE_SCHEDULE[dayOfWeek];
  const openMinutes = todaySchedule.openHour24 * 60 + todaySchedule.openMin;
  const closeMinutes = todaySchedule.closeHour24 * 60 + todaySchedule.closeMin;

  const isOpen = currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes;
  const minutesUntilClose = closeMinutes - currentTotalMinutes;
  const isClosingSoon = isOpen && minutesUntilClose > 0 && minutesUntilClose <= 30;

  let message = '';
  let nextChangeText = '';

  if (isOpen) {
    if (isClosingSoon) {
      message = 'Closing Soon';
      nextChangeText = 'Closes in ' + minutesUntilClose + ' mins (' + todaySchedule.close + ')';
    } else {
      message = 'Open Now';
      nextChangeText = 'Closes at ' + todaySchedule.close;
    }
  } else {
    message = 'Closed';
    if (currentTotalMinutes < openMinutes) {
      nextChangeText = 'Opens today at ' + todaySchedule.open;
    } else {
      const tomorrowIndex = (dayOfWeek + 1) % 7;
      const tomorrowSchedule = STORE_SCHEDULE[tomorrowIndex];
      nextChangeText = 'Opens tomorrow at ' + tomorrowSchedule.open;
    }
  }

  return {
    isOpen,
    isClosingSoon,
    message,
    nextChangeText,
    currentDayName: todaySchedule.day,
  };
}
