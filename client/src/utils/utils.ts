/**
 * utils.ts
 * @author Christopher Smith
 * @description Utility Functions
 * @created 2020-09-19T11:39:05.426Z-07:00
 * @last-modified 2020-09-19T14:44:48.305Z-07:00
 */

/**
 * Reformat a date between YYYY-MM-DD and MM/DD/YYYY
 *
 * @param dateString The date we want to reformat
 * @param separator The current separator of the date string
 */

export function reformatDate(dateString: string, separator: string): string {
  const newDate = dateString.split(separator);

  return separator === "-"
    ? `${newDate[1]}/${newDate[2]}/${newDate[0]}`
    : `${newDate[2]}-${newDate[0]}-${newDate[1]}`;
}

export function makeCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
