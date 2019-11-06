const { expect } = require("chai");
const faker = require("faker");
const loginPage = require("../pageObjectFiles/loginPage.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const streamPage = require("../pageObjectFiles/streamPage.js");

//run tests .\node_modules\.bin\wdio wdio.conf.js

before(function () {
    loginPage.loginCorrect();
});


describe('editing stream name', function(){

    it('shold be editing stream name', function(){

        var newStreamName;

        //wait for button stream and go to create stream page
        $(streamPage.variableLocatorsStreamMenu.buttonStreams).waitForDisplayed(5000);
        $(streamPage.variableLocatorsStreamMenu.buttonStreams).click();

        //wait for element hoes it has new stream information
        $(streamPage.variableLocatorsStreamMenu.elementContainStream).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.elementContainStream).isDisplayed()).to.equal(true, true);

        //wait for edit stream button
        $(streamPage.variableLocatorsStreamMenu.editStreamButton).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.editStreamButton).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.editStreamButton).click();

        //checked true url
        expect(browser.getUrl()).to.contains("/stream-edit");

        //wait load page edit stream
        //wait input element with stream name
        $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).isDisplayed()).to.equal(true, true);

        //take valid value and save his in variable in order to checked
        let streamName = $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).getValue();

        //after take value from input, clear input
        $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).clearValue();
        
        //checked input is his clear      
        let clearInputValue = $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).getValue();
            if(clearInputValue === null){
                var newStreamName = $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).setValue(faker.random.word());
            } else {
                $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).clearValue();
                var newStreamName = $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).setValue(faker.random.word());
            }

        // wait button create stream and click
        $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).click();

        //wait window with confirmation that stream is changed
        $(streamPage.variableLocatorsStreamMenu.createWindow).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.createWindow).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).click();

        //checked valid url
        expect(browser.getUrl()).not.to.contains("/stream-edit");
        expect(browser.getUrl()).to.contains("/streams");

        //main checked in test, that first name of stream not equal to
        //modified name of stream
        expect(streamName !== newStreamName);
    });

})