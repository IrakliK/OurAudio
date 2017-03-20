module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "env": {
      "mocha": true,
      "node": true,
      "browser": true,
      "jquery": {
            "globals": {
                "$": false
            }
        }
  },
    "rules": {
      "no-console": 0,
      "no-param-reassign": 0,
      "no-alert": 0
    }
};
