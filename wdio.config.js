const { Eyes } = require('@applitools/eyes-webdriverio')

//Note : Make sure APPLITOOLS_API_KEY is set as an environment variable

exports.config = {
  runner: 'local',
  enableEyesLogs: true,
  hostname: 'localhost',
  port: 4723, //port where Appium server is running
  path: '/',  // root path for Appium
  specs: ['./test/specs/**/*.js'],

  capabilities: [
    //Enables Applitools Native Mobile Library (NML) capabilities
    Eyes.setMobileCapabilities( 
        {
      platformName  : 'Android',
      'appium:deviceName'  : '<DEVICE_NAME>',// EXAMPLE : 'Medium Phone API 36.1',
      'appium:platformVersion'  : '<DEVICE_PLATFORM_VERSION>', // EXAMPLE : 16
      'appium:automationName'  : 'UiAutomator2',
      'appium:app'  : '<PATH_TO_NML_INSTRUMENTED_APPLICATION>', // Path to the NML-instrumented application
      'appium:newCommandTimeout'  : 300,
      'appium:adbExecTimeout'  : 60000,
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
