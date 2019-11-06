const { equal, assert, expect } = require("chai");
const faker = require("faker");
const loginPage = require("../pageObjectFiles/loginPage.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const supportPage = require("../pageObjectFiles/supportPage.js");
const mocha = require("@wdio/mocha-framework");


before(function () {
    loginPage.loginCorrect();
});

describe('empty message', function () {
    it('should be empty message', function () {

        //wait menu support, see him and click on button support
        $(dashBoardPage.variableLocatorsDashBoard.buttonSupport).waitForDisplayed(10000);
        expect($(dashBoardPage.variableLocatorsDashBoard.buttonSupport).isDisplayed()).to.equal(true, true);
        $(dashBoardPage.variableLocatorsDashBoard.buttonSupport).click();

        //search input "Ticket topic" and fill this field "You massage"
        $(supportPage.variableLocatorsSupport.message).waitForDisplayed(5000);
        expect($(supportPage.variableLocatorsSupport.message).isDisplayed()).to.equal(true, true);

        //enter random words and click create ticket
        $(supportPage.variableLocatorsSupport.message).setValue(faker.random.words());
        $(supportPage.variableLocatorsSupport.buttonCreateTicket).click();
    
        //catch Alert(); get text
        let errorNoMessage =  browser.getAlertText();
        console.log(errorNoMessage);

        //to equal words in Alert();
        assert.equal(errorNoMessage, "Заполните все поля!")

    })
});