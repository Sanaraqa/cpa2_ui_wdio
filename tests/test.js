const { expect } = require("chai");
const faker = require("faker");
//const {describe, it} = require("mocha");
const loginPage = require("../pageObjectFiles/loginPO.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const streamPage = require("../pageObjectFiles/streamPage.js");
const toolsPage = require("../pageObjectFiles/toolsPage.js");
const supportPage = require("../pageObjectFiles/supportPage.js");

//run tests .\node_modules\.bin\wdio wdio.conf.js

describe("create main functionality", function () {

  it("should be create stream", function()  {
    loginPage.loginCorrect();

    $(dashBoardPage.variableLocatorsDashBoard.elementHeader).waitForDisplayed(10000);
    expect($(dashBoardPage.variableLocatorsDashBoard.elementHeader).isDisplayed()).to.equal(true, true, "not visible");
    $(dashBoardPage.variableLocatorsDashBoard.elementHeader).waitForDisplayed(10000);
    expect($(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).isDisplayed()).to.equal(true, true, "not visible leftMenuAllElements");
    $(streamPage.variableLocatorsStreamMenu.buttonStreams).click();

    $(streamPage.variableLocatorsStreamMenu.buttonCreateStream).waitForDisplayed(10000);

    expect($(streamPage.variableLocatorsStreamMenu.buttonCreateStream).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.buttonCreateStream).click();

    $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).waitForDisplayed(10000);

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







