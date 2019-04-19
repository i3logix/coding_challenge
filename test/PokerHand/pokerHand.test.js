import { describe } from 'mocha';
const assert = require('chai').assert;
import PokerHand from '../../src/PokerHand/PokerHand';

describe('PokerHand', () => {
  it('can rank a royal flush', () => {
    const hand = new PokerHand('As Ks Qs Js 10s');
    assert.deepEqual(hand.getRank(), 'Royal Flush');
  });

  it('can rank a pair', () => {
    const hand = new PokerHand('Ah As 10c 7d 6s');
    assert.deepEqual(hand.getRank(), 'One Pair');
  });

  it('can rank two pair', () => {
    const hand = new PokerHand('Kh Kc 3s 3h 2d');
    assert.deepEqual('Two Pair', hand.getRank());
  });

  it('can rank a flush', () => {
    const hand = new PokerHand('Kh Qh 6h 2h 9h');
    assert.deepEqual('Flush', hand.getRank());
  });

  // TODO: More tests go here
});
