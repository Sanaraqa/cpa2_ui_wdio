const { expect } = require("chai");
const faker = require("faker");
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

    // take value from input and write in variable for checks
    var streamName = $(streamPage.variableLocatorsStreamMenu.inputCreateStreamName).getValue();
    console.log(streamName);

    $(streamPage.variableLocatorsStreamMenu.checkYouOfferInput).click();
    $(streamPage.variableLocatorsStreamMenu.checkOffer).click();

    $(streamPage.variableLocatorsStreamMenu.checkYouTrafficOrStreamInput).click();
    $(streamPage.variableLocatorsStreamMenu.checkTraffic).click();

    //wait lending menu
    $(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending1).waitForDisplayed(15000);

    expect( $(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending1).isDisplayed()).to.equal(true, true);
    //hardcode javascript click on button
    browser.execute(function(){
      document.querySelector("div.custom-control.custom-checkbox #land-list-item-4").click();
    });

    //checked that checkbox active on another lending
    expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending1).isSelected()).to.equal(true, true);

    //wait button create stream
    expect($(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).click();

    //wait window hoes confirms add new stream
    expect($(streamPage.variableLocatorsStreamMenu.createWindow).isDisplayed()).to.equal(true, true);
    $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).click();

    //checks true url and check fake url
    expect(browser.getUrl()).not.to.contains("/stream-create");
    expect(browser.getUrl()).to.contains("/streams");
  });
});







