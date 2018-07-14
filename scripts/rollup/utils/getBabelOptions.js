module.exports = function getBabelOptions() {
  return Object.assign(
    {},
    {
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        '@babel/flow',
        ['@babel/preset-stage-2', {loose: true, decoratorsLegacy: true}],
        [
          '@babel/preset-env',
          {
            targets: {node: '8.10'},
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            helpers: true,
            polyfill: false,
            regenerator: false,
            moduleName: '@babel/runtime',
          },
        ],
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-optional-chaining',
      ],
      runtimeHelpers: true,
    },
  );
};
