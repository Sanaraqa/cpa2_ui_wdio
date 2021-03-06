const { expect } = require("chai");
const faker = require("faker");
const loginPage = require("../pageObjectFiles/loginPage.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const streamPage = require("../pageObjectFiles/streamPage.js");
const toolsPage = require("../pageObjectFiles/toolsPage.js");

before(function () {
  loginPage.loginCorrect();
});


describe("create domain", function () {

      it("should be test on create domain", function() {
        
          //search tools button click, wait button parcking domain -> click 
          $(dashBoardPage.variableLocatorsDashBoard.buttonTools).waitForDisplayed(10000);
          expect($(dashBoardPage.variableLocatorsDashBoard.buttonTools).isDisplayed()).to.equal(true, true);
          $(dashBoardPage.variableLocatorsDashBoard.buttonTools).click();
          expect($(dashBoardPage.variableLocatorsDashBoard.buttonToolsParkingDomain).isDisplayed()).to.equal(true, true);
          $(dashBoardPage.variableLocatorsDashBoard.buttonToolsParkingDomain).click();


          //wait input, bropDown and value to create parcking domain
          $(toolsPage.variableLocatorsToolsDomainParking.inputFormatsitin).waitForDisplayed(10000);
          expect( $(toolsPage.variableLocatorsToolsDomainParking.inputFormatsitin).isDisplayed()).to.equal(true, true);
          $(toolsPage.variableLocatorsToolsDomainParking.inputFormatsitin).click();
          browser.pause(1000);
          $(toolsPage.variableLocatorsToolsDomainParking.dropdownOffersLocator).waitForDisplayed(5000);
          expect($(toolsPage.variableLocatorsToolsDomainParking.dropdownOffersLocator).isDisplayed()).to.equal(true, true);
          //take all text from input and make form his array
          let formatsetinEveible = $(toolsPage.variableLocatorsToolsDomainParking.dropdownOffersLocator).getText().split('\n');
          console.log(formatsetinEveible);
        
        if (formatsetinEveible[1] === "Формицитин - средство для потенции") {

          $(toolsPage.variableLocatorsToolsDomainParking.formatsitin).waitForDisplayed(10000);
          expect( $(toolsPage.variableLocatorsToolsDomainParking.formatsitin).isDisplayed()).to.equal(true, true);
          $(toolsPage.variableLocatorsToolsDomainParking.formatsitin).click();

          $(toolsPage.variableLocatorsToolsDomainParking.inputAddress).waitForDisplayed(10000);

          $(toolsPage.variableLocatorsToolsDomainParking.inputAddress).setValue(faker.internet.domainName());

          browser.pause(1000);
          $(toolsPage.variableLocatorsToolsDomainParking.buttonAddDomain).waitForDisplayed(2000);
          expect( $(toolsPage.variableLocatorsToolsDomainParking.buttonAddDomain).isDisplayed()).to.equal(true, true);
          $(toolsPage.variableLocatorsToolsDomainParking.buttonAddDomain).click();

          $(streamPage.variableLocatorsStreamMenu.createWindow).waitForDisplayed(10000);
          expect( $(streamPage.variableLocatorsStreamMenu.createWindow).isDisplayed()).to.equal(true, true);

          $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).waitForDisplayed(10000);
          $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).click();
        }
        else {
          browser.refresh();
          $(toolsPage.variableLocatorsToolsDomainParking.formatsitin).waitForDisplayed(10000);
          expect( $(toolsPage.variableLocatorsToolsDomainParking.formatsitin).isDisplayed()).to.equal(true, true);
          $(toolsPage.variableLocatorsToolsDomainParking.formatsitin).click();

          $(toolsPage.variableLocatorsToolsDomainParking.inputAddress).waitForDisplayed(10000);
          $(toolsPage.variableLocatorsToolsDomainParking.inputAddress).setValue(faker.internet.domainName());

          browser.pause(1000);
          $(toolsPage.variableLocatorsToolsDomainParking.buttonAddDomain).waitForDisplayed(2000);
          expect( $(toolsPage.variableLocatorsToolsDomainParking.buttonAddDomain).isDisplayed()).to.equal(true, true);
          $(toolsPage.variableLocatorsToolsDomainParking.buttonAddDomain).click();

          $(streamPage.variableLocatorsStreamMenu.createWindow).waitForDisplayed(10000);
          expect( $(streamPage.variableLocatorsStreamMenu.createWindow).isDisplayed()).to.equal(true, true);

          $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).waitForDisplayed(10000);
          $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).click();
        }
    });
  });


