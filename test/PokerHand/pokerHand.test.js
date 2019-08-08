import { describe } from 'mocha';
const assert = require('chai').assert;
import PokerHand from '../../src/PokerHand/PokerHand';

describe('PokerHand', () => {
  it('can rank a royal flush', () => {
    const hand = new PokerHand('As Ks Qs Js 10s');
    assert.deepEqual(hand.getRank(), 'Royal Flush');
  });

  it('can rank a Straight flush', () => {
    const hand = new PokerHand('9s Ks Qs Js 10s');
    assert.deepEqual(hand.getRank(), 'Straight Flush');
  });

  it('can rank a Four of a Kind', () => {
    const hand = new PokerHand('9s 10c 10h 10d 10s');
    assert.deepEqual(hand.getRank(), 'Four of a Kind');
  });

  it('can rank a Full House', () => {
    const hand = new PokerHand('9s 9d 10s 10d 10c');
    assert.deepEqual(hand.getRank(), 'Full House');
  });

  it('can rank a flush', () => {
    const hand = new PokerHand('Kh Qh 6h 2h 9h');
    assert.deepEqual('Flush', hand.getRank());
  });

  it('can rank a Straight', () => {
    const hand = new PokerHand('2h 3h 4h 5d Ah');
    assert.deepEqual('Straight', hand.getRank());
  });

  it('can rank a Three of a Kind', () => {
    const hand = new PokerHand('Ah As Ac 7d 6s');
    assert.deepEqual('Three of a Kind', hand.getRank());
  });

  it('can rank two pair', () => {
    const hand = new PokerHand('Kh Kc 3s 3h 2d');
    assert.deepEqual('Two Pair', hand.getRank());
  });

  it('can rank a One Pair', () => {
    const hand = new PokerHand('7d Qh 6h 2d 2h');
    assert.deepEqual('One Pair', hand.getRank());
  });

  it('can rank a One Pair', () => {
    const hand = new PokerHand('Ah As 10c 7d 6s');
    assert.deepEqual(hand.getRank(), 'One Pair');
  });

  // TODO: More tests go here
});
