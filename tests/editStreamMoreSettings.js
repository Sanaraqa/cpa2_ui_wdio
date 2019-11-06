const { expect } = require("chai");
const loginPage = require("../pageObjectFiles/loginPage.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const streamPage = require("../pageObjectFiles/streamPage.js");
const faker = require('faker');

before(function () {
    loginPage.loginCorrect();
});


describe('add settings in lending', function(){
    it('', function(){

        //wait for button stream and go to create stream page
        $(streamPage.variableLocatorsStreamMenu.buttonStreams).waitForDisplayed(5000);
        $(streamPage.variableLocatorsStreamMenu.buttonStreams).click();

        //wait for element hoes it has new stream information
        $(streamPage.variableLocatorsStreamMenu.elementContainStream).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.elementContainStream).isDisplayed()).to.equal(true, true);

        //wait for edit stream button
        $(streamPage.variableLocatorsStreamMenu.editStreamButton).waitForDisplayed(10000);
        expect($(streamPage.variableLocatorsStreamMenu.editStreamButton).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.editStreamButton).click();
        
        //checked true url
        expect(browser.getUrl()).to.contains("/stream-edit");

        //wait and click button to more settings
        $(streamPage.variableLocatorsStreamMenu.divConteinerAdditionalSettings).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.divConteinerAdditionalSettings).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.buttonShowSettings).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.buttonShowSettings).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.buttonShowSettings).click();

        //UTM - Content
        $(streamPage.variableLocatorsStreamMenu.inputUTMTagsContent).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.inputUTMTagsContent).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.inputUTMTagsContent).setValue(faker.lorem.slug);
        let checkedContentValue = (streamPage.variableLocatorsStreamMenu.inputUTMTagsContent).getValue();
        expect(checkedContentValue!== undefined);


        //UTM - Term
        $(streamPage.variableLocatorsStreamMenu.inputUTMTagsMedium).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.inputUTMTagsMedium).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.inputUTMTagsMedium).setValue(faker.internet.color)
        let checkedTermValue = (streamPage.variableLocatorsStreamMenu.inputUTMTagsContent).getValue();
        expect(checkedTermValue!== undefined);
        
        //UTM - Source
        $(streamPage.variableLocatorsStreamMenu.inputUTMTagsSource).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.inputUTMTagsSource).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.inputUTMTagsMedium).setValue(faker.random.uuid)
        let checkedSourceValue = (streamPage.variableLocatorsStreamMenu.inputUTMTagsContent).getValue();
        expect(checkedSourceValue!== undefined);

        //UTM - Campaing
        $(streamPage.variableLocatorsStreamMenu.inputUTMTagsCampaign).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.inputUTMTagsCampaign).isDisplayed()).to.equal(true, true);
        $(streamPage.variableLocatorsStreamMenu.inputUTMTagsMedium).setValue(faker.random.words)
        let checkedCampaingValue = (streamPage.variableLocatorsStreamMenu.inputUTMTagsContent).getValue();
        expect(checkedCampaingValue!== undefined);

        //Sub ID

       /* function parseQuery(queryString) {
            var query = {};
            var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split('=');
                query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
            }
            return query;
        }

        let a = parseQuery();

        console.log(a);*/


    })
})