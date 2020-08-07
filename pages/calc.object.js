var calculatorPage = function () {
    //identify all the elements in the Calculator Page
    //Labels
    var pageHeader = element(by.xpath('/html/body/div/div/h3'));
    var finalResult = element(by.className('ng-binding'));

    //Textfields
    var firstValuetxt = element(by.model('first'));
    var secondValuetxt = element(by.model('second'));

    // Buttons and DropDown Menus
    var operators = element(by.model('operator'));
    var goButton = element(by.css('[ng-click="doAddition()"]'));

    //Methods
    //Launch Browser
    this.get = function (url) {
        browser.get(url);
    }
    //LABELS
    // pageHeader Methods
    // Here we just need to get the value of the element
    this.vefiryHeaderValue = function (headerText) {
        expect(pageHeader.getText()).toEqual(headerText);

    }

    //TEXTFIELDS
    //firstValue
    this.setFirstValue = function(fistValue){
        firstValuetxt.sendKeys(fistValue)
    }
    //secondValue
    this.setSecondValue = function(secondValue){
        secondValuetxt.sendKeys(secondValue)
    }

    //DROPDOWN
    this.setOperator = function(operatorInUse){
        operators.$('[value='+operatorInUse+']').click();
    }

    //BUTTON
    this.clickGo = function(){
        goButton.click();
    }

    //finalResult Methods
    this.verifycalculations = function(fistValue,secondValue,operatorInUse){
        finalResult.getText().then(function (cellValue) {
            var actualResults = parseFloat(cellValue);
            if (operatorInUse == 'ADDITION') {
                var expectedResults = (fistValue + secondValue);
                expect(actualResults).toBe(expectedResults);

            } else if (operatorInUse == 'DIVISION') {
                var expectedResults = (fistValue / secondValue)
                expect(actualResults).toBe(expectedResults);

            } else if (operatorInUse == 'MODULO') {
                var expectedResults = (fistValue % secondValue)
                expect(actualResults).toBe(expectedResults);

            } else if (operatorInUse == 'MULTIPLICATION') {
                var expectedResults = (fistValue * secondValue)
                expect(actualResults).toBe(expectedResults);

            } else if (operatorInUse == 'SUBTRACTION') {
                var expectedResults = (fistValue - secondValue)
                expect(actualResults).toBe(expectedResults);
            }

        })
    }






}
module.exports=new calculatorPage();