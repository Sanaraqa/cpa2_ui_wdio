
#UI tests on CPA v.2 

site: <https://nutramedia>

***************************************


In this project use library and framework :
==============================================
webDriverIO <https://webdriver.io/> - make action in web page
=============================================================

## how to run test and report

to start all test suite need in terminal write command: <b>.\node_modules\.bin\wdio wdio.conf.js</b>
<br>if need run simple file with test, write command: <b>.\node_modules\.bin\wdio wdio.conf.js --spec ./tests/supportCreateTask.js</b> (for exemple), need add "--spec" derictory(tests) and fileName.js
after test make report

write in terminal: <b>allure open</b>
