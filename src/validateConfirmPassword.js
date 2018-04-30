/* @flow */
export default function validateConfirmPassword(
  errors: Object,
  values: Object,
  options?: {
    key?: string,
    require?: boolean,
    keyPassword?: string,
  } = {
    key: 'confirmPassword',
    require: true,
    keyPassword: 'password',
  },
) {
  if (!values[options.key] && options.require) {
    errors[options.key] = '確認用のパスワードを入力してください';
  } else if (values[options.key] !== values[options.keyPassword]) {
    errors[options.key] = 'パスワードが一致していません';
  }
}
