/**
 * utils.ts
 * @author Christopher Smith
 * @description Utility Functions
 * @created 2020-09-19T11:39:05.426Z-07:00
 * @last-modified 2020-09-19T11:42:01.197Z-07:00
 */

export function reformatDate(dateString: string, separator: string): string {
  const newDate = dateString.split(separator);

  return separator === "-"
    ? `${newDate[1]}/${newDate[2]}/${newDate[0]}`
    : `${newDate[2]}-${newDate[0]}-${newDate[1]}`;
}
