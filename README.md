<h2>Congratulations for making it to the next stage of the i3logix interview!</h2>

These tests are designed to give us a sense of your style as a programmer as well as your ability to solve problems.

Like real life, we expect that you may need or want to look at some
completed solutions to these problems in order to inspire your solution. Please keep in mind though that during the next stage of the interview process you will need to make alterations to your code to solve for different use-cases and/or edge-cases, so please make sure to write something that you understand and can work with on the fly.

<b>Please only complete one of the three challenges!</b>

<h2>Submission Steps</h2>

This is what you'll need to do to submit your challenge:

1. Fork this repo
2. Once you're finished, email us a link to your repo

<h2>Testing and Additional Notes</h2>

This challenge includes a testing suite that can be accessed with the command `npm test` in the root of the project.

Additionally, by using babel you are also able to write your solution using ES6.

# The Game of Life

Write some code that evolves generations through the "game of
life". The input will be a game board of cells, either alive (1) or dead
(0).

The code should take this board and create a new board for the
next generation based on the following rules:
1) Any live cell with fewer than two live neighbors dies (underpopulation)
2) Any live cell with two or three live neighbors lives on to
the next generation (survival)
3) Any live cell with more than three live neighbors dies
(overcrowding)
4) Any dead cell with exactly three live neighbours becomes a
live cell (reproduction)

As an example, this game board as input:

```
0 1 0 0 0
1 0 0 1 1
1 1 0 0 1
0 1 0 0 0
1 0 0 0 1
```

Will have a subsequent generation of:

```
0 0 0 0 0
1 0 1 1 1
1 1 1 1 1
0 1 0 0 0
0 0 0 0 0
```

# Ranking Poker Hands

Write code that will evaluate a poker hand and determine its
rank.

Example:

Hand: Ah As 10c 7d 6s (Pair of Aces)

Hand: Kh Kc 3s 3h 2d (2 Pair)

Hand: Kh Qh 6h 2h 9h (Flush)

# Converting a Number to a String

Write code that will accept a number and convert it to the
appropriate string representation.

Basic Requirements:

* Represent numbers to the hundredth position
* Represent numbers as high as one billion

Examples:

Convert 2523.04
to "Two thousand five hundred twenty-three and 04/100 dollars"
