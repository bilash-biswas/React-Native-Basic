module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [
    {
      test: /react-native\/Libraries\/vendor\/emitter/,
      presets: ['@babel/preset-flow'],
    },
  ],
  plugins: ['react-native-reanimated/plugin', '@babel/plugin-transform-flow-strip-types'],
};
