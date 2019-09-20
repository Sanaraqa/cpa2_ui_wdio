const { expect } = require("chai");
const faker = require("faker");
const mocha = require("mocha");
const loginPage = require("../pageObjectFiles/login.js");

//run tests .\node_modules\.bin\wdio wdio.conf.js

describe("", function() {
  it("should be create steam", function() {
    let elementHeader = "nav.navbar.sticky-top.flex-md-nowrap.p-0";
    let leftMenuAllElements = "div.d-flex.flex-column.h-100";
    let buttonStreams = 'div.d-flex.flex-column.h-100 li a[href="/streams"]';
    let buttonCreateStream = "button.btn.btn-primary.font-semibold";
    let inputCreateStreamName = "#stream-name";
    let checkYouOfferInput =
      '//*[@id="addNewStreamFrom"]/div[1]/div[2]/div[1]/div[2]/div'; //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    let selectOffer =
      '//*[@id="addNewStreamFrom"]/div[1]/div[2]/div[1]/div[2]/div/div[2]/div[2]'; //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    let checkOffer =
      "#addNewStreamFrom > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div.menu.visible"; //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    let checkYouTrafficOrStreamInput =
      '//*[@id="addNewStreamFrom"]/div[1]/div[2]/div[1]/div[3]/div'; //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    let checkTraffic =
      '//*[@id="addNewStreamFrom"]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div[3]'; //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    let chooseLendingMenu =
      "#addNewStreamFrom > div:nth-child(2) > div.card-body";
    let checkedRadioButtonLending = "div.custom-control.custom-checkbox";
    let buttonCreateSteam = "button.btn.btn-primary.w-100.font-semibold";
    let createWindow = "div.v-dialog-container";
    let buttonOkCreateStream = "a.v-dialog-btn.success";

    loginPage.loginCorrect();

    expect($(elementHeader).isDisplayed()).to.equal(true, true, "not visible");
    expect($(leftMenuAllElements).isDisplayed()).to.equal(
      false,
      true,
      "not visible leftMenuAllElements"
    );
    $(buttonStreams).click();

    $(buttonCreateStream).waitForDisplayed(10000);
    expect($(buttonCreateStream).isDisplayed()).to.equal(true, true);
    $(buttonCreateStream).click();
    $(inputCreateStreamName).waitForDisplayed(10000);
    expect($(inputCreateStreamName).isDisplayed()).to.equal(true, true);

    $(inputCreateStreamName).setValue(faker.random.word());

    $(checkYouOfferInput).click();
    $(checkOffer).click();

    $(checkYouTrafficOrStreamInput).click();
    $(checkTraffic).click();

    /* $(chooseLendingMenu).waitForDisplayed(10000);
    expect($(chooseLendingMenu).isDisplayed()).to.equal(true, true);*/

    $(checkedRadioButtonLending).waitForDisplayed(15000);

    expect($(checkedRadioButtonLending).isDisplayed()).to.equal(true, true);
    $(checkedRadioButtonLending).click();

    expect($(buttonCreateSteam).isDisplayed()).to.equal(true, true);
    $(buttonCreateSteam).click();

    expect($(createWindow).isDisplayed()).to.equal(true, true);
    $(buttonOkCreateStream).click();
  });


});
