const fs = require('fs-extra');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');

export default [
  {
    input: 'src/index.js',
    plugins: [
      {
        name: 'clean lib dir',
        buildStart: async () => {
          const libPath = './lib';
          const exists = await fs.pathExists(libPath);
          if (exists) {
            fs.emptyDirSync(libPath);
          }
        },
        buildEnd: err => {
          if (err) {
            throw err;
          }
        },
      },
      json({
        include: 'node_modules/**',
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        // Node.js の fs, path 等のモジュールを bundle 対象外にする
        preferBuiltins: false,
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/amazon-cognito-auth-js/dist/amazon-cognito-auth.js': [
            'CognitoAuth',
          ],
        },
      }),
      babel({
        runtimeHelpers: true,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {node: 'current'},
              corejs: 3,
              useBuiltIns: 'usage',
              loose: true,
              modules: false,
            },
          ],
          '@babel/preset-flow',
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              corejs: 3,
            },
          ],
          ['@babel/proposal-class-properties', {loose: true}],
          ['@babel/plugin-proposal-private-methods', {loose: true}],
        ],
      }),
    ],
    output: {
      file: 'lib/index.js',
      format: 'umd',
      name: 'Validates',
    },
  },
];
