/* @flow */
export default function validateCode(
  errors: Object,
  values: Object,
  options: {
    key?: string,
    require: boolean,
  } = {
    key: 'username',
    require: true,
  },
) {
  if (!values[options.key] && options.require) {
    errors[options.key] = 'ユーザー名を入力してください';
  }
}
