var calculatorPage = require('../pages/calc.object')  
describe("Calculator Tests", function () {
it("Check Title", function(){
    calculatorPage.get("http://juliemr.github.io/protractor-demo/")
    calculatorPage.vefiryHeaderValue("Super Calculator")
})

it("Check Calculations", function(){
    //verify calculations (firstval,secondval,operatorInUse)
    calculatorPage.setFirstValue(5)
    calculatorPage.setOperator("ADDITION")
    calculatorPage.setSecondValue(3)
    calculatorPage.clickGo()
    calculatorPage.verifycalculations(5,3,"ADDITION")
})

});