### Applitools Native Mobile Library (NML) with WebdriverIO + Appium

This example demonstrates how to execute visual tests on a Native Mobile Application using the Applitools Native Mobile Library (NML) with WebdriverIO, Appium, and an Android Emulator/iOS Simulator.

The application is dynamically instrumented using NML to enable full-page screenshot capture and visual validation with Applitools Eyes.

While this example demonstrates execution using an emulator/simulator setup, the same workflow can also be used with local real devices or supported cloud-based mobile device platforms.

####  What this example covers 
- Running Appium with WebdriverIO automatically
- Using Android Emulator
- Executing tests with WebdriverIO
- Configuring Applitools Eyes SDK
- Running tests against an NML-instrumented mobile application
- Performing visual validation using `eyes.check()`

#### Prerequisites Before running the example, ensure the following are installed: 
Node.js
Appium 
Android Studio
Android Emulator
Applitools Account & API Key

### Setup 
#### 1. Install dependencies 
```bash
npm install
```

#### 2 .Set Applitools API Key

macOS/Linux
```bash
export APPLITOOLS_API_KEY=<YOUR_API_KEY>
```

Windows
```bash
set APPLITOOLS_API_KEY=<YOUR_API_KEY>
```

#### 3. Start Emulator

Launch the Android Emulator from Android Studio Device Manager

#### 4. Update Desired Capabilities

Update the following values in wdio.conf.js:

<DEVICE_NAME>
<DEVICE_PLATFORM_VERSION>
<PATH_TO_NML_INSTRUMENTED_APPLICATION>

#### 5. Running the Test
```bash
npx wdio run wdio.conf.js
```

##### Notes:
Ensure the application used is the NML-instrumented application.

The Applitools library must load when the application starts.

Dynamic instrumentation must be completed before test execution.


### Expected Outcome

##### After successful execution:

The application launches on the emulator

Visual checkpoints are captured using Applitools Eyes

Results are uploaded to the Applitools Eyes Dashboard
