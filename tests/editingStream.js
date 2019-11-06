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

    //wait load page edit stream
    //wait input element with stream name
    expect(browser.getUrl()).to.contains("/stream-edit");
    $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).waitForDisplayed(5000);
    expect($(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).clearValue();
    let clearInputValue = $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).getValue();
    browser.pause(3000);

    if(clearInputValue === ''){
        let newStreamName = $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).setValue(faker.random.word());
    } else {
        $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).clearValue();
        let newStreamName = $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).setValue(faker.random.word());
    }

    // wait button create stream
    $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).waitForDisplayed(5000);
    expect($(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).click();

    $(streamPage.variableLocatorsStreamMenu.createWindow).waitForDisplayed(5000);
    expect($(streamPage.variableLocatorsStreamMenu.createWindow).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).click();

    expect(browser.getUrl()).not.to.contains("/stream-edit");
    expect(browser.getUrl()).to.contains("/streams");

    expect(streamName !== newStreamName);

    



    
    
})


})