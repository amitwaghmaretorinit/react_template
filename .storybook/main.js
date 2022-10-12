const path = require("path");
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async config => {
    config.resolve.alias = {
      // "@assets": path.join(__dirname, "src/assets"),
      // "@constants": path.join(__dirname, "src/constants"),
      // "@components": path.join(__dirname, "src/shared/components"),
      // "@atom": path.join(__dirname, "src/shared/atom"),
      // "@molecules": path.join(__dirname, "src/shared/molecules"),
      // "@organism": path.join(__dirname, "src/shared/organism"),
      // "@constant": path.resolve(__dirname, "src/shared/constant"),
  
      // "@icons": path.join(__dirname, "src/shared/icons"),
      // "@layout": path.join(__dirname, "src/layout"),
      // "@Layout": path.join(__dirname, "src/shared/Layout"),
      // "@redux": path.join(__dirname, "src/redux"),
      // "@utils": path.join(__dirname, "src/utils"),
      // "@pages": path.join(__dirname, "src/pages"),
      // "@services": path.join(__dirname, "src/services"),
      // "@store": path.join(__dirname, "src/store"),
      // "@hooks": path.join(__dirname, "src/hooks"),
      // "@ability":path.join(__dirname, "src/ability")
    }
    return config
}
  
}