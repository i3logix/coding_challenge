import { describe } from 'mocha';
const assert = require('chai').assert;
import CheckWriter from '../../src/CheckWriter/CheckWriter';

describe('CheckWriter', () => {
  it('can write a mortgage check', () => {
    const checkWriter = new CheckWriter(2523.04);
    assert.deepEqual(
      checkWriter.getDescription(),
      'Two thousand five hundred twenty-three and 04/100 dollars'
    );
  });

  it('can write checks for royalties', () => {
    const checkWriter = new CheckWriter('0.32');
    assert.deepEqual(checkWriter.getDescription(), 'Zero and 32/100 dollars');
  });

  it('can write checks for even dollar amounts', () => {
    const checkWriter = new CheckWriter(6);
    assert.deepEqual(checkWriter.getDescription(), 'Six and no/100 dollars');
  });

  // TODO: More tests go here
});
