const { expect } = require("chai");
const loginPage = require("../pageObjectFiles/loginPage.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const streamPage = require("../pageObjectFiles/streamPage.js");

before(function () {
    loginPage.loginCorrect();
});


describe('checked and edit stream on transit', function(){
    it('should be test on checked and edit stream on transit', function(){

            //wait for button stream and go to create stream page
            $(streamPage.variableLocatorsStreamMenu.buttonStreams).waitForDisplayed(5000);
            $(streamPage.variableLocatorsStreamMenu.buttonStreams).click();
    
            //wait for element hoes it has new stream information
            $(streamPage.variableLocatorsStreamMenu.elementContainStream).waitForDisplayed(5000);
            expect($(streamPage.variableLocatorsStreamMenu.elementContainStream).isDisplayed()).to.equal(true, true);
    
            //wait for edit stream button
            $(streamPage.variableLocatorsStreamMenu.editStreamButton).waitForDisplayed(5000);
            expect($(streamPage.variableLocatorsStreamMenu.editStreamButton).isDisplayed()).to.equal(true, true);
            $(streamPage.variableLocatorsStreamMenu.editStreamButton).click();
            
            //checked true url
            expect(browser.getUrl()).to.contains("/stream-edit");

            //wait element with menu choose Transit
            $(streamPage.variableLocatorsStreamMenu.chooseTransitMenu).waitForDisplayed(5000);
            expect($(streamPage.variableLocatorsStreamMenu.chooseTransitMenu).isDisplayed()).to.equal(true, true);

            //wait check box transit
            expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonTransit1).isSelected()).to.equal(false);

            //hardcode javascript click on button
            browser.execute(function(){
                document.querySelector("div.custom-control.custom-checkbox #gasket-list-item-23").click();
            });

            //checked box are clicked
            expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonTransit1).isSelected()).to.equal(true);

            //wait button hoes save lending
            $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).waitForDisplayed(5000);
            expect($(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).isDisplayed()).to.equal(true, true);
            $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).click();
            
            //wait window with confirmation that stream is changed
            $(streamPage.variableLocatorsStreamMenu.createWindow).waitForDisplayed(5000);
            expect($(streamPage.variableLocatorsStreamMenu.createWindow).isDisplayed()).to.equal(true, true);
            $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).click();

            //checked valid url
            expect(browser.getUrl()).not.to.contains("/stream-edit");
            expect(browser.getUrl()).to.contains("/streams");

            after(function(){
                $(streamPage.variableLocatorsStreamMenu.editStreamButton).waitForDisplayed(5000);
                expect($(streamPage.variableLocatorsStreamMenu.editStreamButton).isDisplayed()).to.equal(true, true);
                $(streamPage.variableLocatorsStreamMenu.editStreamButton).click();
                
                //checked true url
                expect(browser.getUrl()).to.contains("/stream-edit");

                //wait element with menu choose Transit
                $(streamPage.variableLocatorsStreamMenu.chooseTransitMenu).waitForDisplayed(5000);
                expect($(streamPage.variableLocatorsStreamMenu.chooseTransitMenu).isDisplayed()).to.equal(true, true);

                //wait check box transit
                expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonTransit1).isSelected()).to.equal(true);
                
                //hardcode javascript click on button
                browser.execute(function(){
                    document.querySelector("div.custom-control.custom-checkbox #gasket-list-item-23").click();
                });

                //wait check box transit
                expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonTransit1).isSelected()).to.equal(false);

                //wait button hoes save lending
                $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).waitForDisplayed(5000);
                expect($(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).isDisplayed()).to.equal(true, true);
                $(streamPage.variableLocatorsStreamMenu.buttonCreateSteam).click();
                
                //wait window with confirmation that stream is changed
                $(streamPage.variableLocatorsStreamMenu.createWindow).waitForDisplayed(5000);
                expect($(streamPage.variableLocatorsStreamMenu.createWindow).isDisplayed()).to.equal(true, true);
                $(streamPage.variableLocatorsStreamMenu.buttonOkCreateStream).click();

                //checked not valid url
                expect(browser.getUrl()).not.to.contains("/stream-edit");

                //checked valid url
                expect(browser.getUrl()).to.contains("/streams");

            })

    })
})