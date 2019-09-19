const {expect} = require("chai");
const faker = require("faker");
const mocha = require('mocha');
const loginPage = require('../pageObjectFiles/login.js');


//run tests .\node_modules\.bin\wdio wdio.conf.js

describe('1 test', function () {

    it('should be create steam', function () {
        let elementHeader = 'nav.navbar.sticky-top.flex-md-nowrap.p-0';
        let leftMenuAllElements = 'div.d-flex.flex-column.h-100';
        let buttonStreams = 'div.d-flex.flex-column.h-100 li a[href="/streams"]';
        let streamHeadElement = 'div.card-header.d-flex.align-items-center div.ml-auto';
        let buttonCreateStream = 'button.btn.btn-primary.font-semibold';
        let inputCreateStreamName = '#stream-name';
        let selectOffers = '#addNewStreamFrom > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div'; //need to rewrite locators
        let selectSourceTraffic = 'body > div.container-fluid > div > main > div > div > div > div:nth-child(2) > div > div:nth-child(3) > div > input'; //need to rewrite locators
        let selectOffer = '#addNewStreamFrom > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div.menu.visible > div.item.current'; //need to rewrite locators

        loginPage.loginCorrect();

        expect($(elementHeader).isDisplayed()).to.equal(true, true, 'not visible');
        expect($(leftMenuAllElements).isDisplayed()).to.equal(false, true, 'not visible leftMenuAllElements');
        $((buttonStreams)).click();

        $(buttonCreateStream).waitForDisplayed(10000);
        expect($(buttonCreateStream).isDisplayed()).to.equal(true, true);
        $((buttonCreateStream)).click();
        $(inputCreateStreamName).waitForDisplayed(10000);
        expect($(inputCreateStreamName).isDisplayed()).to.equal(true, true);
        $(inputCreateStreamName).setValue(faker.random.word());


        $((selectOffers)).click();
        $(selectOffer).waitForDisplayed(10000);
        $((selectOffer)).click();



    });

});



