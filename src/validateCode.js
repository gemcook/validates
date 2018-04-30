/* @flow */
export default function validateCode(
  errors: Object,
  values: Object,
  options: {
    key?: string,
    require: boolean,
  } = {
    key: 'code',
    require: true,
  },
) {
  if (!values[options.key] && options.require) {
    errors[options.key] = '認証コードを入力してください';
  } else if (!/^[0-9]{6,6}$/.test(values[options.key])) {
    errors[options.key] = '認証コードは6桁です';
  }
}
