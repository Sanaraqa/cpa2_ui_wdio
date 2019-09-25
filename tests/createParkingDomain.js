const { expect } = require("chai");
const faker = require("faker");
const {describe, it} = require("mocha");
const loginPage = require("../pageObjectFiles/login.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const streamPage = require("../pageObjectFiles/streamPage.js");
const toolsPage = require("../pageObjectFiles/toolsPage.js");



describe('create parking domain',  function() {

    it("should be parking domain", function() {


        loginPage.loginCorrect();

        $(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).waitForDisplayed(15000);
        expect($(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).isDisplayed()).to.equal(true, true);

        $(dashBoardPage.variableLocatorsDashBoard.buttonTools).waitForDisplayed(10000);
        expect($(dashBoardPage.variableLocatorsDashBoard.buttonTools).isDisplayed()).to.equal(true, true);
        $(dashBoardPage.variableLocatorsDashBoard.buttonTools).click();
        expect($(dashBoardPage.variableLocatorsDashBoard.buttonToolsParkingDomain).isDisplayed()).to.equal(true, true);
        $(dashBoardPage.variableLocatorsDashBoard.buttonToolsParkingDomain).click();

        expect($().isDisplayed()).to.equal(true, true);
        $().click();
        $(streamPage.variableLocatorsStreamMenu.checkOffer).click();

        browser.pause(10000);
        $(toolsPage.variableLocatorsToolsDomainParking.inputAddress).waitForDisplayed(10000);
        $(toolsPage.variableLocatorsToolsDomainParking.inputAddress).setValue(faker.internet.domainName());

    });
});
