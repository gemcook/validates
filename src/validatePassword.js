/* @flow */
export default function validatePassword(
  errors: Object,
  values: Object,
  options: {
    key?: string,
    require?: boolean,
    min?: number,
    max?: number,
  } = {
    key: 'password',
    require: true,
    min: 8,
    max: 50,
  },
) {
  const rule = new RegExp(
    `^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?d)[a-zA-Zd]{${String(options.min)},${String(
      options.max,
    )}$`,
  );
  if (!values[options.key] && options.require) {
    errors[options.key] = 'パスワードを入力してください';
  } else if (values[options.key].length < 8) {
    errors.password = `パスワードは${String(
      options.min,
    )}文字以上で入力してください`;
  } else if (!rule.test(values.password)) {
    errors[options.key] = 'パスワードに大文字・小文字・数字を含んでください';
  }
}
