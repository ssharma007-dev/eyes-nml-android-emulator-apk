const { Eyes } = require('@applitools/eyes-webdriverio')

exports.config = {
  runner: 'local',
  enableEyesLogs: true,
  hostname: 'localhost',
  port: 4723, //port where Appium server is running
  path: '/',  // root path for Appium
  specs: ['./test/specs/**/*.js'],

  capabilities: [Eyes.setMobileCapabilities(
    //Android
    {
      platformName: 'Android',
      'appium:deviceName': 'Medium Phone API 36.1',
      'appium:platformVersion': '16',
      'appium:automationName': 'UiAutomator2',
      'appium:app' : '<path_to_nml_instrumented_application>',
      'appium:newCommandTimeout': 300,
      'appium:adbExecTimeout': 60000,
    }),

  ],

  services: [
    ['appium', {
      args: {
        relaxedSecurity: true,
      },
      command: 'appium', 
      logPath: './logs/appium'
    }]
  ],

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
   timeout: 60000
 },

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  reporters: ['spec'],
};