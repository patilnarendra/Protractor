describe('Calculator Test', function () {
    var calcObj = require("../PageObjects/calculatorPO");
    var using = require('jasmine-data-provider');
    var dat = require("../data");

    beforeAll(function () {
        calcObj.get();
    });

    using(dat.AdditionData, function (data, description) {
        it('Addition Test ' + description, function () {
            calcObj.selectOperation(data.firstinput, data.secondinput, "ADDITION");
            expect(calcObj.result.getText()).toBe(data.result);
            expect(calcObj.gridResult.getText()).toBe(data.result);
        });
    });

    using(dat.SubtractionData, function (data, description) {
        it('Subtraction Test ' + description, function () {
            calcObj.selectOperation(data.firstinput, data.secondinput, "SUBTRACTION");
            expect(calcObj.result.getText()).toBe(data.result);
            expect(calcObj.gridResult.getText()).toBe(data.result);
        });
    });

    xit('Multiplication Test', function () {
        calcObj.selectOperation(dat.Datadriven.multiplicationdata.firstdata, dat.Datadriven.multiplicationdata.seconddata, "MULTIPLICATION");
        expect(calcObj.result.getText()).toBe(dat.Datadriven.multiplicationdata.result);
    });

    xit('Division Test', function () {
        calcObj.selectOperation("3", "3", "DIVISION");
        expect(calcObj.result.getText()).toBe("1");
    });
});