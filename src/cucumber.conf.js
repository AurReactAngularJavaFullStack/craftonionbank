const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { createTestCafe, Selector } = require('testcafe');

function CustomWorld({ attach, parameters }) {
  this.attach = attach;
  this.parameters = parameters;

  // Set up any world properties here, like browser management with TestCafe
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000); // Set timeout for steps

module.exports = {
  default: `--format-options '{"snippetInterface": "synchronous"}' --require-module ts-node/register --require step-definitions/**/*.ts --format progress-bar --publish-quiet`,
};
