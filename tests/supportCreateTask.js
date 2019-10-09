const { expect } = require("chai");
const faker = require("faker");
const loginPage = require("../pageObjectFiles/loginPage.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const supportPage = require("../pageObjectFiles/supportPage.js");
const mocha = require("@wdio/mocha-framework");

before(function () {
  loginPage.loginCorrect();
});

describe("create support task", function () {

    it('should create new support task', function () {
      
      $(dashBoardPage.variableLocatorsDashBoard.buttonSupport).waitForDisplayed(10000);
      expect($(dashBoardPage.variableLocatorsDashBoard.buttonSupport).isDisplayed()).to.equal(true, true);
      $(dashBoardPage.variableLocatorsDashBoard.buttonSupport).click();

      //search input "Ticket topic" and fill this field
      $(supportPage.variableLocatorsSupport.inputTicketTopic).waitForDisplayed(10000);
      expect($(supportPage.variableLocatorsSupport.inputTicketTopic).isDisplayed()).to.equal(true, true);
      $(supportPage.variableLocatorsSupport.inputTicketTopic).setValue(faker.random.words());

      //search input "Ticket topic" and fill this field "You massage"
      $(supportPage.variableLocatorsSupport.message).waitForDisplayed(5000);
      expect($(supportPage.variableLocatorsSupport.message).isDisplayed()).to.equal(true, true);
      $(supportPage.variableLocatorsSupport.message).setValue(faker.random.words());

      $(supportPage.variableLocatorsSupport.buttonCreateTicket).click();
      //browser.reloadSession()
    });
});




