const { expect, equal } = require("chai");
const faker = require("faker");
const loginPage = require("../pageObjectFiles/loginPage.js");
const supportPage = require("../pageObjectFiles/supportPage.js");
const headElements  = require("../pageObjectFiles/headElements.js");
const mocha = require("@wdio/mocha-framework");
const newsPage = require('../pageObjectFiles/newsPage.js');

before(function () {
    loginPage.loginCorrect();
});

describe('checked button on head element, hoes go to on news page', function(){

        it('go to on news page', function(){
             //wait for head element
             $(headElements.variableHeadElements.headMainElement).waitForDisplayed(10000);
             expect($(headElements.variableHeadElements.headMainElement).isDisplayed()).to.equal(true, true);

             //wait for button hoes to go on news page
              $(headElements.variableHeadElements.buttonToGoNews).waitForDisplayed(10000);
              expect($(headElements.variableHeadElements.buttonToGoNews).isDisplayed()).to.equal(true, true);
              $(headElements.variableHeadElements.buttonToGoNews).click();

              //wait and expect element hoes to confirms
              //we are on news page
              $(newsPage.variableNewsPageElement.centralMainElement).waitForDisplayed(5000);
              $(newsPage.variableNewsPageElement.rightElement).waitForDisplayed(5000);
              expect($(newsPage.variableNewsPageElement.centralMainElement).isDisplayed()).to.equal(true, true);
              expect($(newsPage.variableNewsPageElement.rightElement).isDisplayed()).to.equal(true, true);

              //checked true url
              expect(browser.getUrl()).not.to.contains("/dashboard");
              expect(browser.getUrl()).to.contains("/news");

        })

})
