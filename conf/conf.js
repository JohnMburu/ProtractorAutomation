// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  // capabilities: {
  //   'browserName': 'firefox'
  // },
  
      multiCapabilities: [{
        'browserName': 'firefox'
      }, {
        'browserName': 'chrome'
      }],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  onPrepare: function() {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calctest_spec.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
};
