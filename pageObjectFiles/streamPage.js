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

              checkedRadioButtonLending1: "div.custom-control.custom-checkbox #land-list-item-4",
              checkedRadioButtonLending2: "div.custom-control.custom-checkbox #land-list-item-5",
              checkedRadioButtonLending3: "div.custom-control.custom-checkbox #land-list-item-6",
              checkedRadioButtonLending4: "div.custom-control.custom-checkbox #land-list-item-7",
              checkedRadioButtonLending5: "div.custom-control.custom-checkbox #land-list-item-8",
              buttonCreateSteam: "button.btn.btn-primary.w-100.font-semibold",
              createWindow: "div.v-dialog-container",
              buttonOkCreateStream: "a.v-dialog-btn.success",
              editStreamButton: 'td:nth-child(7) > button:nth-child(4)',
              elementContainStream: '#flowsContainer.card-body.border-top.mt-5',


              //transit locators - check box
              chooseTransitMenu: '#addNewStreamFrom > div:nth-child(3) > div.card-body',
              checkedRadioButtonTransit1: 'div.custom-control.custom-checkbox #gasket-list-item-23',
              checkedRadioButtonTransit2: 'div.custom-control.custom-checkbox #gasket-list-item-24',
              checkedRadioButtonTransit3: 'div.custom-control.custom-checkbox #gasket-list-item-25',
              checkedRadioButtonTransit4: 'div.custom-control.custom-checkbox #gasket-list-item-26',
              checkedRadioButtonTransit5: 'div.custom-control.custom-checkbox #gasket-list-item-27',
              
              divConteinerAdditionalSettings: 'div.card-header.border-0',

              buttonShowSettings: '#showTitle',

          textMetricsLending:'Метрика на Лендинг',
              inputYandex:'#advancedSettingsLandingMetrika',
              inputMail:'#advancedSettingsLandingMailRu',
              inputGoogleAnalytics:'#advancedSettingsLandingGoogleCode',
              inputGoogleTaskManager:'#advancedSettingsLandingGoogleTag',
              inputFaceBookPixel:'#advancedSettingsLandingFacebook',

          textMetricsTransit:'На Транзитку',
              inputYandexTransit:'#advancedSettingsGasketMetrika',
              inputMailTransit:'#advancedSettingsGasketMailRu',
              inputGoogleAnalyticsTransit:'#advancedSettingsGasketGoogleCode',
              inputGoogleTaskManagerTransit:'#advancedSettingsGasketGoogleTag',
              inputFaceBookPixelTransit:'#advancedSettingsGasketFacebook',

          textMetricsPageThx:'На страницу «Спасибо»',
              inputYandexPageThx:'#advancedSettingsTnxMetrika',
              inputMailPageThx:'#advancedSettingsTnxMailRu',
              inputGoogleAnalyticsPageThx:'#advancedSettingsTnxGoogleCode',
              inputGoogleTaskManagerPageThx:'#advancedSettingsTnxGoogleTag',
              inputFaceBookPixelPageThx:'#advancedSettingsTnxFacebook',

          textUTMTags:'UTM метки',
              inputUTMTagsContent: '#advancedSettingsUtmContent',
              inputUTMTagsMedium: '#advancedSettingsUtmMedium',
              inputUTMTagsSource: '#advancedSettingsUtmSource',
              inputUTMTagsCampaign: '#advancedSettingsUtmCampaign',

          textSubID: 'Sub ID',
              inputSubID1: '#advancedSettingsSubID1',
              inputSubID2: '#advancedSettingsSubID2',
              inputSubID3: '#advancedSettingsSubID3',
              inputSubID4: '#advancedSettingsSubID4',
              inputSubID5: '#advancedSettingsSubID5',

    },

          
    
  };
