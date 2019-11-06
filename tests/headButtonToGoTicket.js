const { expect, equal } = require("chai");
const faker = require("faker");
const loginPage = require("../pageObjectFiles/loginPage.js");
const supportPage = require("../pageObjectFiles/supportPage.js");
const headElements  = require("../pageObjectFiles/headElements.js");
const mocha = require("@wdio/mocha-framework");

before(function () {
    loginPage.loginCorrect();
});


    describe('checked button on head element, hoes go to on support page', function(){

        it('go to suport page', function(){
               //wait for head element
               browser.pause(2000);
               $(headElements.variableHeadElements.headMainElement).waitForDisplayed(10000);
               expect($(headElements.variableHeadElements.headMainElement).isDisplayed()).to.equal(true, true);

               //wait for button hoes to go on support page
               $(headElements.variableHeadElements.buttonToGoTicket).waitForDisplayed(10000);
               expect($(headElements.variableHeadElements.buttonToGoTicket).isDisplayed()).to.equal(true, true);
               $(headElements.variableHeadElements.buttonToGoTicket).click();

               //wait for button create ticket and write message field
               $(supportPage.variableLocatorsSupport.buttonCreateTicket).waitForDisplayed(10000);
               $(supportPage.variableLocatorsSupport.inputTicketTopic).waitForDisplayed(10000);
               expect($(supportPage.variableLocatorsSupport.buttonCreateTicket).isDisplayed()).to.equal(true, true);
               expect($(supportPage.variableLocatorsSupport.inputTicketTopic).isDisplayed()).to.equal(true, true);
               //checked tru url
               expect(browser.getUrl()).not.to.contains("/dashboard");
               expect(browser.getUrl()).to.contains("/support-main");


})

})