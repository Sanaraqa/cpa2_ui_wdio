const { equal, assert } = require("chai");
const faker = require("faker");
const loginPage = require("../pageObjectFiles/loginPO.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const supportPage = require("../pageObjectFiles/supportPage.js");
const mocha = require("@wdio/mocha-framework");

before(function () {
    loginPage.loginCorrect();
});

describe('empty message', function () {
    it('should be empty message', function () {
        $(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).waitForDisplayed(5000);
        expect($(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).isDisplayed()).to.equal(true, true);
        $(dashBoardPage.variableLocatorsDashBoard.buttonSupport).waitForDisplayed(10000);
        expect($(dashBoardPage.variableLocatorsDashBoard.buttonSupport).isDisplayed()).to.equal(true, true);
        $(dashBoardPage.variableLocatorsDashBoard.buttonSupport).click();

        //search input "Ticket topic" and fill this field "You massage"
        $(supportPage.variableLocatorsSupport.message).waitForDisplayed(5000);
        expect($(supportPage.variableLocatorsSupport.message).isDisplayed()).to.equal(true, true);
        $(supportPage.variableLocatorsSupport.message).setValue(faker.random.words());
        $(supportPage.variableLocatorsSupport.buttonCreateTicket).click();
        let errorNoMessage =  browser.getAlertText();
        console.log(errorNoMessage);
        assert.equal(errorNoMessage, "Заполните все поля!")

    })
});