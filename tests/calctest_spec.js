var calculatorPage = require('../pages/calc.object') 
var commondata= require('../testData/commonData.json') 
var data= require('../testData/data.json')

describe("Calculator Tests", function () {
it("Check Title", function(){
    calculatorPage.get(commondata.calcApp.URL)
    calculatorPage.vefiryHeaderValue(commondata.calcApp.HeaderText)
})

    it("Check Calculations", function(){
        //verify calculations (firstval,secondval,operatorInUse)
        calculatorPage.setFirstValue(data.data.firstValue)
        calculatorPage.setOperator(data.data.operator)
        calculatorPage.setSecondValue(data.data.secondValue)
        calculatorPage.clickGo()
        calculatorPage.verifycalculations(data.data.firstValue,data.data.secondValue,data.data.operator)
    })


});