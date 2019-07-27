/* @flow */
export default function validateTerms(
  errors: Object,
  values: Object,
  options: {
    key?: string,
  } = {
    key: 'terms',
  }
) {
  if (!values[options.key]) {
    errors[options.key] = '利用規約に同意されていません';
  }
}
