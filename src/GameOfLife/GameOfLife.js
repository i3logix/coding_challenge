/**
 * i3logix Code Challenge
 *
 * Please refer to the README.md for challenge questions and complete your challenge below.
 */
export default class GameOfLife {
  constructor(board) {
    this.board = board;
  }

  next = () => {
    // TODO: Code to advance to next generation
  };

  /**
   * @param topLeft array (x,y) coords
   * @param bottomRight array (x,y) coords
   * @returns {number[][]}
   */
  displayWindow = (topLeft, bottomRight) => {
    // TODO: Code to display a window of the cells in the game
    return [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ];
  };
}
