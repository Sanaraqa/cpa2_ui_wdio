exports.config = {
    runner: 'local',
    specs: ['./tests/*.js'],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'firefox',
    }],
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'https://nutra.media',
    specFileRetries: 1,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: [['allure', {outputDir: 'allure-results'}]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: function(test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    },
};
