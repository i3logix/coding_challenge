const assert = require('chai').assert;
const application = require('../app.js');

describe('Application', () => {

  it('returns desired result', () => {
    assert.deepEqual(application(arguments), 'desired result')
  })
});
