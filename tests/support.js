const { expect } = require("chai");
const faker = require("faker");
const loginPage = require("../pageObjectFiles/loginPO.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const streamPage = require("../pageObjectFiles/streamPage.js");
const toolsPage = require("../pageObjectFiles/toolsPage.js");
const supportPage = require("../pageObjectFiles/supportPage.js");


describe("create support task", function () {
    it('should create new support task', function () {

      loginPage.loginCorrect();

      $(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).waitForDisplayed(10000);
      expect($(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).isDisplayed()).to.equal(true, true, "not visible leftMenuAllElements");
      $(dashBoardPage.variableLocatorsDashBoard.buttonSupport).waitForDisplayed(10000);
      expect($(dashBoardPage.variableLocatorsDashBoard.buttonSupport).isDisplayed()).to.equal(true, true);
      $(dashBoardPage.variableLocatorsDashBoard.buttonSupport).click();

      //поиск input "Темы тикета" и его заполнение
      $(supportPage.variableLocatorsSupport.inputTicketTopic).waitForDisplayed(10000);
      expect($(supportPage.variableLocatorsSupport.inputTicketTopic).isDisplayed()).to.equal(true, true);
      $(supportPage.variableLocatorsSupport.inputTicketTopic).setValue(faker.random.words());

      //поиск и заполнение поля "Ваше сообщение"

      $(supportPage.variableLocatorsSupport.message).waitForDisplayed(5000);
      expect($(supportPage.variableLocatorsSupport.message).isDisplayed()).to.equal(true, true);
      $(supportPage.variableLocatorsSupport.message).setValue(faker.random.words());

      $(supportPage.variableLocatorsSupport.buttonCreateTicket).click();
    });
  });
