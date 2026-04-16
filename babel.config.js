module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    // If you don't need animations yet, keep plugins empty.
    // If you DO need reanimated, it MUST look exactly like this:
    plugins: ["react-native-reanimated/plugin"], 
  };
};