module.exports = {
  root: true,
  extends: ["react-app", "plugin:storybook/recommended"],
  "overrides": [{
    "files": ["**/*.stories.*"],
    "rules": {
      "import/no-anonymous-default-export": "off"
    }
  }]
};