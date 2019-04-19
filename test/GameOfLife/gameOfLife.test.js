import { describe } from 'mocha';
const assert = require('chai').assert;
import GameOfLife from '../../src/GameOfLife/GameOfLife';

describe('GameOfLife', () => {
  it('can simulate a static block', () => {
    const block = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0]
    ];
    const largeBlockWindow = [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ];
    const game = new GameOfLife(block);
    assert.deepEqual(largeBlockWindow, game.displayWindow([-1, -1], [2, 2]));
    game.next();
    assert.deepEqual(largeBlockWindow, game.displayWindow([-1, -1], [2, 2]));
  });

  it('can simulate a spinner', () => {
    const spinner1 = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ];
    const spinner2 = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ];
    const game = new GameOfLife(spinner1);

    // Unchanged
    assert.deepEqual(spinner1, game.displayWindow([0, 0], [2, 2]));

    game.next();
    // Generation 2
    assert.deepEqual(spinner2, game.displayWindow([0, 0], [2, 2]));

    game.next();

    // Generation 3 (same as Generation 1)
    assert.deepEqual(spinner1, game.displayWindow([0, 0], [2, 2]));
  });

  it('can show windows of different sizes', () => {
    const board = [
      [0, 1, 0, 0, 0],
      [1, 0, 0, 1, 1],
      [1, 1, 0, 0, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ];
    const topLeftWindow = [
      [0, 1, 0],
      [1, 0, 0],
      [1, 1, 0]
    ];
    const game = new GameOfLife(board);
    assert.deepEqual(topLeftWindow, game.displayWindow([0, 0], [2, 2]));
    const middleWindow = [
      [0, 0, 1],
      [1, 0, 0],
      [1, 0, 0]
    ];
    assert.deepEqual(middleWindow, game.displayWindow([1, 1], [3, 3]));
    const bottomWindow = [
      [1, 1, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    assert.deepEqual(bottomWindow, game.displayWindow([0, 2], [5, 5]));
  });

  it('can simulate the readme example', () => {
    const example = [
      [0, 1, 0, 0, 0],
      [1, 0, 0, 1, 1],
      [1, 1, 0, 0, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ];
    const exampleResult = [
      [0, 0, 0, 0, 0],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const game = new GameOfLife(example);
    assert.deepEqual(example, game.displayWindow([0, 0], [4, 4]));
    game.next();
    assert.deepEqual(exampleResult, game.displayWindow([0, 0], [4, 4]));
  });
  // TODO: More tests go here
});
