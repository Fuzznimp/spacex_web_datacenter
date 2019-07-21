export function previousDate(date: string | number | Date | null) {
  if (date) {
    const previousDate = new Date(date);
    const formatedPreviousDate =
      previousDate.getDate() +
      1 +
      '-' +
      previousDate.getMonth() +
      '-' +
      previousDate.getFullYear();

    return formatedPreviousDate;
  }
  return 'None';
}
