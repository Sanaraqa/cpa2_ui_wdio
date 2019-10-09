const { expect, assert } = require("chai");
const loginPage = require("../pageObjectFiles/loginPage.js");
const mocha = require("@wdio/mocha-framework");

describe('not correct password', function () {
    it('should be not correct password in login', function () {

        browser.url("/main/index.html");
        $(loginPage.variableLocatorsLogin.elementEmailInput).setValue('the same email');
        $(loginPage.variableLocatorsLogin.elementEmailPassword).setValue('the same password');
        $(loginPage.variableLocatorsLogin.pressEnter).click();
        let alertTextUnCorrectPassword = browser.getAlertText();
        console.log(alertTextUnCorrectPassword);
        assert.equal(alertTextUnCorrectPassword, 'Произошла ошибка! Обратитесь в поддержку...');
    })
});
