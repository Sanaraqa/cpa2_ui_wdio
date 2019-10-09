const dashBoardPage = require("./dashboardPage.js");
const { expect } = require("chai");

module.exports = {
  //locators on form login in system
  variableLocatorsLogin: {
    elementEmailInput: "input#loginEmail",
    elementEmailPassword: "input#loginPass",
    pressEnter: "button#loginBtn"
  },

  //function hoes сorrect login in system
  loginCorrect() {
    console.log('//////////////////////////START TEST - //////////////////////////');
    browser.url("/main/index.html");
    $(this.variableLocatorsLogin.elementEmailInput).setValue("roman.qa+test10@dott.pro");
    $(this.variableLocatorsLogin.elementEmailPassword).setValue("Qwer!@#");
    $(this.variableLocatorsLogin.pressEnter).click();
    $(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).waitForDisplayed(5000);
    expect($(dashBoardPage.variableLocatorsDashBoard.leftMenuAllElements).isDisplayed()).to.equal(true, true);
  }
};
 