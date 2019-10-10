const { expect } = require("chai");
const faker = require("faker");
//const {describe, it} = require("mocha");
const loginPage = require("../pageObjectFiles/loginPage.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const streamPage = require("../pageObjectFiles/streamPage.js");
const toolsPage = require("../pageObjectFiles/toolsPage.js");
const supportPage = require("../pageObjectFiles/supportPage.js");

//run tests .\node_modules\.bin\wdio wdio.conf.js

before(function () {
  loginPage.loginCorrect();
});


describe("create main functionality", function () {

  it("should be create stream", function()  {
  
    //wait for button stream and go to create stream page
    $(streamPage.variableLocatorsStreamMenu.buttonStreams).waitForDisplayed(5000);
    $(streamPage.variableLocatorsStreamMenu.buttonStreams).click();

    //wait for button "create stream" on stream page
    $(streamPage.variableLocatorsStreamMenu.buttonCreateStream).waitForDisplayed(5000);
    expect($(streamPage.variableLocatorsStreamMenu.buttonCreateStream).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.buttonCreateStream).click();

    // wait input then write in input random value with help Faker
    $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).waitForDisplayed(5000);
    expect($(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).setValue(faker.random.word());

    $(streamPage.variableLocatorsStreamMenu.checkYouOfferInput).click();
    $(streamPage.variableLocatorsStreamMenu.checkOffer).click();

    $(streamPage.variableLocatorsStreamMenu.checkYouTrafficOrStreamInput).click();
    $(streamPage.variableLocatorsStreamMenu.checkTraffic).click();

    $(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending).waitForDisplayed(15000);

    expect( $(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending).click();

    expect($(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).click();

    expect($(streamPage.variableLocatorsStreamMenu.createWindow).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).click();

    expect(browser.getUrl()).not.to.contains("/stream-create");
    expect(browser.getUrl()).to.contains("/streams");
  });
});







