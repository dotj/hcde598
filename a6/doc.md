# A6 Molding and Casting

# Overview

This week's assignment was a multi-step process.

1. First, we needed to design a mold for our mold, which would be either 3D printed or CNC milled. This "mold<sup>2<sup>" will be used to cast a silicone mold.
2. Using our new silicone mold, we would then cast plaster pieces.



# Ideation

For this assignment, I decided I wanted to mold and cast a tile design. A tile would be flat and simple and dummy-proof to cast and without much experience

- tile geometry
- sketches
- algorithmic design

# Design

## Tile Design in Grasshopper/Rhino

- tile a (primary)
- lots of booleans
- squares + rotation + circles on edge

- tile b
- first tiled the primary tile
- created a box
- "cut out" the second shape

- original plan was to cast both but due to time constaints, decided to only do one tilexw


# Process

## Proposed workflow

Since there were multiple steps required for this project, I wrote down a proposed workflow for designing and fabrication my mold<sup>2</sup>.

grasshopper for base shape > rhino for details > export stupid triangle list > import to fusion 360 > 


## A Couple of False Start(s)

Before this week, I ordered machinable wax early in an attempt to be prepared. However, thanks to Leo's slack messages to the class, I realized that I had ordered the wrong size–I ordered the 3x3x3 inch block which would not fit in the Bantam mill. I could either wait and try to make my way to Fluke to buy a new block, or try to get trained to use the bandsaw in the Mill, and both options were inconvenient. I tried to take matters into my own hands, and cut the block at home... with a fruit knife.

It did not work. 0/10 would not recommend.


## Parametric Design with Grasshopper/Rhino

## CAD to CAM

- once the model is built, the next step was to generate the toolpath in the form of a gcode that would be used in the bantam
- exported stupid triangle list
- imported to fusion360
- create toolpath, preview
- export gcode
- import to bantam
- ready for the mill!!! ( ha ha nop)

## An Updated Workflow

- Another false start: machinable wax was just *barely* too large for the bantam mill
- tried to sand it down
- switched to 3d printing


## 3D Printing

- lol i hate 3d printing




# Results

Each week's project presented its own challenges and most have not been straightforward. This week was *particularly* non-straightforward.

## Workflow: Expectation vs. Reality

- successes, failures, etc.

## First 3D Printed Mold

## Second one??


## Source Files

- gh tile generator
- gh mold generator
- rhino designed pieces
- misc? stl, toolpaths, etc.


## Acknowledgements

- leo - cut wax block
- kimberly - heads up about wax being avail in fluke
- christa, nitya, irina - in lab with me


# References

- rhino/grasshopper forums


