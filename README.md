# Mobile_App_js_with_tailwind


echo "# Mobile_App_js_with_tailwind" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/idsmobile206-afk/Mobile_App_js_with_tailwind.git
git push -u origin main


git remote add origin https://github.com/idsmobile206-afk/Mobile_App_js_with_tailwind.git
git branch -M main
git push -u origin main


npx create-expo-app MyApp --template blank
cd my-app
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
npx tailwindcss init

Update tailwind.config.js to include your file paths and the NativeWind preset:

JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add the paths to all of your component files
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}


Babel (babel.config.js):

JavaScript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};


Metro (metro.config.js):
If the file doesn't exist, create it in your root directory.

JavaScript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });


5. Add Global CSS
Create a file named global.css in your root directory and add the Tailwind directives:

CSS
@tailwind base;
@tailwind components;
@tailwind utilities;


npm install babel-preset-expo --save-dev

npx expo start -c




================== install router 
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
{
  "main": "expo-router/entry"
}# Movies_app_mobile
