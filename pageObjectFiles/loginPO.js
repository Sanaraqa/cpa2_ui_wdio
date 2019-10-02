
module.exports = {

  //locators on form login in system
  variableLocatorsLogin: {
    elementEmailInput: "input[type=Email]",
    elementEmailPassword: "input[type=Password]",
    pressEnter: "button[type=submit]"
  },

  //function hoes Сorrect login in system
  loginCorrect() {
    browser.url("/login");
    $(this.variableLocatorsLogin.elementEmailInput).setValue("roman.qa+test10@dott.pro");
    $(this.variableLocatorsLogin.elementEmailPassword).setValue("Qwer!@#");
    $(this.variableLocatorsLogin.pressEnter).click();
  }

};
