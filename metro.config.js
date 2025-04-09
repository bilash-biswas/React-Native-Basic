const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require("nativewind/metro");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const customConfig = {}; // Add any custom Metro configuration here.

const mergedConfig = mergeConfig(defaultConfig, customConfig);
const finalConfig = withNativeWind(mergedConfig, { input: "./global.css" });

module.exports = finalConfig;
