const { assert } = require("chai");
const loginPage = require("../pageObjectFiles/loginPage.js");
const mocha = require("@wdio/mocha-framework");



describe('not correct email', function () {
    it('should be not correct email in login', function () {
        browser.url("/main/index.html");
        $(loginPage.variableLocatorsLogin.elementEmailInput).setValue('roman.qa+test10@dot');
        $(loginPage.variableLocatorsLogin.elementEmailPassword).setValue('Qwer!@#');
        $(loginPage.variableLocatorsLogin.pressEnter).click();
        let alertTextUnCorrectEmail = browser.getAlertText();
        console.log(alertTextUnCorrectEmail);
        assert.equal(alertTextUnCorrectEmail, 'Произошла ошибка! Обратитесь в поддержку...');
    })
});
