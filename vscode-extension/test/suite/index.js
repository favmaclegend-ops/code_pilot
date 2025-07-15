const Mocha = require('mocha');
const path = require('path');
const testSuite = require('./index');

const mocha = new Mocha({
  ui: 'bdd',
  color: true
});

mocha.addFile(path.resolve(__dirname, 'testSuite.js'));

mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});

if (typeof testSuite.run === 'function') {
  testSuite.run();
}
