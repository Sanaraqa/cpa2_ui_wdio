const { expect } = require("chai");
const faker = require("faker");
const loginPage = require("../pageObjectFiles/loginPage.js");
const dashBoardPage = require("../pageObjectFiles/dashboardPage.js");
const streamPage = require("../pageObjectFiles/streamPage.js");

before(function () {
    loginPage.loginCorrect();
});


describe('editing stream leanding', function(){

    it('shold be editing leanding', function(){

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

        //wait element with menu choose Lending
        $(streamPage.variableLocatorsStreamMenu.chooseLendingMenu).waitForDisplayed(5000);
        expect($(streamPage.variableLocatorsStreamMenu.chooseLendingMenu).isDisplayed()).to.equal(true, true);

        //checked that checkbox are active
        expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending1).isSelected()).to.equal(true);

        //hardcode javascript click on button
        browser.execute(function(){
            document.querySelector("div.custom-control.custom-checkbox #land-list-item-4").click();
        });

        //checked that checkbox non active
        expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending1).isSelected()).to.equal(false, false);
        
        //select new lending
        $(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending2).waitForDisplayed(2000);
        
        //hardcode javascript click on button
        browser.execute(function(){
            document.querySelector('div.custom-control.custom-checkbox #land-list-item-5').click();
        });

        //checked that checkbox active on another lending
        expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending2).isSelected()).to.equal(true, true);
        
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
    
            //wait element with menu choose lending
            $(streamPage.variableLocatorsStreamMenu.chooseLendingMenu).waitForDisplayed(5000);
            expect($(streamPage.variableLocatorsStreamMenu.chooseLendingMenu).isDisplayed()).to.equal(true, true);

            //checked that checkbox are active
            expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending2).isSelected()).to.equal(true);


            //hardcode javascript click on button
            browser.execute(function(){
                document.querySelector("div.custom-control.custom-checkbox #land-list-item-5").click();
            });

            expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending2).isSelected()).to.equal(false, false);

             //hardcode javascript click on button
             browser.execute(function(){
                document.querySelector("div.custom-control.custom-checkbox #land-list-item-4").click();
            });
            //checked that checkbox active on another lending
            expect($(streamPage.variableLocatorsStreamMenu.checkedRadioButtonLending1).isSelected()).to.equal(true, true);

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
        
        })
        
    });

})