var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    specs: ['./Tests/sampleTest-spec.js'],
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    }
};