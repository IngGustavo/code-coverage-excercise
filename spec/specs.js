const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const { report } = require('superagent');
const jasmine = new Jasmine();

let reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 3,
    verbosity: 4,
    listStyle: 'indent',
    activity: false
});

jasmine.addReporter(reporter);
jasmine.showColors(true);
jasmine.loadConfigFile('./spec/jasmine.json');
jasmine.execute();
