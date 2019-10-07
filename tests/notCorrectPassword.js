const { expect, assert } = require("chai");
const loginPage = require("../pageObjectFiles/loginPO.js");
const mocha = require("@wdio/mocha-framework");

describe('not correct password', function () {
    it('should be not correct password in login', function () {
        browser.url("/main/index.html");
        $(loginPage.variableLocatorsLogin.elementEmailInput).setValue('roman.qa+test10@dott.pro');
        $(loginPage.variableLocatorsLogin.elementEmailPassword).setValue('Qwer');
        $(loginPage.variableLocatorsLogin.pressEnter).click();
        let alertTextUnCorrectPassword = browser.getAlertText();
        console.log(alertTextUnCorrectPassword);
        assert.equal(alertTextUnCorrectPassword, 'Неправильный логин или пароль!');
    })
});