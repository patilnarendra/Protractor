var CalculatorHome=function (){
    this.firstInput=element(by.model('first'));
    this.secondInput=element(by.model('second'));
    this.resultButton=element(by.id('gobutton'));
    this.result=element(by.css("h2[class='ng-binding']"));
    this.gridResult=element(by.css("table.table>tbody tr:nth-child(1)>td:nth-child(3)"));

    this.get=function(){
        browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
            browser.sleep(5000);
        });  
    }

    this.selectOperation=function(valueOne,valueTwo,operation){
        this.firstInput.sendKeys(valueOne);
        this.secondInput.sendKeys(valueTwo);
        var elem=element(by.model("operator"));
            elem.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(val){
                if (val===operation) {
                    item.click().then(function(){
                        browser.sleep(3000);
                    });
                }
            });
        });     
        this.resultButton.click();
    }
};
module.exports = new CalculatorHome();