# Mars Rover Kata (for PP/TBD <=> RGRR/TBD workshop)

## Coding Kata

Credits: Inspired by [Victor Farcic](https://technologyconversations.com/2014/10/17/java-tutorial-through-katas-mars-rover/); text from https://kata-log.rocks/mars-rover-kata

### Your Task

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

### Requirements (Stage 1) — already implemented

- You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
- The rover receives a character array of commands.
- Implement commands that move the rover forward/backward (f,b).
- Implement commands that turn the rover left/right (l,r).

### Requirements (Stage 2) — your tasks
- Implement wrapping at edges. But be careful, planets are spheres. Connect the x edge to the other x edge, so (1,1) for x-1 to (5,1), but connect vertical edges towards themselves in inverted coordinates, so (1,1) for y-1 connects to (5,1).
- Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

## Approach 1: Pair-Programming with Trunk-Based Development (PP/TBD)

- Pair-program most of the time (on-site or remotely)
- Use pair-programming as instant code review
- Push commits to trunk as frequently as you can (optimally, at the end of RGR cycle)
- Skip async code review via PRs/MRs (with rare exceptions when the pair wants extra feedback)

## Approach 2: Red-Green-Refactor-Review with Trunk-Based Development (RGRR/TBD)

Extension of TDD's Red-Green-Refactor cycle:

1. RED — write a failing test
2. GREEN — make it work (make a mess if necessary)
3. REFACTOR:
  - fix any mess introduced in GREEN step
  - act on any other structural changes you would like to do
  - check comments on few of your previous commits and either fix them here, or add them to your to-do list
4. REVIEW:
  - review new commits since your last review in the trunk branch
  - leave your feedback comments on the commits
5. Go back to step 1.

