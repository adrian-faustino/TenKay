const DEFAULT_TIME_DECIMAL_PLACES = 2;

export const minutesToHours = (
  minutes: number,
  decimalPlaces: number = DEFAULT_TIME_DECIMAL_PLACES
): number => Number((minutes / 60).toFixed(decimalPlaces));

export const hoursToMinutes = (
  hours: number,
  decimalPlaces: number = DEFAULT_TIME_DECIMAL_PLACES
): number => Number((hours * 60).toFixed(decimalPlaces));
