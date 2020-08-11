# Automation Using Protractor

## Pre-requisites
 -  Install Java Development Kit (JDK)
 - Install NodeJs. (NodeJs version must be greater than v0.10.0)
 - Install Visual Studio Code (or your favorite Editor). if using VS Code, install Typescript and JavaScript Support Extensions

## How to run Protractor
Start the Webdriver ```webdriver-manager start```
Run Protractor ```protractor conf/conf.js```

#Tutorials
1. https://medium.com/@mburujr/the-ultimate-test-automation-beginner-protractor-part-1-f1c4e3a0dbf6

2. https://medium.com/@mburujr/beginners-guide-to-test-automation-using-protractor-part-2-creating-a-jasmine-framework-a6fac06d4909

3. https://medium.com/@mburujr/the-ultimate-test-automation-beginner-protractor-part-1-f1c4e3a0dbf6

## reporting
Install allure reports
``` npm install jasmine-allure-reporter --save```
Install Allure commadline
``` npm install allure-commandline --save ``



The .xml report file is generated everytime you run the automation script into the created allure-results folder in your root directory. 
to get the allure report in a web page run the command
```allure serve "Path of your reports e.g C:\automation\Protractor\prot\allure-results for my case"
