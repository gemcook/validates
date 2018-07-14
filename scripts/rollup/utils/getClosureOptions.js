module.exports = function getClosureOptions() {
  return Object.assign(
    {},
    {
      compilationLevel: 'SIMPLE',
      languageIn: 'ECMASCRIPT8',
      languageOut: 'ECMASCRIPT5_STRICT',
      env: 'CUSTOM',
      warningLevel: 'QUIET',
      applyInputSourceMaps: false,
      useTypesForOptimization: false,
      processCommonJsModules: false,
      rewritePolyfills: false,
      assumeFunctionWrapper: true,
      renaming: false,
    },
  );
};
