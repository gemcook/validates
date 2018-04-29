/* @flow */
export default function hasStringsLowerAndUpper(value: string) {
  return /(?=.*\w)(?=[A-Z])/.test(value);
}
