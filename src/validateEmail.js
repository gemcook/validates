/* @flow */
export default function validateEmail(
  errors: Object,
  values: Object,
  options: {
    key?: string,
    require?: boolean,
  } = {
    key: 'email',
    require: true,
  }
) {
  if (!values[options.key] && options.require) {
    errors[options.key] = 'メールアドレスを入力してください';
  } else if (values[options.key]) {
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[options.key])
    ) {
      errors[options.key] = 'メールアドレスが正しい形式ではありません';
    } else if (!/^[0-9+a-zA-Z-@._]+$/i.test(values[options.key])) {
      errors[options.key] = 'メールアドレスは半角で入力して下さい';
    }
  }
}
