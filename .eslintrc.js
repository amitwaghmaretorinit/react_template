module.exports = {
    root: true,
    extends: ['react-app'],
    "overrides": [
        {
          "files": [
            "**/*.stories.*"
          ],
          "rules": {
            "import/no-anonymous-default-export": "off"
          }
        }
      ]
  };
  