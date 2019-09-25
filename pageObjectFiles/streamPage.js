module.exports = {
  variableLocatorsStreamMenu: {
    buttonStreams: 'div.d-flex.flex-column.h-100 li a[href="/streams"]',
    buttonCreateStream: "button.btn.btn-primary.font-semibold",
    inputCreateStreamName: "#stream-name",
    checkYouOfferInput:
      '//*[@id="addNewStreamFrom"]/div[1]/div[2]/div[1]/div[2]/div', //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    selectOffer:
      '//*[@id="addNewStreamFrom"]/div[1]/div[2]/div[1]/div[2]/div/div[2]/div[2]', //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    checkOffer:
      "#addNewStreamFrom > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div.menu.visible", //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    checkYouTrafficOrStreamInput:
      '//*[@id="addNewStreamFrom"]/div[1]/div[2]/div[1]/div[3]/div', //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    checkTraffic:
      '//*[@id="addNewStreamFrom"]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div[3]', //need to rewrite locators, I now its very bad locator, but i dont have any choice=)
    chooseLendingMenu: "#addNewStreamFrom > div:nth-child(2) > div.card-body",
    checkedRadioButtonLending: "div.custom-control.custom-checkbox",
    buttonCreateSteam: "button.btn.btn-primary.w-100.font-semibold",
    createWindow: "div.v-dialog-container",
    buttonOkCreateStream: "a.v-dialog-btn.success"
  }
};
