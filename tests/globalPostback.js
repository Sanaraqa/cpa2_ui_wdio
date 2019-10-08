const { expect } = require("chai");
const faker = require("faker");
//const {describe, it} = require("mocha");
const loginPage = require("../pageObjectFiles/loginPO.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const toolsPage = require("../pageObjectFiles/toolsPage.js");


before(function () {
    loginPage.loginCorrect();
});

describe('Глобальный Postback', function () {
    it('should create global postback without entered URL', function () {
        $(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).waitForDisplayed(5000);
        expect($(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).isDisplayed()).to.equal(true, true);
        $(dashBoardPage.variableLocatorsDashBoard.buttonTools).waitForDisplayed(5000);
        expect($(dashBoardPage.variableLocatorsDashBoard.buttonTools).isDisplayed()).to.equal(true, true);
        $(dashBoardPage.variableLocatorsDashBoard.buttonTools).click();
        $(dashBoardPage.variableLocatorsDashBoard.buttonToolsGlobalPostback).click();

    });
});