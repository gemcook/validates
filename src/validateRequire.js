/* @flow */
export default function validateRequire(
  errors: Object,
  values: Object,
  key: string,
) {
  if (!values[key]) {
    errors[key] = '必須入力です';
  }
}
