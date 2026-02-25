const fs = require('fs');
const path = require('path')
const { Eyes, Target, FileLogHandler} = require('@applitools/eyes-webdriverio');

describe('Appium + WDIO + Applitools --> Android', () => {
    let eyes;

    before(() => {

        // Make sure the log directory exists
        const logDir = path.resolve('./logs/applitools');
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }

        eyes = new Eyes();
        eyes.setApiKey(process.env.APPLITOOLS_API_KEY); 
        
        const logPath = path.join(logDir, 'android-eyes-nml-instrumented.log');
        eyes.setLogHandler(new FileLogHandler(true, logPath, false)); 
    });



    it('should check the Android app main screen', async () => {

        
        await eyes.open(browser, 'Android Hello World', 'Android Native Test');

        await eyes.check({stitchMode: 'Scroll'});// --> Does not give error
        //await eyes.check({StitchMode: 'CSS'}); //Gives error related to Android Jetpack compose, by default StitchMode is CSS. Shows Empty test on eyes dashboard


        // Normal screenshot, app only
        await eyes.check('Initial screen', Target.window(),{stitchMode: 'Scroll'} );


        //If you need to take a system screenshot which includes elements outside the application window,
        //example a system permissions alert
        await eyes.check('Main Screen From System Screenshot', Target.window().useSystemScreenshot(true), {stitchMode: 'Scroll'});

        await eyes.close();
    });

    after(async () => {
        await eyes.abortIfNotClosed();
    });
});