const { expect, assert } = require("chai");
const loginPage = require("../pageObjectFiles/loginPO.js");
const mocha = require("@wdio/mocha-framework");



describe('not correct email', function () {
    it('should be not correct email in login', function () {
        browser.url("/main/index.html");
        $(loginPage.variableLocatorsLogin.elementEmailInput).setValue('roman.qa+test10@dott.p');
        $(loginPage.variableLocatorsLogin.elementEmailPassword).setValue('Qwer!@#');
        $(loginPage.variableLocatorsLogin.pressEnter).click();
        let alertTextUnCorrectEmail = browser.getAlertText();
        console.log(alertTextUnCorrectEmail);
        assert.equal(alertTextUnCorrectEmail, 'Такой имейл не зарегистрирован!');
    })
});