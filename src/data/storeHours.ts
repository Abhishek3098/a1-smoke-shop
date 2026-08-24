import { DaySchedule } from '@/types';

export const STORE_SCHEDULE: DaySchedule[] = [
  { day: 'Sunday', open: '10:00 AM', close: '7:00 PM', openHour24: 10, openMin: 0, closeHour24: 19, closeMin: 0 },
  { day: 'Monday', open: '10:00 AM', close: '8:30 PM', openHour24: 10, openMin: 0, closeHour24: 20, closeMin: 30 },
  { day: 'Tuesday', open: '10:00 AM', close: '8:30 PM', openHour24: 10, openMin: 0, closeHour24: 20, closeMin: 30 },
  { day: 'Wednesday', open: '10:00 AM', close: '8:30 PM', openHour24: 10, openMin: 0, closeHour24: 20, closeMin: 30 },
  { day: 'Thursday', open: '10:00 AM', close: '9:00 PM', openHour24: 10, openMin: 0, closeHour24: 21, closeMin: 0 },
  { day: 'Friday', open: '10:00 AM', close: '9:00 PM', openHour24: 10, openMin: 0, closeHour24: 21, closeMin: 0 },
  { day: 'Saturday', open: '10:00 AM', close: '9:00 PM', openHour24: 10, openMin: 0, closeHour24: 21, closeMin: 0 },
];

export const STORE_INFO = {
  name: 'A1 Smoke Shop',
  tagline: "Fontana's Premier Smoke & Glass Shop",
  phone: '(909) 440-6329',
  phoneRaw: '9094406329',
  address: '16075 Foothill Blvd Ste-k 11',
  city: 'Fontana',
  state: 'CA',
  zip: '92335',
  fullAddress: '16075 Foothill Blvd Ste-k 11, Fontana, CA 92335',
  crossStreet: 'Near Foothill Blvd & Citrus Ave',
  googleRating: 4.8,
  reviewCount: 149,
  googleMapsUrl: 'https://maps.google.com/?q=A1+Smoke+Shop,+16075+Foothill+Blvd+Ste-K+11,+Fontana,+CA+92335',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=A1%20Smoke%20Shop,%2016075%20Foothill%20Blvd%20Ste-K%2011,%20Fontana,%20CA%2092335&t=&z=15&ie=UTF8&iwloc=&output=embed',
  googleReviewUrl: 'https://www.google.com/maps/search/?api=1&query=A1+Smoke+Shop+16075+Foothill+Blvd+Ste-K+11+Fontana+CA+92335',
  smsUrl: 'sms:9094406329?&body=Hi%20Jay!%20Do%20you%20have%20this%20in%20stock:%20',
};